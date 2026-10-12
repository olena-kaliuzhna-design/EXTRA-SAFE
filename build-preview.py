"""Build a single-file static preview (preview/index.html) from the Next export in out/.
Usage: npm run build && npx esbuild src/lib/interactions.ts --bundle --format=iife --global-name=ES --minify --outfile=preview/interactions.js && python3 scripts/build-preview.py"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'out/index.html').read_text()
css = ''
for href in re.findall(r'<link rel="stylesheet" href="([^"]+)"', html):
    css += (root / 'out' / href.lstrip('/')).read_text()
css = re.sub(r'@font-face\{[^}]*DM Sans Variable[^}]*\}', '', css)
body = re.search(r'<body[^>]*>(.*)</body>', html, re.S).group(1)
body = re.sub(r'<script\b[^>]*>.*?</script>', '', body, flags=re.S)
js = (root / 'preview/interactions.js').read_text()
page = f'''<title>EXTRA SAFE Homepage</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap">
<style>{css}\nhtml,body{{background:var(--background,#202020);color-scheme:dark}}body{{margin:0;font-family:var(--font-sans)}}</style>
{body}
<script>document.documentElement.setAttribute('data-theme','dark');document.body.classList.add('es');{js};ES.initInteractions();</script>
'''
(root / 'preview/index.html').write_text(page)
print('preview bytes', len(page))
