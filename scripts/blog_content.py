#!/usr/bin/env python3
"""Export the static article HTML to Markdown. Python standard library only.

Usage: python3 scripts/blog_content.py [--check]
HTML is the source of truth; do not edit generated Markdown by hand.
"""
import argparse
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://velocibar.app'
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

@dataclass
class Node:
    tag: str
    attrs: dict = field(default_factory=dict)
    children: list = field(default_factory=list)

    def walk(self, tag=None):
        if tag is None or self.tag == tag:
            yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.walk(tag)

    def text(self):
        return ''.join(child.text() if isinstance(child, Node) else child for child in self.children)

class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = Node('document')
        self.stack = [self.root]
        self.feed(source)
        self.close()

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs))
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack)-1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                break

    def handle_data(self, text):
        self.stack[-1].children.append(text)

def render(node, url):
    if isinstance(node, str):
        return re.sub(r'\s+', ' ', node)
    tag, attrs = node.tag, node.attrs
    if tag in {'script', 'style'} or attrs.get('class') in {'breadcrumbs', 'post-toc'}:
        return ''
    if tag == 'pre':
        return '\n\n```\n' + node.text().strip('\n') + '\n```\n\n'
    if tag == 'table':
        rows = [[render(cell, url).strip().replace('|', r'\|') for cell in row.children
                 if isinstance(cell, Node) and cell.tag in {'th', 'td'}] for row in node.walk('tr')]
        caption = next(node.walk('caption'), None)
        out = '\n\n' + (render(caption, url).strip() + '\n\n' if caption else '')
        for i, row in enumerate(rows):
            out += '| ' + ' | '.join(row) + ' |\n'
            if i == 0:
                out += '| ' + ' | '.join(['---'] * len(row)) + ' |\n'
        return out + '\n'
    if tag in {'ul', 'ol'}:
        items = [c for c in node.children if isinstance(c, Node) and c.tag == 'li']
        return '\n\n' + '\n'.join((f'{i}. ' if tag == 'ol' else '- ') + render(c, url).strip()
                                    for i, c in enumerate(items, 1)) + '\n\n'
    content = ''.join(render(c, url) for c in node.children)
    if tag in {'h1','h2','h3','h4','h5','h6'}:
        return '\n\n' + '#' * int(tag[1]) + ' ' + content.strip() + '\n\n'
    if tag in {'p', 'section', 'div', 'article', 'nav'}:
        return '\n\n' + content.strip() + '\n\n'
    if tag in {'strong', 'b'}:
        return '**' + content.strip() + '**'
    if tag in {'em', 'i'}:
        return '*' + content.strip() + '*'
    if tag == 'code':
        return '`' + content.strip() + '`'
    if tag == 'a' and attrs.get('href'):
        return '[' + content.strip() + '](' + urljoin(url, attrs['href']) + ')'
    if tag == 'br':
        return '\n'
    if tag == 'span' and attrs.get('class') == 'btn-icon':
        return content + ' '
    return content

def articles():
    return sorted(p for folder in ('blog', 'en/blog') for p in (ROOT/folder).glob('*.html') if p.stem != 'index')

def markdown(path):
    doc = Document(path.read_text()).root
    article = next(doc.walk('article'))
    canonical = next(n.attrs['href'] for n in doc.walk('link') if n.attrs.get('rel') == 'canonical')
    language = next(doc.walk('html')).attrs['lang']
    alternate = next(n.attrs['href'] for n in doc.walk('link')
                     if n.attrs.get('hreflang') == ('es' if language == 'en' else 'en'))
    prefix = (f'> Markdown version of {canonical} · [Versión en español]({alternate})\n\n' if language == 'en'
              else f'> Versión en Markdown de {canonical} · [English version]({alternate})\n\n')
    body = render(article, canonical)
    body = re.sub(r'\n[ \t]+', '\n', body)
    return prefix + re.sub(r'\n{3,}', '\n\n', body).strip() + '\n'

def outputs():
    generated = {p.with_suffix('.md'): markdown(p) for p in articles()}
    full = '# VelociBar — Product summary and blog articles\n\n'
    full += '> Compiled from llms.txt and the public article HTML. Articles retain their canonical URLs, language, publication dates, and sources.\n\n'
    full += (ROOT/'llms.txt').read_text().strip() + '\n'
    for content in generated.values():
        full += '\n---\n\n' + content
    generated[ROOT/'llms-full.txt'] = full
    return generated

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    stale = []
    for path, content in outputs().items():
        if args.check:
            if not path.exists() or path.read_text() != content:
                stale.append(str(path.relative_to(ROOT)))
        else:
            path.write_text(content)
    if stale:
        raise SystemExit('Stale generated content: ' + ', '.join(stale))
    print(('Checked' if args.check else 'Generated') + ' 10 article Markdown files and llms-full.txt.')

if __name__ == '__main__':
    main()
