const questions = [
  {
    number: 1,
    question: "Isolovan\u00e9 vodi\u010de jsou barevn\u011b ozna\u010deny",
    answer:
      "Lx f\u00e1zov\u00e9 vodi\u010de \u2013 \u010dern\u00e1, hn\u011bd\u00e1, \u0161ed\u00e1; N st\u0159edn\u00ed vodi\u010de \u2013 sv\u011btle modr\u00fd; PE ochrann\u00fd vodi\u010d \u2013 zeleno\u017elut\u00fd",
  },
  {
    number: 2,
    question: "Zdroje pro ochranu SELV a PELV mohou b\u00fdt nap\u0159.",
    answer: "bezpe\u010dnostn\u00ed ochrann\u00ed transform\u00e1tor",
  },
  {
    number: 3,
    question:
      "Pro \u00fa\u010dely ochrany z hlediska bezpe\u010dnosti dotyku se nap\u011bt\u00ed d\u011bl\u00ed na",
    answer: "nebezpe\u010dn\u00e9 a bezpe\u010dn\u00e9 nap\u011bt\u00ed",
  },
  {
    number: 4,
    question:
      "Co je \u00fa\u010delem revize elektrick\u00e9ho za\u0159\u00edzen\u00ed",
    answer:
      "ov\u011b\u0159en\u00ed stavu za\u0159\u00edzen\u00ed z hlediska bezpe\u010dnosti",
  },
  {
    number: 5,
    question:
      "Na pracovi\u0161t\u00edch, kde je stanoven vedouc\u00ed pr\u00e1ce, m\u00e1 dozor nad bezpe\u010dnosti v\u0161ech pracovn\u00edk\u016f a pou\u017e\u00edv\u00e1n\u00ed ochrann\u00fdch pom\u016fcek",
    answer: "vedouc\u00ed pr\u00e1ce",
  },
  {
    number: 6,
    question:
      "Postup p\u0159i poskytov\u00e1n\u00ed prvn\u00ed pomoci p\u0159i \u00farazu elektrick\u00fdm proudem",
    answer:
      "vyprostit posti\u017een\u00e9ho z dosahu elektrick\u00e9ho proudu, ihned zav\u00e9st um\u011bl\u00e9 d\u00fdch\u00e1n\u00ed pokud ned\u00fdch\u00e1, ihned zah\u00e1jit nep\u0159\u00edmou srde\u010dn\u00ed mas\u00e1\u017e nem\u00e1-li tep, p\u0159ivolat l\u00e9ka\u0159e, uv\u011bdomit vedouc\u00edho pracovi\u0161t\u011b",
  },
  {
    number: 7,
    question:
      "Zemn\u00ed odpor uzemn\u011bn\u00ed kovov\u00fdch sk\u0159\u00edn\u00ed telekomunika\u010dn\u00edch rozvad\u011b\u010d\u016f nem\u00e1 b\u00fdt v\u011bt\u0161\u00ed",
    answer: "ne\u017e 15",
  },
  {
    number: 8,
    question:
      "Kdo p\u0159esv\u011bd\u010duje skupinu p\u0159ed p\u0159\u00edm\u00fdm dotykem na zaji\u0161t\u011bnou \u010d\u00e1st elektrick\u00e9ho za\u0159\u00edzen\u00ed",
    answer:
      "pracovn\u00edk, kter\u00fd pracovi\u0161t\u011b zaji\u0161\u0165oval",
  },
  {
    number: 9,
    question:
      "Elektrick\u00e9 za\u0159\u00edzen\u00ed pracovn\u00edho stroje mus\u00ed m\u00edt",
    answer:
      "za\u0159\u00edzen\u00ed nouzov\u00e9ho zastaven\u00ed stroje v p\u0159\u00edpad\u011b nebezpe\u010d\u00ed",
  },
  {
    number: 10,
    question:
      "P\u0159i zah\u00e1jen\u00ed um\u011bl\u00e9ho d\u00fdch\u00e1n\u00ed je d\u016fle\u017eit\u00e1 poloha hlavy",
    answer: "v z\u00e1klonu",
  },
  {
    number: 11,
    question:
      "Ochrany p\u0159ed nebezpe\u010dn\u00fdm dotykem ne\u017eiv\u00fdch \u010d\u00e1st\u00ed jsou",
    answer:
      "ochrana samo\u010dinn\u00fdm odpojen\u00edm od zdroje, pospojov\u00e1n\u00edm",
  },
  {
    number: 12,
    question:
      "Pro nouzov\u00e9 zastaven\u00ed se pou\u017e\u00edv\u00e1 tla\u010d\u00edtko ozna\u010den\u00e9ho",
    answer: "\u010dervenou barvou",
  },
  {
    number: 13,
    question:
      "Pracovn\u00edci jsou povinni pou\u017e\u00edvat osobn\u00ed ochrann\u00e9 a pracovn\u00ed pom\u016fcky",
    answer:
      "v\u0161ude, kde je to p\u0159\u00edslu\u0161n\u00fdmi p\u0159edpisy p\u0159edeps\u00e1no s v\u00fdjimkou p\u0159\u00edm\u00e9ho p\u0159\u00edkazu nad\u0159\u00edzen\u00e9ho vedouc\u00edho pr\u00e1ce",
  },
  {
    number: 14,
    question:
      "P\u0159ed zapo\u010det\u00edm z\u00e1chrann\u00fdch prac\u00ed p\u0159i z\u00e1top\u00e1ch nebo po\u017e\u00e1rech  mus\u00ed b\u00fdt",
    answer:
      "vypnut elektrick\u00fd proud mimo nap\u00e1jen\u00ed za\u0159\u00edzen\u00ed zaji\u0161\u0165uj\u00edc\u00ed bezpe\u010dnost po\u017e\u00e1rn\u00ed",
  },
  {
    number: 15,
    question:
      "Ozna\u010dte kter\u00e9 je nejvy\u0161\u0161\u00ed dotykov\u00e9 st\u0159\u00eddav\u00e9 nap\u011bt\u00ed u z\u0159\u00edzen\u00ed do 1 000 V v prostor\u00e1ch zvl\u00e1\u0161\u0165 nebezpe\u010dn\u00fdch",
    answer: "25V",
  },
  {
    number: 16,
    question:
      "Pracovat na kabelov\u00fdch \u017eil\u00e1ch kabel\u016f nn je dovoleno",
    answer:
      "jen po odpojen\u00ed kabel\u016f ze v\u0161ech stran p\u0159i bezpe\u010dn\u00e9m zaji\u0161t\u011bn\u00ed zkratov\u00e1n\u00edm na kr\u00e1tko",
  },
  {
    number: 17,
    question:
      "Odpor ochrann\u00e9ho vodi\u010de mezi zd\u00ed\u0159kou vidlice a kostrou za\u0159\u00edzen\u00edm mus\u00ed b\u00fdt",
    answer: "men\u0161\u00ed ne\u017e 0,2 p\u0159i d\u00e9lce 3 m",
  },
  {
    number: 18,
    question:
      "Jak se ozna\u010duje s\u00edt TN, v jej\u00ed\u017e, prvn\u00ed \u010d\u00e1sti pln\u00ed ochrann\u00fd vodi\u010d sou\u010dasn\u011b funkci st\u0159edn\u00edho vodi\u010de a v druh\u00e9 \u010d\u00e1sti je ochrann\u00fd a st\u0159edn\u00ed vodi\u010d veden samostatn\u011b",
    answer: "TN-C-S",
  },
  {
    number: 19,
    question:
      "Vybavovac\u00ed proud proudov\u00e9ho chr\u00e1ni\u010de pro venkovn\u00ed z\u00e1suvky mus\u00ed b\u00fdt maxim\u00e1ln\u011b",
    answer: "0,03A",
  },
  {
    number: 20,
    question:
      "P\u0159i kladen\u00ed elektrick\u00e9ho veden\u00ed do stroj\u016f a podlah nutno db\u00e1t",
    answer:
      "aby \u00fapravami nebyla sn\u00ed\u017een\u00e1 nosnost podlahy ani stropu",
  },
  {
    number: 21,
    question:
      "Jak se ov\u011b\u0159uje beznap\u011b\u0165ov\u00fd stav elektrick\u00e9ho za\u0159\u00edzen\u00ed, na n\u011bm\u017e se m\u00e1 pracovat",
    answer:
      "ov\u011b\u0159\u00ed se na v\u0161ech f\u00e1z\u00edch, p\u00f3lech a p\u0159\u00edvodech",
  },
  {
    number: 22,
    question:
      "Elektrick\u00e1 za\u0159\u00edzen\u00ed m\u016f\u017eeme kl\u00e1st na ho\u0159lav\u00e9 l\u00e1tky",
    answer:
      "podle stupn\u011b ho\u0159lavosti na ur\u010denou neho\u0159lavou , tepeln\u011b, izoluj\u00edc\u00ed podlo\u017eku, nebo pou\u017eit\u00edm materi\u00e1l\u016f zkou\u0161en\u00fdch pro mont\u00e1\u017e na ho\u0159lav\u00fd podklad",
  },
  {
    number: 23,
    question: "P\u0159i um\u011bl\u00e9m d\u00fdch\u00e1n\u00ed je nutn\u00e9",
    answer:
      "posti\u017een\u00e9mu v\u017edy zaklonit hlavu a ucpat nosn\u00ed d\u00edrky",
  },
  {
    number: 24,
    question: "Paraleln\u00ed vodi\u010de",
    answer:
      "mus\u00ed b\u00fdt stejn\u00e9ho pr\u016f\u0159ezu, d\u00e9lky a materi\u00e1lu \u017eily",
  },
  {
    number: 25,
    question:
      "Rozd\u011blen\u00ed elektrick\u00e9ho za\u0159\u00edzen\u00ed podle nap\u011bt\u00ed mezi vodi\u010di v uzemn\u011bn\u00e9 st\u0159\u00eddav\u00e9 soustav\u011b je",
    answer: "mn do 50 V, nn do 1 000 V, vn do 52 kV",
  },
  {
    number: 26,
    question:
      "Prvn\u00ed \u00fakony p\u0159i zaji\u0161t\u011bn\u00ed \u00farazu elektrick\u00fdm proudem jsou",
    answer:
      "zjistit, zda je posti\u017een\u00fd p\u0159i v\u011bdom\u00ed, zda d\u00fdch\u00e1, je u n\u011bho hmatn\u00fd tep, je-li jinak poru\u0161en jinak v negativn\u00edm p\u0159\u00edpad\u011b zah\u00e1jit prvn\u00ed pomoc",
  },
  {
    number: 27,
    question: "Stabilizovan\u00e1 poloha je",
    answer:
      "na boku s pokr\u010denou doln\u00ed kon\u010detinou, aby nedo\u0161lo k vdechnut\u00ed zvratk\u016f",
  },
  {
    number: 28,
    question:
      "Minim\u00e1ln\u00ed pr\u016f\u0159ez vodi\u010de pro sv\u011bteln\u00e9 a z\u00e1suvkov\u00e9 obvody u ji\u0161t\u011bn\u00ed 10 A \u010din\u00ed",
    answer: "1.5 mm2 Cu",
  },
  {
    number: 29,
    question:
      "Dopl\u0148kovou ochranou proudov\u00fdm chr\u00e1ni\u010dem u ochrany \u017eiv\u00fdch \u010d\u00e1st\u00ed lze pou\u017e\u00edt",
    answer:
      "ke zlep\u0161en\u00ed jin\u00fdch opat\u0159en\u00ed na ochranu p\u0159ed nebezpe\u010dn\u00fdm dotykem",
  },
  {
    number: 30,
    question: "P\u0159i siln\u00e9m tepenn\u00e9m krv\u00e1cen\u00ed",
    answer:
      "posti\u017eenou kon\u010detinu zvedneme do v\u00fd\u0161e, stla\u010d\u00edme p\u0159\u00edvodn\u00ed tepnu v tlakov\u00e9m bod\u011b nebo p\u0159\u00edmo v r\u00e1n\u011b a p\u0159ilo\u017e\u00edme steriln\u00ed tlakov\u00fd obvaz",
  },
  {
    number: 31,
    question: "Dlahu mus\u00edme p\u0159ilo\u017eit tak, aby znehybnila",
    answer: "kloub nad i pod zlomeninou",
  },
  {
    number: 32,
    question:
      "Izola\u010dn\u00ed odpor nap\u00e1jec\u00edho obvodu EPS proti kost\u0159e a ostatn\u00edch obvod\u016f proti kost\u0159e mus\u00ed b\u00fdt v\u011bt\u0161\u00ed ne\u017e",
    answer: "7 M",
  },
  {
    number: 33,
    question:
      "Kabely s k\u00f3dov\u00fdm ozna\u010den\u00edm \u201c C \u201c obsahuj\u00ed",
    answer:
      "ochranou (\u017elutozelen\u00e1 izolace), f\u00e1zovou (hn\u011bd\u00e1 a \u0161ed\u00e1), st\u0159edn\u00ed pracovn\u00ed (sv\u011btle modr\u00e1)",
  },
  {
    number: 34,
    question:
      "Barvy sv\u011bteln\u00fdch n\u00e1v\u011bst\u00ed a jejich v\u00fdznam",
    answer:
      "nebezpe\u010d\u00ed nebo poplach - \u010derven\u00e1, v\u00fdstraha - \u017elut\u00e1, bezpe\u010dn\u00e1 funkce - zelen\u00e1",
  },
  {
    number: 35,
    question:
      "Olov\u011bn\u00e9 akumul\u00e1tory sm\u011bj\u00ed b\u00fdt um\u00edst\u011bny, o\u0161et\u0159ov\u00e1ny ve spole\u010dn\u00e9m prostoru s alkalick\u00fdmi",
    answer: "nesm\u00ed b\u00fdt",
  },
  {
    number: 36,
    question: "Za\u0159\u00edzen\u00ed t\u0159\u00eddy 0 se v \u010cR",
    answer: "nesm\u011bj\u00ed se pou\u017e\u00edvat",
  },
  {
    number: 37,
    question:
      "Minim\u00e1ln\u00ed pr\u016f\u0159ez ochrann\u00e9ho vodi\u010de u ochrany pospojov\u00e1n\u00edm nesm\u00ed b\u00fdt men\u0161\u00ed ne\u017e",
    answer: "6mm2",
  },
  {
    number: 38,
    question: "Proud v z\u00e1suvce 230V m\u011b\u0159\u00edme",
    answer: "nejde",
  },
  {
    number: 39,
    question:
      "Elektrick\u00e1 s\u00ed\u0165, ve kter\u00e9 je ur\u010dit\u00fd bod pracovn\u00edho obvodu bezprost\u0159edn\u011b uzemn\u011bn se naz\u00fdva",
    answer: "TN",
  },
  {
    number: 40,
    question:
      "P\u0159i um\u00eds\u0165ov\u00e1n\u00ed p\u0159\u00edstroj\u016f a spot\u0159ebi\u010d\u016f se mus\u00ed db\u00e1t zejm\u00e9na",
    answer:
      "aby spl\u0148ovaly v\u0161echny p\u0159edpisov\u00e9 normy, nebyla naru\u0161ena spr\u00e1vn\u00e1 funkce, bezpe\u010dnost a spolehlivost a aby v okol\u00ed nebyly ho\u0159lav\u00e9 l\u00e1tky",
  },
  {
    number: 41,
    question:
      "P\u0159ed uveden\u00edm elektrick\u00e9ho za\u0159\u00edzen\u00ed se mus\u00ed prov\u00e9st",
    answer:
      "v\u00fdchoz\u00ed revize elektrick\u00e9ho za\u0159\u00edzen\u00ed provedena revizn\u00edm technikem",
  },
  {
    number: 42,
    question: "Z\u00e1suvky 230V se p\u0159ipojuj\u00ed",
    answer:
      "aby ochrann\u00fd kol\u00edk byl naho\u0159e, st\u0159edn\u00ed nulovan\u00ed vodi\u010d vpravo, f\u00e1zov\u00fd vodi\u010d vlevo p\u0159i pohledu zep\u0159edu",
  },
  {
    number: 43,
    question:
      "Kabely do 25 mm2 se upev\u0148uj\u00ed na p\u0159\u00edchytky v maxim\u00e1ln\u00ed vzd\u00e1lenosti od sebe",
    answer: "60cm",
  },
  {
    number: 44,
    question:
      "Uzemn\u011bn\u00ed elektrick\u00e9ho za\u0159\u00edzen\u00ed se chr\u00e1n\u00ed spoje zemni\u010d\u016f v zemi proti korozi",
    answer:
      "v\u0161echny spoje nap\u0159. asfaltovou z\u00e1livkou, lic\u00ed prysky\u0159ic\u00ed apod",
  },
  {
    number: 45,
    question:
      "Proti p\u0159et\u00ed\u017een\u00ed a zkratov\u00fdm proud\u016fm mus\u00ed b\u00fdt jist\u00edc\u00edmi prvky chr\u00e1n\u011bny",
    answer: "f\u00e1zov\u00e9 (krajn\u00ed vodi\u010de)",
  },
  {
    number: 46,
    question:
      "Ochrana pou\u017eit\u00edm za\u0159\u00edzen\u00ed t\u0159. II nebo s rovnocennou izolac\u00ed je zaji\u0161\u0165ov\u00e1na",
    answer:
      "elektrick\u00fdm za\u0159\u00edzen\u00edm typov\u011b zkou\u0161en\u00fdm podle \u010cSN (za\u0159\u00edzen\u00ed s dvojitou nebo zes\u00edlenou izolac\u00ed) eventu\u00e1ln\u011b p\u0159\u00eddavnou nebo zes\u00edlenou izolac\u00ed v pr\u016fb\u011bhu mont\u00e1\u017ee",
  },
  {
    number: 47,
    question:
      "P\u0159i zaji\u0161t\u011bn\u00ed pracovi\u0161t\u011b s pojistkami v rozvad\u011b\u010d\u00edch je nutno zejm\u00e9na",
    answer:
      "vyjmout pojistky, bezpe\u010dn\u011b je uschovat mimo prostor rozvad\u011b\u010de a prov\u00e9st ostatn\u00ed ochrann\u00e9 opat\u0159en\u00ed",
  },
  {
    number: 48,
    question:
      "Zkou\u0161ky a p\u0159ezkou\u0161en\u00ed pracovn\u00edk\u016f znal\u00fdch s vy\u0161\u0161\u00ed kvalifikac\u00ed dle vyhl\u00e1\u0161ky \u010d.50/78Sb, je nutno",
    answer: "ka\u017ed\u00e9 3 roky",
  },
  {
    number: 49,
    question: "V kabelov\u00fdch kan\u00e1lech se v prostoru uli\u010dky",
    answer: "nesm\u011bj\u00ed kl\u00e1st kabely p\u0159\u00edmo na podlahu",
  },
  {
    number: 50,
    question:
      "U prozat\u00edmn\u00edch elektrick\u00fdch za\u0159\u00edzen\u00ed je kladen\u00ed pohybov\u00fdch \u0161\u0148\u016fr na t\u011bleso vozovek",
    answer: "zak\u00e1z\u00e1no",
  },
  {
    number: 51,
    question:
      "Ozna\u010dte typy has\u00edc\u00edch p\u0159\u00edstroj\u016f, kter\u00e9 se pou\u017e\u00edvaj\u00ed k ha\u0161en\u00ed po\u017e\u00e1ru el. Za\u0159\u00edzen\u00ed pod nap\u011bt\u00edm v jeho bl\u00edzkosti",
    answer: "sn\u011bhov\u00fd",
  },
  {
    number: 52,
    question:
      "Ozna\u010dte, jak\u00e9 je bezpe\u010dn\u00e9 mal\u00e9 nap\u011bt\u00ed st\u0159\u00eddav\u00e9 p\u0159i dotyku \u017eiv\u00fdch \u010d\u00e1st\u00ed v prostorech nebezpe\u010dn\u00fdch",
    answer: "25V",
  },
  {
    number: 53,
    question:
      "Ur\u010dete, kter\u00fd z n\u00e1sleduj\u00edc\u00edch p\u0159edm\u011bt\u016f pat\u0159\u00ed do t\u0159\u00eddy ochrany II",
    answer:
      "ten, kter\u00fd m\u00e1 v\u0161ude dvojitou nebo zes\u00edlenou izolaci a nem\u00e1 za\u0159\u00edzen\u00ed na p\u0159ipojen\u00ed ochrann\u00e9ho vodi\u010de",
  },
  {
    number: 54,
    question: "Hlavn\u00ed \u010d\u00e1sti hromosvodu je",
    answer:
      "j\u00edmac\u00ed za\u0159\u00edzen\u00ed, \u00fachytky dopl\u0148uj\u00edc\u00ed pomocn\u00e9 p\u0159izem\u0148ovac\u00ed vodi\u010de, zemni\u010de",
  },
  {
    number: 55,
    question:
      "Pracovn\u00ed a ochrann\u00e9 uzemn\u011bn\u00ed r\u016fzn\u00fdch za\u0159\u00edzen\u00ed do 1 000V se sm\u011bj\u00ed spojovat",
    answer: "v\u017edy",
  },
  {
    number: 56,
    question: "Proudov\u00e9 chr\u00e1ni\u010de mus\u00ed vyp\u00ednat",
    answer: "v\u0161echny pracovn\u00ed vodi\u010de",
  },
  {
    number: 57,
    question: "Osoby bez elektrotechnick\u00e9 kvalifikace mohou",
    answer:
      "obsluhovat jednoduch\u00e1 elektrick\u00e1 za\u0159\u00edzen\u00ed mn a nn, kter\u00e1 jsou provedena tak, \u017ee p\u0159i jejich obsluze nelze p\u0159ij\u00edt do styku s nekryt\u00fdmi \u010d\u00e1stmi",
  },
  {
    number: 58,
    question:
      "Hlavn\u00ed stoup\u00e1n\u00ed veden\u00ed v budov\u00e1ch se jist\u00ed",
    answer:
      "v m\u00edstech zm\u011bn pr\u016f\u0159ezu hlavn\u00edho domovn\u00edho veden\u00ed",
  },
  {
    number: 59,
    question:
      "T\u0159\u00eddy bezpe\u010dnosti u elektrick\u00fdch p\u0159edm\u011bt\u016f a za\u0159\u00edzen\u00ed se ozna\u010duj\u00ed",
    answer: "0,I,II,III",
  },
  {
    number: 60,
    question:
      "\u017div\u00e9 a ne\u017eiv\u00e9 \u010d\u00e1sti obvod\u016f SELV",
    answer:
      "nesm\u011bj\u00ed b\u00fdt spojeny se zem\u00ed, nebo s \u017eiv\u00fdmi \u010d\u00e1stmi a mus\u00ed b\u00fdt elektricky odd\u011bleny od jin\u00fdch obvod\u016f",
  },
  {
    number: 61,
    question:
      "P\u011b\u0161\u00ed komunikace v rozvodn\u00e1ch nn mus\u00ed m\u00edt minim\u00e1ln\u011b",
    answer: "\u0161\u00ed\u0159ku 1 200 mm",
  },
  {
    number: 62,
    question:
      "Z\u00e1suvky elektrick\u00fdch za\u0159\u00edzen\u00ed na staveni\u0161t\u00edch mus\u00ed b\u00fdt chr\u00e1n\u011bny",
    answer:
      "proudov\u00fdm chr\u00e1ni\u010dem s maxim\u00e1ln\u00edm vybavovac\u00edm proudem 30 mA",
  },
  {
    number: 63,
    question:
      "Pohybliv\u00e9 p\u0159\u00edvody spot\u0159ebi\u010d\u016f t\u0159\u00eddy II zakon\u010den\u00e9 dvoup\u00f3lovou vidlic\u00ed bez ochrann\u00e9ho kontakt\u016f",
    answer: "mohou m\u00edt ob\u011b \u017e\u00edly m\u00edt stejnou barvu",
  },
  {
    number: 64,
    question:
      "Maxim\u00e1ln\u00ed doba odpojen\u00ed pro s\u00edt\u011b TN pro U0=230V je",
    answer: "0,4s",
  },
  {
    number: 65,
    question: "Pracovn\u00edci znal\u00ed mohou",
    answer:
      "samostatn\u011b obsluhovat elektrick\u00e9 za\u0159\u00edzen\u00ed, pracovat na \u010d\u00e1stech elektrick\u00e9ho za\u0159\u00edzen\u00ed nn sami, a to na \u010d\u00e1stech bez nap\u011bt\u00ed, v bl\u00edzkosti \u010d\u00e1st\u00ed bez nap\u011bt\u00ed a na \u010d\u00e1stech pod nap\u011bt\u00edm",
  },
  {
    number: 66,
    question:
      "Pracovn\u00edci podle \u00a77 vyhl\u00e1\u0161ky \u010d.50/78 Sb.",
    answer:
      "jsou pracovn\u00edci znal\u00ed s vy\u0161\u0161\u00ed kvalifikac\u00ed pro \u0159\u00edzen\u00ed \u010dinnosti na elektrick\u00fdch na elektrick\u00fdch za\u0159\u00edzen\u00edch",
  },
  {
    number: 67,
    question:
      "Dovolen\u00e9 dotykov\u00e9 nap\u011bt\u00ed u za\u0159\u00edzen\u00ed do 1000V~ v prostorech zvl\u00e1\u0161\u0165 nebezpe\u010dn\u00fdch je",
    answer: "~ 25V, =60V",
  },
  {
    number: 68,
    question:
      "Jak se dos\u00e1hne zv\u00fd\u0161en\u00e1 ochrana p\u0159ed nebezpe\u010dn\u00fdm dotykem u ne\u017eiv\u00fdch \u010d\u00e1st\u00ed",
    answer:
      "roz\u0161\u00ed\u0159en\u00edm ochrany z\u00e1kladn\u00ed o ur\u010dit\u00fd druh dal\u0161\u00ed ochrany",
  },
  {
    number: 69,
    question:
      "N\u00e1hodn\u00e9 svody hromosvodn\u00ed ochrany mohou tvo\u0159it",
    answer:
      "kovov\u00e9 konstrukce o pr\u016f\u0159ezu minim\u00e1ln\u011b 100mm2",
  },
  {
    number: 70,
    question:
      "Um\u011bl\u00e9 d\u00fdch\u00e1n\u00ed metodou z plic do plic se po\u010d\u00e1te\u010dn\u00edm vdechu prov\u00e1d\u00ed v rytmu",
    answer: "12-16x za minutu",
  },
  {
    number: 71,
    question: "Hol\u00e9 vodi\u010de ~ soustavy se zna\u010d\u00ed barvami",
    answer:
      "f\u00e1zov\u00e9 vodi\u010de \u2013 oran\u017eov\u00e9 s \u010dern\u00fdmi pruhy",
  },
  {
    number: 72,
    question: "Rozvodn\u00e9 s\u00edt\u011b d\u011bl\u00edme",
    answer: "TN-C, TN-S, TN-CS, TT, IT",
  },
  {
    number: 73,
    question:
      "Kolik sv\u00edtidel se sm\u00ed p\u0159ipojit na jeden sv\u011bteln\u00fd obvod",
    answer:
      "tolik, aby sou\u010det jejich jednotliv\u00fdch proud\u016f nep\u0159ekro\u010dil jmenovit\u00fd proud jist\u00edc\u00edho prvku",
  },
  {
    number: 74,
    question:
      "Prostory z hlediska \u00farazu elektrick\u00fdm proudem se \u010dlen\u00ed na",
    answer:
      "norm\u00e1ln\u00ed, nebezpe\u010dn\u00e9 a zvl\u00e1\u0161\u0165 nebezpe\u010dn\u00e9",
  },
  {
    number: 75,
    question:
      "Za\u0161krcovalo p\u0159ikl\u00e1d\u00e1me jen v\u00fdjime\u010dn\u011b a to",
    answer: "nad r\u00e1nou sm\u011brem k srdci",
  },
  {
    number: 76,
    question:
      "P\u0159emis\u0165ov\u00e1n\u00ed stroj\u016f a elektrick\u00fdch spot\u0159ebi\u010d\u016f je mo\u017en\u00e9",
    answer: "jen p\u0159i odpojen\u00ed ze s\u00edt\u011b",
  },
  {
    number: 77,
    question:
      "Bezpe\u010dn\u00e1 jmenovit\u00e1 nap\u011bt\u00ed v prostor\u00e1ch norm\u00e1ln\u00edch jsou",
    answer: "~do50V, =do120V",
  },
  {
    number: 78,
    question:
      "Jak\u00fd je obecn\u00fd v\u00fdznam barev pro bezpe\u010dnost osob nebo prost\u0159ed\u00ed",
    answer: "\u010derven\u00e1 barva zna\u010d\u00ed nebezpe\u010d\u00ed",
  },
  {
    number: 79,
    question: "Proudov\u00e9 chr\u00e1ni\u010de mus\u00ed vyp\u00ednat",
    answer: "v\u0161echny pracovn\u00ed vodi\u010de",
  },
  {
    number: 80,
    question:
      "P\u0159i rozpojov\u00e1n\u00ed mus\u00ed b\u00fdt ochrann\u00fd obvod ochrann\u00e9ho spojen\u00ed rozpojen",
    answer: "jako posledn\u00ed",
  },
  {
    number: 81,
    question: "Vedouc\u00ed pr\u00e1ce je",
    answer: "pracovn\u00edk pov\u011b\u0159en\u00fd veden\u00edm skupiny",
  },
  {
    number: 82,
    question:
      "Ochrana p\u0159ed nebezpe\u010dn\u00fdm dotykem \u017eiv\u00fdch \u010d\u00e1st\u00ed je tvo\u0159ena",
    answer: "izolac\u00ed \u017eiv\u00fdch \u010d\u00e1st\u00ed",
  },
  {
    number: 83,
    question:
      "Jak se p\u0159ipojuje vyp\u00ednac\u00ed c\u00edvka, ochrann\u00e9 spou\u0161t\u011b nap\u011b\u0165ov\u00e9ho chr\u00e1ni\u010de",
    answer:
      "p\u0159ipojuje se jedn\u00edm p\u00f3lem na chr\u00e1n\u011bnou \u010d\u00e1st a druh\u00fdm p\u00f3lem chr\u00e1ni\u010dov\u00fd zemni\u010d",
  },
  {
    number: 84,
    question:
      "Jist\u00edc\u00ed prvky v rozvad\u011b\u010d\u00edch a rozvodnic\u00edch maj\u00ed p\u0159i poru\u0161e za \u00fakol odpojit",
    answer: "chr\u00e1n\u011bnou \u010d\u00e1st veden\u00ed",
  },
  {
    number: 85,
    question:
      "U rozvad\u011b\u010d\u016f a rozvodnic, kde po otev\u0159en\u00ed dve\u0159\u00ed nen\u00ed zaji\u0161t\u011bn minim\u00e1ln\u00ed stupe\u0148 kryt\u00ed IP20",
    answer:
      "otev\u0159en\u00ed dve\u0159\u00ed je mo\u017eno prov\u00e9st jen s kl\u00ed\u010dem nebo n\u00e1strojem",
  },
  {
    number: 86,
    question:
      "Ochrana elektrick\u00fdm odd\u011blen\u00edm m\u016f\u017ee b\u00fdt vytvo\u0159ena",
    answer: "odd\u011blovac\u00edm transform\u00e1torem",
  },
  {
    number: 87,
    question: "V s\u00edt\u00edch TN se ochrann\u00e9 vodi\u010de PEN a PE",
    answer: "nesm\u00ed jistit",
  },
  {
    number: 88,
    question:
      "Prozat\u00edmn\u00ed za\u0159\u00edzen\u00ed je povoleno na dobu",
    answer: "6 m\u011bs\u00edc\u016f",
  },
  {
    number: 89,
    question:
      "Ochrana z\u00e1branou mus\u00ed b\u00fdt vytvo\u0159ena v prostor\u00e1ch p\u0159\u00edstupn\u00fdm laik\u016fm",
    answer:
      "uzam\u010den\u00edm nebo neodn\u00edmateln\u00fdm ohrazen\u00edm pevn\u00fdm vysok\u00fdm a dostate\u010dn\u011b vzd\u00e1len\u00fdm od \u017eiv\u00fdch \u010d\u00e1st\u00ed",
  },
  {
    number: 90,
    question: "Vlastn\u00edk elektrick\u00e9 p\u0159\u00edpojky",
    answer: "ten, kdo uhradil n\u00e1klady na jej\u00ed z\u0159\u00edzen\u00ed",
  },
  {
    number: 91,
    question:
      "Elektrick\u00e1 energie pro za\u0159\u00edzen\u00ed EPS, EZS je nutno dod\u00e1vat samostatn\u00fdm navyp\u00ednateln\u00fdm veden\u00edm",
    answer: "z hlavn\u00edho rozvad\u011b\u010de do objektu",
  },
  {
    number: 92,
    question:
      "Pohybliv\u00e9 p\u0159\u00edvody t\u0159\u00eddy I pro za\u0159\u00edzen\u00ed nn mus\u00ed m\u00edt ochrann\u00fd vodi\u010d ozna\u010den\u00fd",
    answer: "po cel\u00e9 d\u00e9lce p\u0159\u00edvodu",
  },
  {
    number: 93,
    question:
      "Kter\u00e9 z uveden\u00fdch odpov\u011bd\u00ed ozna\u010duj\u00ed podm\u00ednky ochrany bezpe\u010dn\u00fdm nap\u011bt\u00edm",
    answer: "SELV a PELV",
  },
  {
    number: 94,
    question:
      "Ke ka\u017ed\u00e9mu elektrick\u00e9mu za\u0159\u00edzen\u00ed ur\u010den\u00e9ho laik\u016fm mus\u00ed b\u00fdt dod\u00e1na",
    answer: "technick\u00e1 dokumentace",
  },
  {
    number: 95,
    question:
      "Jak\u00e9 zvonky nesm\u00ed b\u00fdt nainstalov\u00e1ny v budov\u00e1ch, kde je zaveden plyn",
    answer: "nejisk\u0159\u00edc\u00ed",
  },
  {
    number: 96,
    question:
      "Jak\u00e1 je nejkrat\u0161\u00ed po\u017eadovan\u00e1 d\u00e9lka praxe u pracovn\u00edk\u016f pro samostatnou \u010dinnost na p\u0159\u00edslu\u0161n\u00e9m druhu za\u0159\u00edzen\u00ed a nap\u011bt\u00ed do 1 000V",
    answer: "1 rok",
  },
  {
    number: 97,
    question:
      "A\u017e na n\u011bkter\u00e9 p\u0159\u00edpady mus\u00ed b\u00fdt u ochrany kryty nebo p\u0159ep\u00e1\u017ekami, \u017eiv\u00e9 \u010d\u00e1sti chr\u00e1n\u011bny v prostor\u00e1ch p\u0159\u00edstupn\u00fdm osob\u00e1m bez elektrotechnick\u00e9 kvalifikace stupe\u0148 kryt\u00ed minim\u00e1ln\u011b",
    answer: "IP20",
  },
  {
    number: 98,
    question:
      "P\u0159i rozpojov\u00e1n\u00ed mus\u00ed b\u00fdt ochrann\u00fd obvod ochrann\u00e9ho spojen\u00ed rozpojen",
    answer: "jako posledn\u00ed",
  },
  {
    number: 99,
    question:
      "Nep\u0159\u00edm\u00e1 srde\u010dn\u00ed mas\u00e1\u017e se mus\u00ed prov\u00e1d\u011bt",
    answer: "metodou 2 vdech\u016f a 30 stla\u010den\u00ed",
  },
  {
    number: 100,
    question: "Vidlice a z\u00e1suvky",
    answer:
      "nelze je pou\u017e\u00edt k nouzov\u00e9mu vyp\u00edn\u00e1n\u00ed",
  },
  {
    number: 101,
    question: "Bezpe\u010dnostn\u00ed tabulky d\u011bl\u00edme na",
    answer:
      "tabulky v\u00fdstrahy, p\u0159\u00edkazu, z\u00e1kazu, sd\u011blen\u00ed",
  },
  {
    number: 102,
    question:
      "K jak\u00e9mu \u00fa\u010delu m\u016f\u017ee b\u00fdt pou\u017eito vodi\u010de ozna\u010den\u00e9ho barvou zeleno\u017elutou",
    answer: "jen pro vodi\u010de ochrann\u00e9",
  },
  {
    number: 103,
    question:
      "Kter\u00e9 vodi\u010de mus\u00ed proch\u00e1zet proudov\u00fdm chr\u00e1ni\u010dem p\u0159i ochran\u011b chr\u00e1ni\u010di",
    answer: "v\u0161echny pracovn\u00ed vodi\u010de",
  },
  {
    number: 104,
    question:
      "Silov\u00e9 kabely nn se ukl\u00e1daj\u00ed pod chodn\u00edk v minim\u00e1ln\u00ed hloubce",
    answer: "35 cm",
  },
  {
    number: 105,
    question:
      "U kovov\u00fdch trubek nebo kryt\u016f chr\u00e1n\u00edc\u00edch za\u0159\u00edzen\u00ed t\u0159. II",
    answer:
      "se nemus\u00ed prov\u00e1d\u011bt ochrana a p\u0159ed nebezpe\u010dn\u00fdm dotykov\u00fdm nap\u011bt\u00edm",
  },
  {
    number: 106,
    question: "Kdy je dovoleno pracovat na kabelech",
    answer:
      "po odpojen\u00ed ze v\u0161ech stran a po kontrole, jestli nen\u00ed na konci kabel\u016f, nap\u011bt\u00ed a nav\u00edc po uzemn\u011bn\u00ed a spojen\u00ed nakr\u00e1tko",
  },
  {
    number: 107,
    question:
      "Kde se mohou prov\u00e1d\u011bt spoje izolovan\u00fdch vodi\u010d\u016f: v krabic\u00edch, rozvodk\u00e1ch a rozvad\u011b\u010d\u00edch. 108. Sd\u011blovac\u00ed za\u0159\u00edzen\u00ed a obvody",
    answer:
      "maj\u00ed b\u00fdt spolehliv\u011b odd\u011bleny od silov\u00fdch za\u0159\u00edzen\u00ed a obvod\u016f",
  },
  {
    number: 109,
    question:
      "Za n\u00e1hradn\u00ed ochrann\u00e9 vodi\u010de se nesm\u00ed pou\u017e\u00edvat",
    answer:
      "odn\u00edmateln\u00e9 za\u0159\u00edzen\u00ed, z\u00e1bradl\u00ed, ploty apod",
  },
  {
    number: 110,
    question: "Pracovn\u00edci sezn\u00e1men\u00ed mohou",
    answer:
      "samostatn\u011b obsluhovat jednoduch\u00e1 a elektrick\u00e1 za\u0159\u00edzen\u00ed mn a nn",
  },
  {
    number: 111,
    question: "Barva bezpe\u010dnostn\u00edch tabulek z\u00e1kazu je",
    answer: "\u010derven\u00e1",
  },
  {
    number: 112,
    question: "V s\u00edt\u00edch TN-C vodi\u010de PEN",
    answer:
      "nesm\u00ed b\u00fdt ani odpojov\u00e1n ani sp\u00edn\u00e1n, u z\u00e1suvek mus\u00ed b\u00fdt odp\u00edn\u00e1n jako posledn\u00ed a sp\u00edn\u00e1n jako prvn\u00ed",
  },
  {
    number: 113,
    question:
      "Pracovn\u00ed a ochrann\u00e1 uzemn\u011bn\u00ed u r\u016fzn\u00fdch za\u0159\u00edzen\u00ed do 1 000 V se sm\u011bj\u00ed spojovat",
    answer: "v\u017edy",
  },
  {
    number: 114,
    question:
      "Vidlice a z\u00e1suvky pro obvody SELV a PELV mus\u00ed spl\u0148ovat",
    answer: "z\u00e1suvky nesm\u00ed m\u00edt ochrann\u00fd kontakt",
  },
  {
    number: 115,
    question:
      "Svody u hromosvodn\u00ed ochrany se chr\u00e1n\u00ed nad zem\u00ed uheln\u00edkem nebo trubkou do v\u00fd\u0161e",
    answer: "1,82m",
  },
  {
    number: 116,
    question:
      "Z\u00e1kladn\u00ed podm\u00ednkou pro funkci ochrany samo\u010dinn\u00fdm odpojen\u00edm od zdroje v s\u00edt\u00edch TN je",
    answer:
      "impedance ochrann\u00e9 smy\u010dky Zs mus\u00ed b\u00fdt v\u011bt\u0161\u00ed nebo rovna U0/Ia kde U0 je jmenovit\u00e9 st\u0159\u00eddav\u00e9 nap\u011bt\u00ed proti zemi, Ia je proud zaji\u0161\u0165uj\u00edc\u00ed samo\u010dinn\u00e9 p\u016fsoben\u00ed nadproudov\u00e9ho odporovac\u00edho ochrann\u00e9ho prvku",
  },
  {
    number: 117,
    question:
      "Do stabilizovan\u00e9 polohy je nutno ulo\u017eit v\u0161echny osoby",
    answer:
      "v bezv\u011bdom\u00ed, kte\u0159\u00ed dostate\u010dn\u011b d\u00fdchaj\u00ed",
  },
  {
    number: 118,
    question:
      "Elektrick\u00e9 za\u0159\u00edzen\u00ed proveden\u00e1 podle \u010cSN p\u0159ed jejich novelizac\u00ed",
    answer:
      "lze d\u00e1le provozovat, pokud nemaj\u00ed z\u00e1vady ohro\u017euj\u00edc\u00ed \u017eivot bezpe\u010dnost osob nebo majetku v tomto p\u0159\u00edpad\u011b je lze pou\u017e\u00edvat podle m\u00edstn\u00edch pracovn\u00edch a bezpe\u010dnostn\u00edch p\u0159edpis\u016f",
  },
  {
    number: 119,
    question:
      "P\u0159i vypro\u0161\u0165ov\u00e1n\u00ed posti\u017een\u00e9ho elektrick\u00fdm v\u00fdbojem je nejd\u0159\u00edve nutno",
    answer: "vypnout elektrick\u00e9 za\u0159\u00edzen\u00ed",
  },
  {
    number: 120,
    question:
      "Kdy se st\u00e1v\u00e1 elektrik\u00e1\u0159 pracovn\u00edkem znal\u00fdm \u00a75",
    answer:
      "po za\u0161kolen\u00ed a slo\u017een\u00ed zkou\u0161ky podle vyhl\u00e1\u0161ky \u010d.50/78 Sb",
  },
  {
    number: 121,
    question:
      "Zak\u00e1zan\u00e9 pr\u00e1ce ve venkovn\u00edm prostru na elektrick\u00e9m za\u0159\u00edzen\u00ed jsou",
    answer:
      "pr\u00e1ce za bou\u0159ky, de\u0161t\u011b a sn\u011b\u017een\u00ed, mimo\u0159\u00e1dn\u011b siln\u00e9m v\u011btru",
  },
  {
    number: 122,
    question:
      "Jak dlouh\u00e1 mus\u00ed b\u00fdt ochrana \u017e\u00edla u pohybliv\u00fdch p\u0159\u00edvod\u016f a \u0161\u0148\u016frov\u00fdch veden\u00ed v m\u00edst\u011b p\u0159ipojen\u00ed do svorek",
    answer:
      "mus\u00ed b\u00fdt tak dlouh\u00e9, aby p\u0159i vytr\u017een\u00ed \u0161\u0148\u016fry ze svorek byla nam\u00e1h\u00e1na tahem a\u017e po p\u0159eru\u0161en\u00ed (vytr\u017een\u00ed pracovn\u00edch \u017eil)",
  },
  {
    number: 123,
    question:
      "V\u00fdm\u011bnu pojistkov\u00fdch vlo\u017eek do 6 kV pod nap\u011bt\u00edm m\u016f\u017ee prov\u00e1d\u011bt",
    answer:
      "osoba znal\u00e1 s vy\u0161\u0161\u00ed kvalifikac\u00ed od \u00a76 vyhl. \u010d. 50/78Sb",
  },
  {
    number: 124,
    question: "Elektrick\u00e9 provozovny jsou",
    answer:
      "uzamykateln\u00e9, odd\u011blen\u00e9 prostory ur\u010den\u00e9 k v\u00fdrob\u011b, rozvodu nebo prom\u011bn\u011b elektrick\u00e9 energie zabezpe\u010den\u00e9 proti vstupu nepovolan\u00e9 osoby",
  },
  {
    number: 125,
    question: "U pracovn\u00edch stroj\u016f mus\u00ed b\u00fdt motory",
    answer:
      "snadno p\u0159\u00edstupn\u00e9 \u00fadr\u017eb\u011b, kontrole, maz\u00e1n\u00ed apod",
  },
  {
    number: 126,
    question:
      "U rozvodnic a rozvad\u011b\u010d\u016f nn nesm\u00ed b\u00fdt p\u0159echodn\u00fd odpor mezi kovov\u00fdmi ne\u017eiv\u00fdmi \u010d\u00e1stmi a ochrannou svorkou v\u011bt\u0161\u00ed ne\u017e",
    answer: "0,1",
  },
  {
    number: 127,
    question:
      "Dovolen\u00e9 meze trval\u00e9ho dotykov\u00e9ho nap\u011bt\u00ed ne\u017eiv\u00fdch \u010d\u00e1st\u00ed za\u0159\u00edzen\u00ed do 1 kV v prostorech norm\u00e1ln\u00edch i nebezpe\u010dn\u00fdch jsou",
    answer: "50V ~, 120V =",
  },
  {
    number: 128,
    question:
      "Proti p\u0159et\u00ed\u017een\u00ed a zkratov\u00fdm proud\u016fm mus\u00ed b\u00fdt jist\u00edc\u00edmi prvky chr\u00e1n\u011bny",
    answer: "f\u00e1zov\u00e9 (st\u0159edn\u00ed)vodi\u010de",
  },
  {
    number: 129,
    question:
      "P\u0159ipojovac\u00ed prost\u0159edky ochrann\u00fdch vodi\u010d\u016f",
    answer:
      "nesm\u011bj\u00ed b\u00fdt pou\u017eity pro upevn\u011bn\u00ed jin\u00fdch konstruk\u010dn\u00edch \u010d\u00e1st\u00ed elektrick\u00fdch p\u0159edm\u011bt\u016f",
  },
  {
    number: 130,
    question:
      "Hlavn\u00ed p\u0159ipojov\u00e1n\u00ed v ka\u017ed\u00e9 budov\u011b",
    answer: "mus\u00ed b\u00fdt provedeno",
  },
  {
    number: 131,
    question:
      "V sou\u010dasn\u00e9 dob\u011b se p\u0159ech\u00e1z\u00ed v rozvodn\u00e9 s\u00edti \u010cR na soustavu nap\u011bt\u00ed",
    answer: "230V/400V",
  },
  {
    number: 132,
    question:
      "Ozna\u010dov\u00e1n\u00ed svorek elektrick\u00fdch p\u0159edm\u011bt\u016f",
    answer: "U, V, W \u2013 L1-L3 st\u0159edn\u00ed N",
  },
  {
    number: 133,
    question:
      "Pr\u00e1ce pod dohledem je pr\u00e1ce, kter\u00e1 se prov\u00e1d\u00ed",
    answer:
      "podle podrobn\u011bj\u0161\u00edch pokyn\u016f, pracovn\u00edk prov\u00e1d\u011bj\u00edc\u00edch dohled se p\u0159esv\u011bd\u010d\u00ed, zda jsou provedena nutn\u00e1 opat\u0159en\u00ed. Za dodr\u017eov\u00e1n\u00ed bezpe\u010dnostn\u00edch p\u0159edpis\u016f zodpov\u00eddaj\u00ed pracovn\u00edci",
  },
  {
    number: 134,
    question:
      "Plynov\u00e9 potrub\u00ed se jako n\u00e1hodn\u00fd chr\u00e1ni\u010d",
    answer: "nesm\u00ed pou\u017e\u00edvat",
  },
  {
    number: 135,
    question:
      "Zdrav\u00fd dosp\u011bl\u00fd \u010dlov\u011bk m\u00e1 v klidu b\u011bhem 1 minuty",
    answer: "60-80 tep\u016f",
  },
  {
    number: 136,
    question:
      "Podle vyhl\u00e1\u0161ky \u010d. 50/78 Sb. Jsou pracovn\u00edci pro samostatnou \u010dinnost dle \u00a76",
    answer:
      "jsou pracovn\u00edky znal\u00fdmi s vy\u0161\u0161\u00ed kvalifikac\u00ed a podl\u00e9haj\u00ed p\u0159ezkou\u0161en\u00ed a zkou\u0161k\u00e1m u stanoven\u00e9 komise",
  },
  {
    number: 137,
    question: "V koupeln\u011b v z\u00f3n\u011b 0 se sm\u00ed instalovat",
    answer:
      "jen elektrick\u00e9 p\u0159\u00edstroje ur\u010den\u00e9 k v\u00fdhradn\u00edmu pou\u017eit\u00ed v koupelnov\u00e9 van\u011b",
  },
  {
    number: 138,
    question:
      "Ozna\u010den\u00ed, stupn\u011b kryt\u00ed IP ud\u00e1v\u00e1 prvn\u00ed \u010d\u00edslo",
    answer: "stupe\u0148 ochrany p\u0159ed nebezpe\u010dn\u00fdm dotykem",
  },
  {
    number: 139,
    question:
      "Veden\u00ed zabezpe\u010dovac\u00ed a po\u017e\u00e1rn\u00ed signalizace mus\u00ed b\u00fdt",
    answer: "v samostatn\u00fdch trubk\u00e1ch nebo dutink\u00e1ch",
  },
  {
    number: 140,
    question: "Impedance smy\u010dky v sit\u00edch TN mus\u00ed vyhovovat",
    answer: "Zs*Ia je men\u0161\u00ed nebo rovno U0 [Zs*Ia=<U0]",
  },
  {
    number: 141,
    question:
      "P\u0159i prvn\u00ed pomoci u ran, pop\u00e1lenin \u010di zlomenin",
    answer:
      "nezdr\u017euje se o\u0161et\u0159ov\u00e1n\u00edm poran\u011bn\u00ed, pouze u siln\u00e9ho krv\u00e1cen\u00ed p\u0159ikl\u00e1d\u00e1 na tepny tlakov\u00fd obvaz nebo \u0161krtidlo, u pop\u00e1lenin p\u0159ikl\u00e1d\u00e1 steriln\u00ed obvaz, u zlomenin p\u0159ikl\u00e1d\u00e1 dlahu a znehyb\u0148uje kon\u010detinu",
  },
  {
    number: 142,
    question:
      "V\u00fdchoz\u00ed revize elektrick\u00e9 za\u0159\u00edzen\u00ed zahrnuje",
    answer:
      "prohl\u00eddku, zkou\u0161en\u00ed a m\u011b\u0159en\u00ed elektrick\u00e9ho za\u0159\u00edzen\u00ed v\u010detn\u011b seps\u00e1n\u00ed z\u00e1v\u011bre\u010dn\u00e9 revizn\u00ed zpr\u00e1vy a odstran\u011bn\u00ed z\u00e1vad",
  },
  {
    number: 143,
    question: "Bezpe\u010dnostn\u00ed sd\u011blen\u00ed upozor\u0148uj\u00ed",
    answer:
      "na stav elektrick\u00e9ho za\u0159\u00edzen\u00ed, na mo\u017enost ohro\u017een\u00ed \u017eivota a zdrav\u00ed, sd\u011bluj\u00ed z\u00e1kazy nebo p\u0159\u00edkazy nutn\u00e9 k zaji\u0161t\u011bn\u00ed bezpe\u010dnosti",
  },
  {
    number: 144,
    question:
      "Souvisl\u00e9 kabelov\u00e9 l\u00e1vky se mus\u00ed spojit s ochrannou soustavu",
    answer: "na obou konc\u00edch",
  },
  {
    number: 145,
    question:
      "U pracovn\u00edch stroj\u016f kabely s pln\u00fdmi j\u00e1dry mohou b\u00fdt pou\u017eity pro propojen\u00ed pevn\u00fdch \u010d\u00e1st\u00ed",
    answer: "kter\u00e1 nejsou vystavena vibrac\u00edm",
  },
  {
    number: 146,
    question:
      "Bezpe\u010dnostn\u00ed vyp\u00ednan\u00ed elektrick\u00e9ho za\u0159\u00edzen\u00ed se mus\u00ed prov\u00e1d\u011bt",
    answer:
      "tam, kde se rychl\u00fdm vypnut\u00edm proudu zabr\u00e1n\u00ed hav\u00e1rii za\u0159\u00edzen\u00ed, po\u017e\u00e1ru nebo v\u00fdbuchu",
  },
  {
    number: 147,
    question:
      "Svorka pro p\u0159ipojen\u00ed p\u0159\u00edvodn\u00edho ochrann\u00e9ho vodi\u010de na pracovn\u00ed stroj mus\u00ed b\u00fdt ozna\u010dena",
    answer:
      "znakem ochrann\u00e9ho uzemn\u011bn\u00ed nebo p\u00edsmeny PE nebo kombinac\u00ed barev zelen\u00e1/\u017elut\u00e1",
  },
  {
    number: 148,
    question:
      "U trojf\u00e1zov\u00e9ho motoru mus\u00ed b\u00fdt ji\u0161t\u011bny proti p\u0159et\u00ed\u017een\u00ed",
    answer: "v\u0161echny f\u00e1ze",
  },
  {
    number: 149,
    question:
      "U trojf\u00e1zov\u00e9ho motoru mus\u00ed b\u00fdt ji\u0161t\u011bny proti p\u0159et\u00ed\u017een\u00ed",
    answer: "t\u0159i f\u00e1ze",
  },
  {
    number: 150,
    question:
      "Ochrann\u00e9 pry\u017eov\u00e9 elektrotechnick\u00e9 rukavice jsou ur\u010deny k ochran\u011b pracovn\u00edk\u016f, kte\u0159\u00ed maj\u00ed kvalifikac\u00ed alespo\u0148",
    answer: "pracovn\u00edk znal\u00fd",
  },
  {
    number: 151,
    question:
      "U za\u0159\u00edzen\u00ed hromosvod\u016f mus\u00ed b\u00fdt provedena v\u00fdkresov\u00e1 dokumentace",
    answer: "jen v p\u0159\u00edpadech pot\u0159ebn\u00fdch odb\u011bratelem",
  },
  {
    number: 152,
    question:
      "V \u010dem spo\u010d\u00edv\u00e1 ochrana dopl\u0148kovou izolac\u00ed",
    answer:
      "ve vybaven\u00ed elektrick\u00e9ho za\u0159\u00edzen\u00ed izola\u010dn\u00edm stanovi\u0161t\u011bm (nap\u0159. izola\u010dn\u00edm kobercem)",
  },
  {
    number: 153,
    question:
      "Jmenovit\u00e9 nap\u011bt\u00ed st\u0159\u00eddav\u00fdch rozvodn\u00fdch s\u00edt\u00ed v \u010cR",
    answer: "230V/400V",
  },
  {
    number: 154,
    question:
      "Jak mus\u00ed b\u00fdt vyd\u00e1n \u00fastn\u00ed p\u0159\u00edkaz",
    answer:
      "jen p\u0159i bezprost\u0159edn\u00edm styku z\u00fa\u010dastn\u011bn\u00fdch osob a to jasn\u011b, stru\u010dn\u011b a jednozna\u010dn\u011b",
  },
  {
    number: 155,
    question:
      "Ochrany p\u0159ed nebezpe\u010dn\u00fdm dotykem \u017eiv\u00fdch \u010d\u00e1st\u00ed rozli\u0161ujeme",
    answer:
      "ochrana izolac\u00ed, krytem nebo p\u0159ep\u00e1\u017ekami, z\u00e1branou, polohou, dopl\u0148kov\u00e1 proudov\u00fdm chr\u00e1ni\u010dem dopl\u0148kovou izolac\u00ed",
  },
  {
    number: 156,
    question: "Kam se p\u0159ipojuje ochrann\u00fd vodi\u010d",
    answer:
      "na svorku ur\u010denou pro p\u0159ipojen\u00ed ochrann\u00e9ho vodi\u010de",
  },
  {
    number: 157,
    question: "Prostor z\u00f3ny 0 v koupeln\u00e1ch je ohrani\u010den",
    answer:
      "ode dna vany nebo sprchov\u00e9 m\u00edsy po okraj vany nebo m\u00edsy",
  },
  {
    number: 158,
    question:
      "Bezpe\u010dn\u00e9 mal\u00e9 nap\u011bt\u00ed \u017eiv\u00fdch \u010d\u00e1st\u00ed v prostor\u00e1ch norm\u00e1ln\u00edch",
    answer: "50V ~ nebo 100V =",
  },
  {
    number: 159,
    question:
      "Sp\u00edna\u010d kter\u00fdm lze vypnout dle pot\u0159eby (v p\u0159\u00edpad\u011b nebezpe\u010d\u00ed) el. za\u0159\u00edzen\u00ed stavby",
    answer: "nesm\u00ed b\u00e1t po dobu pracovn\u00ed sm\u011bny uzam\u010den",
  },
  {
    number: 160,
    question:
      "Kter\u00e9 t\u00eds\u0148ov\u00e9  \u010d\u00edslo slou\u017e\u00ed pro p\u0159ivol\u00e1n\u00ed z\u00e1chrann\u00e9 slu\u017eby",
    answer: "155",
  },
  {
    number: 161,
    question:
      "Stupn\u011b ochrany ne\u017eiv\u00fdch \u010d\u00e1st\u00ed do 1000V \u2013 z\u00e1kladn\u00ed ochrana se provede",
    answer: "ochrana samo\u010dinn\u00fdm odpojen\u00edm od zdroje",
  },
  {
    number: 162,
    question:
      "Celkov\u00fd odpor uzemn\u011bn\u00ed vodi\u010d\u016f PEN, odch\u00e1zej\u00edc\u00edch veden\u00ed transformovny v\u010detn\u011b uzemn\u011bn\u00e9ho st\u0159edu zdroje nesm\u00ed b\u00fdt s\u00edt\u011b o jmenovit\u00e9m nap\u011bt\u00ed U0=230V v\u011bt\u0161\u00ed ne\u017e",
    answer: "2",
  },
  {
    number: 163,
    question:
      "Na co nezapomenout p\u0159i p\u0159ilo\u017een\u00ed za\u0161krcovala",
    answer: "zapsat dobu p\u0159ilo\u017een\u00ed za\u0161krcovadla",
  },
  {
    number: 164,
    question:
      "U hlavn\u00edho pospojov\u00e1n\u00ed v budov\u011b se mus\u00ed navz\u00e1jem spojit",
    answer:
      "ochrann\u00fd vodi\u010d, uzem\u0148ovac\u00ed p\u0159\u00edvod nebo hlavn\u00ed ochrann\u00e1 spojka rozvod potrub\u00ed v budov\u011b, kovov\u00e9 pl\u00e1\u0161t\u011b sd\u011blovac\u00edch kabel\u016f (se souhlasem majitele nebo provozovatele)",
  },
  {
    number: 165,
    question:
      "Pracovn\u00edci jsou povinni pou\u017e\u00edvat osobn\u00ed ochrann\u00e9 a pracovn\u00ed pom\u016fcky",
    answer:
      "v\u0161ude, kde je to p\u0159\u00edslu\u0161n\u00fdmi p\u0159edpisy p\u0159edeps\u00e1no",
  },
  {
    number: 166,
    question:
      "Ur\u010dete co plat\u00ed pro p\u0159ipojen\u00ed pohybliv\u00fdch p\u0159\u00edvod\u016f a \u0161\u0148\u016frov\u00fdch veden\u00ed",
    answer:
      "p\u0159\u00edvody a veden\u00ed mus\u00ed b\u00fdt spolehliv\u011b odleh\u010deny od tahu",
  },
  {
    number: 167,
    question:
      "Pokud elektrick\u00e1 instalace obsahuje rozvody je provozovatel povinen",
    answer:
      "z\u00e1vady odstranit v term\u00ednu stanoven\u00e9ho revizn\u00edm technikem nebo d\u00e1le provozovat podle m\u00edstn\u00edch pracovn\u00edch a bezpe\u010dnostn\u00edch p\u0159edpis\u016f k zji\u0161t\u011bn\u00ed bezpe\u010dnosti",
  },
  {
    number: 168,
    question:
      "Ur\u010dete prioritu ji\u0161t\u011bn\u00ed veden\u00ed a spot\u0159ebi\u010d\u016f",
    answer: "veden\u00ed pak spot\u0159ebi\u010de",
  },
  {
    number: 169,
    question:
      "Revize a kontroly elektrick\u00e9ho ru\u010dn\u00edho p\u0159enosn\u00e9ho n\u00e1\u0159ad\u00ed t\u0159\u00eddy I se prov\u00e1d\u00ed",
    answer:
      "v intervalech podle t\u0159\u00eddy pou\u017e\u00edv\u00e1n\u00ed 1x za 2-6 m\u011bs\u00edc\u016f",
  },
  {
    number: 170,
    question:
      "Elektrick\u00e9 sd\u011blovac\u00ed za\u0159\u00edzen\u00ed je za\u0159\u00edzen\u00ed",
    answer: "k p\u0159enosu a zpracov\u00e1n\u00ed informac\u00ed",
  },
  {
    number: 171,
    question: "Pro nouzov\u00e9 testov\u00e1n\u00ed se pou\u017e\u00edv\u00e1",
    answer: "\u010derven\u00e9 tla\u010d\u00edtko",
  },
  {
    number: 172,
    question:
      "Vypro\u0161\u0165ov\u00e1n\u00ed posti\u017een\u00e9ho s proudov\u00e9ho oblouku p\u0159i \u00farazu elektrick\u00fdm proudem",
    answer:
      "co nejrychleji p\u0159eru\u0161en\u00ed obvodu sp\u00edna\u010dem, izolovan\u00fdm p\u0159edm\u011btem nebo odtr\u017een\u00edm",
  },
  {
    number: 173,
    question:
      "Pracovn\u00edk znal\u00fd sm\u00ed pracovat v bl\u00edzkosti pod nap\u011bt\u00edm",
    answer: "v bezprost\u0159edn\u00ed bl\u00edzkosti",
  },
  {
    number: 174,
    question: "Odborn\u00e9 pom\u016fcky jsou nap\u0159.",
    answer:
      "izola\u010dn\u00ed koberec, plo\u0161iny, rukavice, boty, p\u0159ilby, br\u00fdle, ochrann\u00e9 p\u00e1sy, apod",
  },
  {
    number: 175,
    question: "Stupe\u0148 ochrany kryt\u00edm IP64 znamen\u00e1",
    answer:
      "prachot\u011bsn\u00e9, ochrana p\u0159ed st\u0159\u00edkaj\u00edc\u00ed vodou",
  },
  {
    number: 176,
    question:
      "P\u0159\u00edstupn\u00fd prostor p\u0159ed rozvodn\u00fdm za\u0159\u00edzen\u00edm u samostatn\u00e9ho rozvad\u011b\u010de nebo rozvodnice mus\u00ed b\u00fdt",
    answer: "minim\u00e1ln\u011b 80cm",
  },
  {
    number: 177,
    question:
      "Srde\u010dn\u00ed mas\u00e1\u017e p\u0159i poskytov\u00e1n\u00ed prvn\u00ed pomoci se prov\u00e1d\u00ed",
    answer:
      "do obnoven\u00ed srde\u010dn\u00ed \u010dinnosti nebo do p\u0159\u00edchodu l\u00e9ka\u0159e",
  },
  {
    number: 178,
    question:
      "Sv\u00edtidla pro osv\u011btlen\u00ed v pracovn\u00edm stroji se mohou nap\u00e1jet nap\u011bt\u00edm max.",
    answer: "50V",
  },
  {
    number: 179,
    question:
      "Ke ka\u017ed\u00e9mu elektrick\u00e9mu za\u0159\u00edzen\u00ed mus\u00ed b\u00fdt",
    answer: "vedena dokumentace odpov\u00eddaj\u00edc\u00ed skute\u010dnosti",
  },
  {
    number: 180,
    question:
      "T\u0159\u00eddy bezpe\u010dnosti u elektrick\u00fdch p\u0159edm\u011bt\u016f a za\u0159\u00edzen\u00ed se ozna\u010duj\u00ed",
    answer: "0, I, II, III",
  },
  {
    number: 181,
    question:
      "Vn\u011bj\u0161\u00ed vlivy jsou podle nov\u00e9 normy ozna\u010dov\u00e1ny tak, \u017ee ka\u017ed\u00fd stupe\u0148 vn\u011bj\u0161\u00edho vlivu je k\u00f3dov\u00e1n: dv\u011bma p\u00edsmeny velk\u00e9 abecedy a \u010d\u00edslic\u00ed (nap\u0159.",
    answer: "AD4)",
  },
  {
    number: 182,
    question:
      "Mimo revize elektrick\u00e9ho ru\u010dn\u00edho p\u0159enosn\u00e9ho n\u00e1\u0159ad\u00ed s vnit\u0159n\u00ed prohl\u00eddkou se prov\u00e1d\u00ed kontrola vn\u011bj\u0161\u00ed prohl\u00eddka",
    answer:
      "p\u0159ed vyd\u00e1n\u00edm n\u00e1\u0159ad\u00ed pracovn\u00edkovi",
  },
  {
    number: 183,
    question:
      "N\u00e1t\u011bry, barvy a laky u ochrany \u017eiv\u00fdch \u010d\u00e1st\u00ed izolac\u00ed",
    answer:
      "nejsou samy o sob\u011b pou\u017e\u00edv\u00e1ny za p\u0159im\u011b\u0159enou izolaci pro ochranu p\u0159ed nebezpe\u010dn\u00fdm dotykem",
  },
  {
    number: 184,
    question:
      "Elektrick\u00e1 veden\u00ed rozv\u00e1d\u011b\u010d\u00edch mus\u00ed b\u00fdt",
    answer:
      "z\u0159eteln\u011b ozna\u010den\u00e1 a uspo\u0159\u00e1dan\u00e1 tak, aby je bylo mo\u017eno snadno identifikovat p\u0159i reviz\u00edch, oprav\u00e1ch a \u00fadr\u017eb\u011b",
  },
  {
    number: 185,
    question:
      "Posu\u010fte, jak rychle vyp\u00ednaj\u00ed motorov\u00e9 jisti\u010de a jist\u00edc\u00ed rel\u00e9 styka\u010d\u016f mal\u00e9 nadproudy s porovn\u00e1n\u00edm s pojistkami a jisti\u010di",
    answer: "podstatn\u011b pomaleji",
  },
  {
    number: 186,
    question:
      "Kabely s k\u00f3dov\u00fdm ozna\u010den\u00edm A (nap\u0159.: CYKY 2A x 1,5) maj\u00ed \u017e\u00edly barvy",
    answer: "f\u00e1zov\u00fdch vodi\u010d\u016f",
  },
  {
    number: 187,
    question:
      "Revize  a kontroly elektrick\u00e9ho ru\u010dn\u00edho n\u00e1\u0159ad\u00ed t\u0159. II, III se prov\u00e1d\u00ed",
    answer:
      "ve lh\u016ft\u00e1ch podle t\u0159\u00eddy pou\u017e\u00edv\u00e1n\u00ed 1x za 3-12 m\u011bs\u00edc\u016f",
  },
  {
    number: 188,
    question:
      "Do kovov\u00fdch trubek bez izola\u010dn\u00edho vylo\u017een\u00ed lze pro veden\u00ed nn zatahovat vodi\u010de",
    answer: "pouze vodi\u010de s izolac\u00ed",
  },
  {
    number: 189,
    question:
      "Veden\u00ed z m\u016fstkov\u00fdch vodi\u010d\u016f se skl\u00e1d\u00e1 tak",
    answer:
      "aby nedo\u0161lo p\u0159i kladen\u00ed na podklad ke zhor\u0161en\u00ed izola\u010dn\u00ed pevnosti",
  },
  {
    number: 190,
    question:
      "Pr\u00e1ce na elektrick\u00fdch za\u0159\u00edzen\u00edch pod nap\u011bt\u00edm v prostor\u00e1ch t\u011bsn\u00fdch, kter\u00e9 nevyhovuj\u00ed platn\u00fdm p\u0159edpis\u016fm",
    answer: "jsou zak\u00e1z\u00e1ny",
  },
  {
    number: 191,
    question:
      "Jak\u00e1 kvalifikace je nezbytn\u00e1, aby pracovn\u00edk mohl pracovat pod nap\u011bt\u00edm nn na pracovi\u0161t\u00edch venku, v prostor\u00e1ch vlhk\u00fdch a mokr\u00fdch",
    answer: "pracovn\u00edk znal\u00fd s vy\u0161\u0161\u00ed kvalifikac\u00ed",
  },
];

export default questions;
