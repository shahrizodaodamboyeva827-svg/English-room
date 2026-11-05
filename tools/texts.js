// Collects every text the site can speak: [text, voice, lesson]
const fs=require('fs');const LESSONS=[];function L(o){LESSONS.push(o)}const VOCS=[];function VOC(n,o){VOCS.push([n,o])}
const CF=['a0','a1a','a1b','a2a','a2b'].concat(fs.readdirSync(__dirname+'/../src/content').filter(f=>/^(w.*|b\d.*)\.js$/.test(f)).sort().map(f=>f.slice(0,-3)));
for(const f of CF) eval(fs.readFileSync(__dirname+'/../src/content/'+f+'.js','utf8'));
VOCS.forEach(([n,o])=>{const l=LESSONS.find(x=>x.n===n);if(l)Object.assign(l,o);});
LESSONS.forEach(l=>{if(l.V){l.v=[];l.vg=[];l.V.forEach(g=>{l.vg.push({id:g.g,t:g.t,s:l.v.length,c:g.w.length});g.w.forEach(w=>l.v.push(w));});}});
const artText=p=>String(p||'').replace(/\[([^\]|]+)(?:\|[^\]]+)?\]/g,'$1');
eval(fs.readFileSync(__dirname+'/../src/core.js','utf8').match(/\/\*SPEAK\*\/([\s\S]*?)\/\*\/SPEAK\*\//)[1].replace('const speakText','global.speakText'));
const podVoice=(p,i)=>p.v[i]+(i===1&&p.v[0]===p.v[1]?'2':'');
const cyrb53=(str,seed=0)=>{let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return(4294967296*(2097151&h2)+(h1>>>0)).toString(36);};
const out=[];const add=(t,v,n,kind)=>{t=speakText(t);if(t)out.push({t,v,n,kind})};
for(const l of LESSONS){
  (l.g||[]).forEach(r=>(r.e||[]).forEach(e=>add(e[0],'f',l.n,'ex')));
  (l.m||[]).forEach(m=>add(m[1],'f',l.n,'mist'));
  (l.v||[]).forEach(w=>{add(w[0],'f',l.n,'word');if(w[3])add(w[3],'f',l.n,'wex')});
  const s=l.s||{};(s.f||[]).forEach(f=>add(f[1],'f',l.n,'frame'));(s.a||[]).forEach(a=>add(a[1],'f',l.n,'sample'));(s.q||[]).forEach(q=>add(q,'m',l.n,'q'));
  if(l.li)l.li.lines.forEach(x=>add(x[1],podVoice(l.li,x[0]),l.n,'pod'));
  if(l.w&&l.w.model)add(l.w.model,'f',l.n,'model');
  (l.A||[]).forEach(A=>A.p.forEach(p=>add(artText(p[0]),'f',l.n,'art')));
  (l.vr||[]).forEach(r=>(r.e||[]).forEach(e=>add(e[0],'f',l.n,'ex')));
  (l.g||[]).forEach(r=>(r.tr||[]).forEach(t=>add(String(t[1]).split('|')[0],'f',l.n,'tr')));
  (s.st||[]).forEach(x=>add(x[2],'f',l.n,'st'));
  if(l.w&&l.w.cv){l.w.cv.phr.forEach(p=>add(p[0],'f',l.n,'cvp'));l.w.cv.dlg.forEach(d=>add(String(d[1]).replace(/\*/g,''),d[0]===0?'f':'m',l.n,'cvd'));}
  if(l.vt){const clean=x=>String(x).replace(/\*/g,'');(l.vt.col||[]).forEach(c=>add(clean(c[2]),'f',l.n,'vt'));(l.vt.pv||[]).forEach(c=>add(clean(c[2]),'f',l.n,'vt'));(l.vt.use||[]).forEach(u=>u[2].forEach(x=>add(clean(x),'f',l.n,'vt')));(l.vt.ex||[]).forEach(x=>add(String(x[0]).replace(/\*/g,'').replace('___',x[1].split('|')[0]),'f',l.n,'vt'));}
  if(l.pod)(l.pod.pre||[]);
}
// son o‘quvchi uchun bo‘laklar (0–99, yuzliklar)
{const O=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],T=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
 const n99=n=>n<20?O[n]:T[Math.floor(n/10)]+(n%10?'-'+O[n%10]:'');
 const L3=LESSONS.find(l=>l.x==='numbers');if(L3){for(let i=0;i<100;i++)add(n99(i),'f',L3.n,'num');for(let h=1;h<10;h++)add(O[h]+' hundred','f',L3.n,'num');['hundred','thousand','million','and','oh'].forEach(x=>add(x,'f',L3.n,'num'));}}
module.exports={LESSONS,out,speakText,cyrb53,podVoice};
if(process.argv[2]==='jobs'){const seen=new Set(),jobs=[];out.forEach(o=>{const k=cyrb53(o.v+'|'+o.t);if(seen.has(k))return;seen.add(k);jobs.push({k,v:o.v,t:o.t,kind:o.kind,n:o.n})});fs.writeFileSync(process.argv[3],JSON.stringify(jobs));console.log('jobs',jobs.length);process.exit(0)}
if(require.main===module){
  const by={};let ch=0;const uniq=new Set();
  out.forEach(o=>{by[o.kind]=(by[o.kind]||0)+1;const k=o.v+'|'+o.t;if(!uniq.has(k)){uniq.add(k);ch+=o.t.length}});
  console.log(by,'unique',uniq.size,'chars',ch);
  const ex=LESSONS.reduce((a,l)=>a+l.g.reduce((b,r)=>b+(r.e||[]).length,0),0);
  console.log('examples',ex,'vocab',LESSONS.reduce((a,l)=>a+l.v.length,0));
}
