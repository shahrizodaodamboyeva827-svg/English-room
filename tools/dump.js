const {LESSONS}=require('./texts.js');const [a,b]=process.argv.slice(2).map(Number);
const cut=(s,n)=>String(s).replace(/<[^>]+>/g,'').slice(0,n);
for(const l of LESSONS){if(l.n<a||l.n>b)continue;console.log(`@${l.n} ${l.t} | ${l.topic||''}`);let i=0;
 l.g.forEach(r=>(r.e||[]).forEach(e=>console.log(`e${++i} ${cut(e[0],70)} = ${cut(e[1],40)}`)));
 l.v.forEach((w,j)=>console.log(`v${j+1} ${w[0]} = ${cut(w[2],30)}`));}
