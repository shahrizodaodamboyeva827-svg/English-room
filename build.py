import pathlib, json, hashlib, subprocess
S = pathlib.Path('src'); D = pathlib.Path('dist')
subprocess.run(['node', 'tools/pics.js'], check=True)
t = (S/'template.html').read_text()
css = (S/'style.css').read_text()
parts = ['core.js'] + [f'content/{f}' for f in ['a0.js','a1a.js','a1b.js','a2a.js','a2b.js']] + sorted('content/' + f.name for f in (S/'content').glob('w*.js')) + sorted('content/' + f.name for f in (S/'content').glob('b[0-9]*.js')) + ['student.js','vocab.js','b1.js','teacher.js','app.js']
js = '\n'.join((S/p).read_text() for p in parts)
notes = {}
for f in sorted((S/'notes').glob('*.txt')):
    cur = None
    for line in f.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith('#'): continue
        if line.startswith('@'): cur = int(line[1:]); notes[cur] = {}; continue
        k, txt = line.split(' ', 1); notes[cur][int(k[1:]) - 1] = txt
js = 'const NOTES = ' + json.dumps(notes, ensure_ascii=False) + ';\n' + js
pics = json.loads((D/'pics.json').read_text())
audio = json.loads((D/'audio.json').read_text()) if (D/'audio.json').exists() else None
media = {'i': pics['i'], 'l': pics['l'], 'a': audio}
media_js = 'window.MEDIA=' + json.dumps(media, ensure_ascii=False, separators=(',', ':')) + ';window.mediaReady&&window.mediaReady();'
mv = hashlib.sha1(media_js.encode()).hexdigest()[:10]
(D/'media.js').write_text(media_js)
html = t.replace('/*CSS*/', css).replace('/*JS*/', js).replace('__MV__', mv)
(D/'index.html').write_text(html)
site = D/'site'; site.mkdir(exist_ok=True)
idx = t.replace('<style>\n/*CSS*/\n</style>', '<link rel="stylesheet" href="style.css?v=__MV__">').replace('<script>\n/*JS*/\n</script>', '<script src="app.js?v=__MV__"></script>').replace('__MV__', mv)
assert 'style.css' in idx and 'app.js' in idx
(site/'index.html').write_text(idx); (site/'style.css').write_text(css); (site/'app.js').write_text(js); (site/'media.js').write_text(media_js)
(site/'_headers').write_text('/*\n  Permissions-Policy: microphone=(self)\n')
(site/'netlify.toml').write_text('# Netlify: /api/* so\'rovlarini Cloudflare workerga yo\'naltiradi (o\'quvchilar, Teacher panel, ovoz paketlari)\n[[redirects]]\n  from = "/api/*"\n  to = "https://YOUR-WORKER.YOUR-ACCOUNT.workers.dev/api/:splat"\n  status = 200\n  force = true\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    Permissions-Policy = "microphone=(self)"\n')
w = pathlib.Path('worker/worker.src.js').read_text()
w = w.replace('const HTML = "__HTML__";', 'const HTML = ' + json.dumps(html, ensure_ascii=True) + ';')
w = w.replace('const MEDIA_JS = "__MEDIA__";', 'const MEDIA_JS = ' + json.dumps(media_js, ensure_ascii=True) + ';')
(D/'worker.js').write_text(w)
print('index.html', len(html), 'media.js', len(media_js), 'worker.js', len(w), 'audio packs', len(audio['p']) if audio else 0)
