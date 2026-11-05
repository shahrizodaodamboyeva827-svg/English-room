# English Room — vocab overhaul (user request 2026-11-01 18:23)

Requests: teacher pass 17.10.2009 + auto-login + no hint (DONE); background (DONE); bigger/bolder rules & examples (DONE);
vocab per user's plan (A1–A2 complete topic words, no extra words, NOT copied from Grammarway);
article in every vocab section using ALL words (+uz translation, questions); 21 topic lessons as separate vocab lessons.

Engine (DONE): src/vocab.js; content via VOC(n,{V,A,vr,x}) for grammar lessons and L({n:101.., kind:'vocab', after}) for topics.
Word = [word, IPA(UK), uz, example with *word*, exUz, picSpec]. Article marks: [word] or [display|lemma].
Check: node tools/vcheck.js [n,n] ; node tools/pics.js --check ; python3 build.py
Audio: cd er && node tools/texts.js jobs /home/claude/tts/jobs.json ; cd /home/claude/tts && nohup python3 gen.py > genN.log &
Then python3 tools/packs.py && python3 build.py

Topic lessons (n, after, lvl):
A0: 101 Countries (4), 102 Days/months/seasons (5), 103 Jobs (6)                      — DONE (w0c.js)
A1: 104 Education & school life (8), 105 Personality & character (9), 106 Daily routines (10),
    107 Hobbies & free time (12), 108 Household chores (14), 109 Places in a city (16)   — DONE (w1d.js, w1e.js)
A2 (NB lessons 17,18 are lvl A2): 110 Restaurants & ordering food (after 18), 111 Shopping & money (after 24)
A2: 112 Holidays & celebrations (20), 113 Transport & travelling (21), 114 Directions & locations (22),
    115 Weather expanded (23), 116 Sports & exercise (25), 117 Feelings & emotions (27),
    118 Body parts & health (28), 119 Daily problems & solutions (28), 120 Technology & Internet (29),
    121 Nature & environment (30)

Grammar-lesson vocab (VOC): A0 1–6 DONE (w0a.js, w0b.js). A1 7–16 DONE (w1a, w1b, w1c). A0 published 2026-11-01 (artifact v 1793542945-0c94).
Audio: A0 done (gen2). gen3.log running for A1 7–16+104–106 (started 19:15). After all content: texts jobs again + gen.
A1: 7 animals/fruit/veg; 8 subjects+classroom objects; 9 appearance+basic personality; 10 basic verbs;
    11 possessive words+belongings; 12 -ing verbs+time words; 13 clothes; 14 object pronouns+instructions;
    15 house types/rooms/parts; 16 things in rooms; 17 some/any/no compounds; 18 food+containers
A2: 19 frequency & time expressions; 20 irregular verbs V2 + past time words; 21 V3 + just/already/yet...;
    22 prepositions time/place/movement; 23 future time expressions; 24 adjectives + comparative forms;
    25 adverbs of manner; 26 question words; 27 linking words; 28 modal verbs; 29 verb+to / verb+-ing / too/enough; 30 quantifiers

Files: w0a/w0b/w0c (A0), w1a.. (A1), w2a.. (A2).

## STATUS 2026-11-01 ~20:30
ALL CONTENT WRITTEN: w0a..w0c (A0), w1a..w1e (A1 7–16 + 104–109), w2a..w2h (A2 17–30 + 110–121). vcheck: 51 vocab sections, 1759 words, 0 problems.
Placement changes: 109 after 16 (A1); 110 after 18 (A2); 111 after 24 (A2).
test9.py: all 51 lessons render, test items OK, no page errors. Station order verified.
Remaining: audio for A1/A2 (gen3 → then texts jobs + gen4), packs, build, coverage test8 (all lessons),
wrangler server test, README + Projects doc, publish artifact (replace mode, maybe split), SendUserFile, final Uzbek reply.
