#!/usr/bin/env python3
"""Check crawlable blog metadata, links, translations, and generated content."""
import json
import re
from urllib.parse import urlparse, unquote
from xml.etree import ElementTree
from blog_content import ROOT, ORIGIN, Document, articles, outputs

errors = []
pages = {p: Document(p.read_text()).root for folder in ('blog', 'en/blog')
         for p in (ROOT/folder).glob('*.html')}
cache = dict(pages)
sitemap = ElementTree.parse(ROOT/'sitemap.xml')
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
mapped = {u.find('s:loc', ns).text: u for u in sitemap.findall('s:url', ns)}

def require(ok, path, message):
    if not ok:
        errors.append(f'{path.relative_to(ROOT)}: {message}')

def nodes(doc, tag, **attrs):
    return [n for n in doc.walk(tag) if all(n.attrs.get(k) == v for k, v in attrs.items())]

def destination(url):
    parsed = urlparse(url)
    path = ROOT/unquote(parsed.path.lstrip('/'))
    return path/'index.html' if path.is_dir() else path

for path, doc in pages.items():
    canonical = nodes(doc, 'link', rel='canonical')
    require(len(canonical) == 1, path, 'one canonical URL required')
    url = ORIGIN+'/'+str(path.relative_to(ROOT)).replace('index.html','')
    require(bool(canonical) and canonical[0].attrs['href'] == url, path, 'canonical must match this page')
    require(len(list(doc.walk('h1'))) == 1, path, 'one visible H1 required')
    for key in ('description', 'robots'):
        require(len(nodes(doc, 'meta', name=key)) == 1, path, f'one {key} meta required')
    robots = nodes(doc, 'meta', name='robots')[0].attrs['content']
    require(not any(token in robots for token in ('noindex','nosnippet','nofollow')), path, 'restrictive robots directive')
    require(url in mapped, path, 'missing from sitemap')
    alternates = {n.attrs.get('hreflang'): n.attrs['href'] for n in doc.walk('link') if n.attrs.get('hreflang')}
    require(set(alternates) == {'es','en','x-default'}, path, 'missing language alternate')
    for language in ('es','en'):
        target = destination(alternates[language])
        require(target in pages, path, 'missing translation')
        if target in pages:
            reverse = {n.attrs.get('hreflang'): n.attrs['href'] for n in pages[target].walk('link') if n.attrs.get('hreflang')}
            require(reverse == alternates, path, 'translations must share reciprocal hreflang links')
            require(next(pages[target].walk('html')).attrs['lang'] == language, path, 'translation language mismatch')
    ids = [n.attrs['id'] for n in doc.walk() if 'id' in n.attrs]
    require(len(ids) == len(set(ids)), path, 'duplicate anchor IDs')
    for n in doc.walk():
        attr = 'href' if n.tag in ('a','link') else 'src' if n.tag in ('script','img') else None
        if not attr or not n.attrs.get(attr):
            continue
        href = n.attrs[attr]
        parsed = urlparse(href)
        if parsed.netloc and parsed.netloc != 'velocibar.app':
            continue
        if parsed.scheme not in ('','http','https'):
            continue
        target = path if not parsed.path else destination(href)
        require(target.exists(), path, f'broken local resource: {href}')
        if parsed.fragment and target.suffix == '.html' and target.exists():
            if target not in cache:
                cache[target] = Document(target.read_text()).root
            require(any(t.attrs.get('id') == unquote(parsed.fragment) for t in cache[target].walk()), path, f'broken fragment: {href}')
    require(not any('/app.js' in n.attrs.get('src','') for n in doc.walk('script')), path, 'blog should use the small blog script')
    for n in doc.walk('script'):
        if n.attrs.get('type') == 'application/ld+json':
            try:
                json.loads(n.text())
            except json.JSONDecodeError:
                errors.append(f'{path}: invalid JSON-LD')
    if path in articles():
        schemas = [json.loads(n.text()) for n in nodes(doc,'script',type='application/ld+json')]
        post = next(s for s in schemas if s['@type'] == 'BlogPosting')
        h1 = next(doc.walk('h1')).text()
        description = nodes(doc,'meta',name='description')[0].attrs['content']
        require(post['headline'] == h1, path, 'schema headline differs from H1')
        require(post['description'] == description, path, 'schema description differs from meta')
        require(post['mainEntityOfPage'] == url, path, 'schema canonical mismatch')
        dates = {n.attrs['datetime'] for n in doc.walk('time')}
        require({post['datePublished'],post['dateModified']} <= dates, path, 'schema dates must be visible')
        require(post['datePublished'] <= post['dateModified'], path, 'modified date precedes publication')
        require(mapped[url].find('s:lastmod',ns).text == post['dateModified'], path, 'sitemap date differs from article')
        require(any(n.attrs.get('rel') == 'author' and post['author']['name'] in n.text() for n in doc.walk('a')), path, 'schema author must be visible')
        visible_links = {n.attrs.get('href') for n in next(doc.walk('article')).walk('a')}
        require(len(post.get('citation',[])) >= 2 and set(post['citation']) <= visible_links, path, 'citations must have visible source links')
        require(any(n.attrs.get('class') == 'post-summary' for n in doc.walk('p')), path, 'missing opening answer')
        require('networkquality' not in doc.text(), path, 'incorrect command capitalization')

for path, content in outputs().items():
    require(path.exists() and path.read_text() == content, path, 'generated content is stale; run scripts/blog_content.py')

require((ROOT/'blog.js').stat().st_size < 2048, ROOT/'blog.js', 'blog script exceeds 2 KiB budget')
require((ROOT/'assets/fonts/manrope-semibold.woff2').exists(), ROOT/'styles.css', 'missing WOFF2 font')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} blog pages; canonical/hreflang/sitemap, local resources and anchors, structured data, authorship/dates/sources, and generated content.')
