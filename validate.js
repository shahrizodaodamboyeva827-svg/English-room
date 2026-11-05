const fs=require('fs');const LESSONS=[];function L(o){LESSONS.push(o)}
for(const f of process.argv.slice(2)) eval(fs.readFileSync(f,'utf8'));
let bad=0;
for(const l of LESSONS){const ids=l.g.map(g=>g.id);const tq=l.tq.map(t=>t[0]);const miss=ids.filter(i=>!tq.includes(i));const br=tq.filter(i=>!ids.includes(i));
 const ok=l.tq.every(t=>t[3]<t[2].length)&&l.li.q.every(q=>q[2]<q[1].length);
 const dupIds=ids.filter((x,i)=>ids.indexOf(x)!==i);
 let rx=true;try{l.w.c.forEach(c=>new RegExp(c[1],'gi'))}catch(e){rx=e.message}
 const lineSp=l.li.lines.every(x=>x[0]===0||x[0]===1);
 if(miss.length||br.length||!ok||rx!==true||dupIds.length||!lineSp) bad++;
 console.log(l.n,l.lvl,l.t.padEnd(36),'r',ids.length,'v',l.v.length,'tq',l.tq.length,miss.length?'UNTESTED '+miss:'',br.length?'BADREF '+br:'',ok?'':'ANSWER IDX!',rx===true?'':'REGEX '+rx,dupIds.length?'DUP '+dupIds:'');}
console.log('lessons',LESSONS.length,'problems',bad);
