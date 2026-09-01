const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const distDir = path.join(__dirname, '..', 'dist');
const htmlFiles = walk(distDir);
const validPaths = new Set();
for (const f of htmlFiles) {
  let rel = '/' + path.relative(distDir, f).split(path.sep).join('/');
  rel = rel.replace(/index\.html$/, '');
  if (rel === '') rel = '/';
  validPaths.add(rel);
}

let brokenCount = 0;
const seen = new Set();
for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8');
  const hrefRe = /href="(\/[^"]*)"/g;
  let m;
  while ((m = hrefRe.exec(html))) {
    let href = m[1];
    if (href.startsWith('//')) continue;
    href = href.split('#')[0].split('?')[0];
    if (href === '') continue;
    if (
      href === '/favicon.svg' ||
      href === '/robots.txt' ||
      href === '/og-default.svg' ||
      href.startsWith('/sitemap') ||
      href.startsWith('/_astro/')
    )
      continue;
    if (!validPaths.has(href)) {
      const key = href + ' <- ' + path.relative(distDir, f);
      if (!seen.has(key)) {
        seen.add(key);
        console.log('BROKEN:', href, 'in', path.relative(distDir, f));
        brokenCount++;
      }
    }
  }
}
console.log('Total unique broken internal links:', brokenCount);
console.log('Total valid paths:', validPaths.size);
