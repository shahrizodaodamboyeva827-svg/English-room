# Ovoz kliplarini darslar bo'yicha paketlarga yig'adi: dist/audio/<id>.bin + dist/audio.json + zip
import json, os, hashlib, zipfile, sys
J = json.load(open('/home/claude/tts/jobs.json'))
CL = '/home/claude/tts/clips'
OUT = 'dist/audio'; os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT): os.remove(os.path.join(OUT, f))
MAX = 640 * 1024
packs, index, L = [], {}, {}
missing = 0
for n in sorted({j['n'] for j in J}):
    cur, part = [], 0
    def flush():
        global cur, part
        if not cur: return
        data = b''.join(c[1] for c in cur)
        pid = f"l{n:02d}{'abcdefgh'[part]}-{hashlib.sha1(data).hexdigest()[:6]}"
        pi = len(packs); packs.append(pid); L.setdefault(n, []).append(pi)
        off = 0
        for k, b in cur: index[k] = [pi, off, len(b)]; off += len(b)
        open(f'{OUT}/{pid}.mp3', 'wb').write(data)
        cur, part = [], part + 1
    size = 0
    for j in [j for j in J if j['n'] == n]:
        fp = f"{CL}/{j['k']}.mp3"
        if not os.path.exists(fp): missing += 1; continue
        b = open(fp, 'rb').read()
        if size + len(b) > MAX: flush(); size = 0
        cur.append((j['k'], b)); size += len(b)
    flush()
json.dump({'p': packs, 'k': index, 'L': {str(k): v for k, v in L.items()}}, open('dist/audio.json', 'w'), separators=(',', ':'))
z = 'dist/english-room-ovozlar.zip'
with zipfile.ZipFile(z, 'w', zipfile.ZIP_STORED) as zf:
    for pid in packs: zf.write(f'{OUT}/{pid}.mp3', f'{pid}.mp3')
tot = sum(os.path.getsize(f'{OUT}/{p}.mp3') for p in packs)
print('packs', len(packs), 'clips', len(index), 'missing', missing, 'MB', round(tot / 1e6, 2))
