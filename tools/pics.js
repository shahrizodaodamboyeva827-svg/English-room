// Rasm xaritasi -> dist/media.json (ikonalar + dars rasmlari). Ishlatish: node tools/pics.js [--check]
const fs = require('fs'), path = require('path');
const { LESSONS } = require('./texts.js');
const NM = '/home/claude/imgsrc/node_modules/@iconify-json/';
const F = require(NM + 'fluent-emoji-flat/icons.json'), CF = require(NM + 'circle-flags/icons.json');
const TONE = 'medium';
const getF = n => F.icons[n] || (F.aliases && F.aliases[n] && F.icons[F.aliases[n].parent]);
const resolve = n => {
  if (n.startsWith('flag:')) { const b = CF.icons[n.slice(5)]; return b ? { id: n, body: b.body, w: b.width || CF.width || 512, h: b.height || CF.height || 512 } : null; }
  let name = n;
  if (!/-(light|medium-light|medium|medium-dark|dark)$/.test(n) && getF(n + '-' + TONE)) name = n + '-' + TONE;
  const b = getF(name); return b ? { id: name, body: b.body, w: b.width || F.width || 32, h: b.height || F.height || 32 } : null;
};

// ikonaning ma'nosiga mos jonli harakat (CSS: .a-<nom>)
const ANIM = [
  ['rage', /angry-face|pouting|steam-from-nose|symbols-on-mouth|enraged|skull|devil/],
  ['tremble', /fearful|anxious|scream|grimacing|cold-face|worried|nauseated|face-with-spiral|exploding|downcast-face-with-sweat|sweat-droplets|hot-face|face-with-thermometer|face-with-head-bandage|face-with-medical-mask|sneezing/],
  ['sob', /crying|loudly-crying|pleading|pensive|disappointed|smiling-face-with-tear|holding-back-tears|frowning|slightly-frowning|persevering|weary/],
  ['joy', /laughing|tears-of-joy|grinning|beaming|smiling|star-struck|partying|heart-eyes|savoring|relieved|winking|nerd|zany|sunglasses|face-with-tongue|kissing|hugging|face-in-clouds/],
  ['snooze', /sleeping|sleepy|person-in-bed|^bed$|zzz|couch/],
  ['yawn', /yawning|unamused|face-with-rolling|neutral|expressionless/],
  ['tilt', /thinking|monocle|raised-eyebrow|confused|shrugging|nerd|magnifying|detective|crystal-ball|flushed|face-with-hand-over|face-without|zipper|lying/],
  ['dance', /dancing|cartwheel|music|guitar|microphone|violin|saxophone|drum|headphone|musical|performing|ballet|kimono|sari|party-popper|confetti/],
  ['swim', /swimming|water-wave|water-polo|rowing|surfing|whale|dolphin|fish|shark|octopus|squid|crab|shrimp|seal|otter|sailboat|canoe/],
  ['run', /running|runner|biking|skiing|skating|boxing|wrestling|lifting|golfing|tennis|volleyball|basketball|soccer|football|handball|cricket|hockey|ping-pong|badminton|skateboard|roller|jumping|bouncing|fencing|martial/],
  ['walk', /walking|hiking|standing|boy|girl|^man|woman|person|child|baby|student|teacher|worker|farmer|cook|pilot|astronaut|firefighter|police|guard|judge|mechanic|scientist|artist|singer|detective|santa|bride|princess|prince|merperson/],
  ['drive', /automobile|taxi|^bus$|^bus-|minibus|trolleybus|train|metro|tram|truck|fire-engine|ambulance|police-car|motorcycle|scooter|racing-car|bicycle|van|pickup|tractor|trolley|monorail|cable|oncoming/],
  ['fly', /airplane|rocket|helicopter|satellite|bird|parrot|eagle|owl|dove|duck|swan|bee|butterfly|kite|balloon|flying|dragon|ladybug|mosquito|bat|feather|dashing/],
  ['sail', /boat|ship|ferry|anchor/],
  ['hop', /dog|cat|horse|cow|sheep|goat|camel|rabbit|mouse|rat|hamster|lion|tiger|leopard|elephant|monkey|gorilla|bear|wolf|fox|giraffe|chicken|rooster|chick|pig|boar|donkey|deer|ewe|ram|kangaroo|zebra|hippo|rhino|squirrel|racoon|panda|koala|llama|frog|unicorn|bison|ox|water-buffalo|poodle|guide-dog|service-dog/],
  ['crawl', /snail|turtle|lizard|crocodile|worm|ant|beetle|cricket|spider|scorpion/],
  ['slither', /snake|dragon/],
  ['flicker', /^fire$|candle|diya|bonfire|campfire|cooking|hot-springs|birthday-cake|fireworks|sparkler|firecracker/],
  ['spin', /^sun$|sun-with-face|sunflower|gear|wheel|ferris|cyclone|dizzy|tornado|ringed-planet|globe|world-map|compass|atom|counterclockwise|clockwise|recycl|repeat/],
  ['twinkle', /star|sparkles|glowing|shooting|crescent|moon|night-with|milky|crystal|gem|diamond|ring$|trophy|medal|crown|bullseye|hundred|ribbon/],
  ['zap', /high-voltage|lightning|electric|battery|plug|zap|collision/],
  ['drip', /droplet|potable|shower|bathtub|umbrella-with-rain|cloud-with-rain|sweat|ice-cube|soap|bubbles|bucket|sponge|sink/],
  ['fall', /snow|^ice$|ice-cube|ice-skate|igloo|sled/],
  ['swirl', /wind|tornado|fog|dash|cloud|leaf|maple|fallen|tulip|rose|blossom|hibiscus|flower|sunrise|rainbow|seedling|herb|clover|palm|tree|cactus|plant/],
  ['ring', /alarm|bell|telephone|mobile|phone|loudspeaker|megaphone|postal|pager/],
  ['tick', /clock|timer|stopwatch|watch|thermometer/],
  ['flip', /hourglass|coin|banknote|money|credit-card|receipt|ticket|label|moneybag|dollar|euro|pound|yen/],
  ['beat', /heart|kiss-mark|anatomical|lungs|brain/],
  ['blink', /light-bulb|warning|stop-sign|no-entry|police-car-light|traffic|siren|exclamation|question|check-mark|cross-mark|prohibited|bell-with/],
  ['wave', /waving|wave-hand|hand-with-fingers|raised-hand|raising-hand|open-hands|palm|backhand|call-me|victory|crossed-fingers|index-pointing|folded-hands|pray/],
  ['clap', /clapping|thumbs|ok-hand|handshake|flexed|fist|biceps|raised-fist|oncoming-fist|palms/],
  ['up', /up-arrow|up-right|top-arrow|up-left/],
  ['down', /down-arrow|down-right|down-left/],
  ['nudge', /left-arrow|right-arrow|back-arrow|end-arrow|soon-arrow|curving|left-right|up-down/],
  ['read', /book|notebook|ledger|newspaper|scroll|memo|pencil|pen|page|envelope|label|card-index|bookmark|clipboard|file/],
  ['look', /eyes|^eye|ear$|nose|tongue|mouth|tooth|bone|foot|leg|arm|hand|footprints/],
  ['pop', /gift|package|wrapped|balloon|piñata|confetti|bouquet|shopping|bag|handbag|backpack|luggage|briefcase|takeout|bento|pizza|hamburger|french|hot-dog|sandwich|taco|burrito|salad|food|cake|cookie|doughnut|candy|lollipop|chocolate|ice-cream|apple|banana|grapes|melon|watermelon|peach|cherry|strawberry|lemon|pear|plum|mango|pineapple|coconut|kiwi|tomato|carrot|corn|pepper|potato|onion|garlic|bread|croissant|baguette|cheese|egg|meat|poultry|bacon|steak|rice|curry|ramen|spaghetti|stew|pot|bowl|teacup|teapot|coffee|tea|milk|beverage|cup|wine|beer|tumbler|jar|salt|butter|honey|pancakes|waffle|pretzel|bagel|flatbread|dumpling|oden|sushi|house|office|school|hospital|bank|hotel|store|factory|castle|mosque|classical|building|stadium|tent|door|window|elevator|toilet|couch|chair|mirror|lamp|television|radio|laptop|computer|keyboard|printer|camera|video|film|clapper|projector|key|lock|hammer|wrench|screwdriver|toolbox|broom|bucket|scissors|paperclip|link|robot|alien|ghost/]
];
const animOf = n => { const b = n.replace(/-(light|medium-light|medium|medium-dark|dark)$/, ''); for (const [k, re] of ANIM) if (re.test(b)) return k; return 'float'; };
const minify = s => s.replace(/(\d+\.\d{2})\d+/g, '$1').replace(/\s+/g, ' ');
const src = {};
for (const f of fs.readdirSync(path.join(__dirname, '../src/pics')).filter(f => f.endsWith('.txt')).sort()) {
  let cur = null;
  for (let line of fs.readFileSync(path.join(__dirname, '../src/pics', f), 'utf8').split('\n')) {
    line = line.trim(); if (!line || line.startsWith('#')) continue;
    if (line.startsWith('@')) { cur = +line.slice(1); src[cur] = src[cur] || { e: {}, v: {} }; continue; }
    const m = line.match(/^([ev])(\d+)\s+(.+)$/); if (!m) { console.log('BAD LINE', f, line); continue; }
    src[cur][m[1]][+m[2]] = m[3].trim();
  }
}
const icons = {}, ids = {}, problems = [];
const iconRef = n => { const r = resolve(n); if (!r) { problems.push('MISSING ' + n); return null; } if (!(r.id in ids)) { ids[r.id] = Object.keys(ids).length.toString(36); icons[ids[r.id]] = [r.w, minify(r.body), animOf(r.id)]; } return ids[r.id]; };
// spec -> compact: {m:[ids], b:id|null, l:label, s:swatch, n:neg, q:question}
const compile = (spec, where) => {
  const o = {}; const toks = spec.split(/\s+/);
  for (const t of toks) {
    if (t === '!') o.n = 1; else if (t === '?') o.q = 1;
    else if (t.startsWith('#')) o.l = t.slice(1).replace(/_/g, ' ');
    else if (t.startsWith('sw:')) { if (!o.m && !o.s) o.s = t.slice(3); else o.bs = t.slice(3); }
    else if (!o.m && !o.s) { o.m = t.split('+').map(iconRef).filter(Boolean); }
    else if (!o.b && !o.bs) o.b = iconRef(t);
    else problems.push('EXTRA TOKEN ' + t + ' in ' + where);
  }
  return o;
};
const out = {};
for (const l of LESSONS) {
  const s = src[l.n] || { e: {}, v: {} };
  if (l.lvl === 'B1' || l.lvl === 'B2') { let q = 0; (l.g || []).forEach(r => (r.e || []).forEach(e => { q++; if (e[2] && !s.e[q]) s.e[q] = e[2]; })); src[l.n] = s; }
  const ne = (l.lvl === 'B1' || l.lvl === 'B2') && !Object.keys(s.e).length ? 0 : (l.g || []).reduce((a, r) => a + (r.e || []).length, 0);
  const e = [], v = [];
  for (let i = 1; i <= ne; i++) { if (!s.e[i]) problems.push(`L${l.n} e${i} missing`); e.push(s.e[i] ? compile(s.e[i], `L${l.n} e${i}`) : null); }
  if (l.V) (l.v || []).forEach((w, i) => { const sp = (w[5] || '').trim(); v.push(sp && sp !== '-' ? compile(sp, `L${l.n} ${w[0]}`) : null); if (!sp) problems.push(`L${l.n} no pic: ${w[0]}`); });
  else for (let i = 1; i <= (l.v || []).length; i++) v.push(s.v[i] ? compile(s.v[i], `L${l.n} v${i}`) : null);
  if (Object.keys(s.e).length > ne) problems.push(`L${l.n} extra e (${Object.keys(s.e).length}>${ne})`);
  out[l.n] = { e, v };
}
const miss = [...new Set(problems.filter(p => p.startsWith('MISSING')).map(p => p.slice(8)))];
const names = Object.keys(F.icons).concat(Object.keys(F.aliases || {}));
miss.forEach(n => { const w = n.split('-')[0]; console.log('MISSING', n, '→', names.filter(x => x.includes(w) && !/-(light|medium|dark)/.test(x)).slice(0, 8).join(' ')); });
problems.filter(p => !p.startsWith('MISSING')).forEach(p => console.log(p));
const json = JSON.stringify({ i: icons, l: out });
fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });
if (!process.argv.includes('--check')) fs.writeFileSync(path.join(__dirname, '../dist/pics.json'), json);
console.log('icons', Object.keys(icons).length, 'size', (json.length / 1024).toFixed(0) + 'KB', 'problems', problems.length);
