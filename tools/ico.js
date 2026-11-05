// node tools/ico.js word word ... -> lists matching fluent-emoji-flat icon names
const F = require('/home/claude/imgsrc/node_modules/@iconify-json/fluent-emoji-flat/icons.json');
const names = Object.keys(F.icons).concat(Object.keys(F.aliases || {})).filter(n => !/-(light|medium-light|medium|medium-dark|dark)$/.test(n));
for (const q of process.argv.slice(2)) console.log(q + ': ' + names.filter(n => n.includes(q)).slice(0, 25).join(' '));
