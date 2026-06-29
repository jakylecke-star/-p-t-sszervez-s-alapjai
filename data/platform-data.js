window.PLATFORM_DATA = {
  course: {
    title: "Építésszervezés oktatói platform",
    subtitle: "Magasépítő technikus tananyag – modulokra bontott, vizuális és gyakorlatorientált tanulói felület",
    sourceNote: "A platform a feltöltött INSEDO építésszervezés forrásanyag témaszerkezetére épül."
  },
  modules: [
    {
      id: "00",
      title: "Bevezető és fogalomtár",
      short: "A teljes tananyag logikája, alapfogalmak, tanulási útvonal.",
      image: "assets/img/01_eletciklus.png",
      chapter: "1. Bevezető",
      color: "gold",
      goals: [
        "A tanuló átlátja az építési beruházás teljes életciklusát.",
        "Megkülönbözteti az alapvető szereplőket, dokumentumokat és folyamatokat.",
        "Tudja, hogy melyik fejezet melyik projektfázishoz kapcsolódik."
      ],
      blocks: [
        { label: "Életciklus", text: "Megalapozás → előkészítés → megvalósítás → átadás → utógondozás." },
        { label: "Fogalmak", text: "Beruházó, tervező, kivitelező, műszaki ellenőr, idomterv, költségvetés, Gantt, e-napló." },
        { label: "Platformlogika", text: "Minden fejezet egy állomás: rövid elmélet, ábra, feladat, ellenőrző kérdés." }
      ],
      practice: "Készíts saját fogalomtérképet: melyik szereplő, dokumentum vagy művelet melyik projektfázisban jelenik meg?",
      checks: [
        "Melyik szakaszhoz tartozik a munkaterület átadás-átvétel?",
        "Mi a különbség a kiviteli terv és a megvalósulási terv között?",
        "Miért nem csak műszaki, hanem szervezési kérdés is az építési folyamat?"
      ]
    },
    {
      id: "01",
      title: "A beruházási folyamat szereplői és feladataik",
      short: "Építtető, tervező, kivitelező, műszaki ellenőr, hatóság, projektmenedzser.",
      image: "assets/img/02_szereplok.png",
      chapter: "2. Beruházási folyamat szereplői",
      color: "blue",
      goals: [
        "A tanuló felismeri a beruházási folyamat fő szereplőit.",
        "El tudja különíteni az építtetői, tervezői, kivitelezői és ellenőrzési felelősséget.",
        "Érti a szerződés, terv, költség, idő és dokumentáció közös szerepét."
      ],
      blocks: [
        { label: "Építtető / beruházó", text: "Kezdeményez, finanszíroz, dönt, megbízásokat ad, és a projekt érdekeit képviseli." },
        { label: "Tervező(k)", text: "Tervdokumentációt, műszaki leírást, szakági egyeztetést és tervkoordinációt biztosítanak." },
        { label: "Kivitelező", text: "A kiviteli tervek alapján megszervezi és megvalósítja az építési munkát." },
        { label: "Műszaki ellenőr", text: "Az építtető oldalán ellenőrzi a teljesítést, a minőséget, a mennyiségeket és a dokumentációt." },
        { label: "Hatóság", text: "Engedélyez, ellenőriz, eljárást zár, és a jogszerűségi kereteket felügyeli." }
      ],
      practice: "Kapcsolati térkép: jelöld nyilakkal, ki kinek ad megbízást, ki kit ellenőriz, és hol keletkezik dokumentáció.",
      checks: [
        "Miért független szereplő a műszaki ellenőr?",
        "Melyik szereplő oldalán áll az FMV?",
        "Milyen döntéseket hoz az építtető a folyamat elején?"
      ]
    },
    {
      id: "02",
      title: "Beruházások szervezése és előkészítése",
      short: "Helyszín, közmű, kockázat, programalkotás, tervezés, vállalatba adás.",
      image: "assets/img/03_elokeszites.png",
      chapter: "3. Beruházások szervezése és előkészítése",
      color: "teal",
      goals: [
        "A tanuló érti, hogy az előkészítés a kivitelezés biztonságos alapja.",
        "Felismeri a programalkotás, engedélyezés és tervezési szakaszok kapcsolatát.",
        "Képes döntési kapukban gondolkodni: megvalósítható, engedélyezhető, finanszírozható, kivitelezhető."
      ],
      blocks: [
        { label: "Helyszínkiválasztás", text: "Tulajdoni viszonyok, HÉSZ/TÉKA, beépíthetőség, telekméret és szabályozási környezet vizsgálata." },
        { label: "Közmű- és kockázatvizsgálat", text: "Víz, villany, szennyvíz, gáz, távközlés, talajmechanika, árvíz, zaj, közlekedési kapcsolat." },
        { label: "Programalkotás", text: "A beruházás funkcióját, műszaki paramétereit, energiahatékonysági céljait, költség- és időkeretét rögzíti." },
        { label: "Tervezési szakaszok", text: "Tanulmányterv, vázlatterv, engedélyezési terv, kiviteli terv, megvalósulási terv." },
        { label: "Vállalatba adás", text: "Kivitelező kiválasztása, műszaki tartalom és pénzügyi feltételek rögzítése, szerződéskötés." }
      ],
      practice: "Esettanulmány: egy 2 szintes családi ház előkészítésénél állítsd össze a döntési kapuk listáját és a szükséges dokumentumokat.",
      checks: [
        "Miért kell a közműellátottságot már az előkészítéskor vizsgálni?",
        "Miben tér el az engedélyezési terv fókusza a kiviteli tervétől?",
        "Mi zárja le a vállalatba adás folyamatát?"
      ]
    },
    {
      id: "03",
      title: "Mennyiségszámítás",
      short: "Idomterv, méretkimutatás, normák, anyag- és munkaidőigény, kiszerelési egység.",
      image: "assets/img/04_mennyisegszamitas.png",
      chapter: "4. Mennyiségszámítás",
      color: "purple",
      goals: [
        "A tanuló tervből kiindulva képes mérhető mennyiséget meghatározni.",
        "Tudja használni az idomterv és méretkimutatás logikáját.",
        "Érti, hogyan vezet a mennyiség normához, anyagrendeléshez és költségvetési tételhez."
      ],
      blocks: [
        { label: "Mértékegységek", text: "m, m², m³, db, kg, t – mindig a költségvetési tétel egységéhez igazítva." },
        { label: "Idomterv", text: "Méretezett rajzi alap egy szerkezeti elem mennyiségének kiszámításához." },
        { label: "Méretkimutatás", text: "Táblázatos számítás: hossz, szélesség, magasság, vastagság, egység, mennyiség, megjegyzés." },
        { label: "Norma", text: "Egységnyi munkához tartozó anyag-, élőmunka- és gépidőigény." },
        { label: "Kiszerelési egység", text: "A számított mennyiséget kereskedelmi rendelési egységre kell átszámítani, tartalékkal." }
      ],
      practice: "Számold ki 12 m³ falazat téglaszükségletét, ha 1 m³ falazathoz 450 db tégla kell, és 1 raklapon 60 db van.",
      checks: [
        "Miért kell a nyílások levonási szabályait figyelni?",
        "Miért nem elég a terv szerinti mennyiség az anyagrendeléshez?",
        "Hogyan kapcsolódik a norma az időtervezéshez?"
      ]
    },
    {
      id: "04",
      title: "Költségvetés készítés",
      short: "Költségvetési tétel, tételrend, árképzés, árazatlan és árazott költségvetés.",
      image: "assets/img/05_koltsegvetesi_tetel.png",
      secondaryImage: "assets/img/06_koltsegvetes_folyamat.png",
      chapter: "5. Költségvetés készítés",
      color: "orange",
      goals: [
        "A tanuló érti a költségvetés szerepét az ajánlatadásban és szerződéskötésben.",
        "Fel tudja építeni egy költségvetési tétel logikáját.",
        "Elkülöníti az anyag-, munka-, gép-, közvetett és ÁFA elemeket."
      ],
      blocks: [
        { label: "Költségvetés funkciója", text: "Pénzügyi tervezés, ajánlatadás, elszámolás, műszaki ellenőrzés és utókalkuláció alapja." },
        { label: "Tételrend", text: "Szabványosított munkanemek és tételek rendszere: kód, megnevezés, egység, norma, anyagösszetétel." },
        { label: "Árképzés", text: "Anyag egységár × mennyiség + munkaidő norma × óradíj + gépköltség + közvetett költségek." },
        { label: "Költségösszesítő", text: "Munkanemek, nettó összesen, ÁFA és bruttó végösszeg áttekintése." }
      ],
      practice: "Árazatlan tételből készíts árazott költségvetési sort: mennyiség, egységár, nettó összeg, ÁFA, bruttó.",
      checks: [
        "Mi a különbség az árazatlan és az árazott költségvetés között?",
        "Miért fontos a tételrend következetes használata?",
        "Mely költségelemekből állhat össze az egységár?"
      ]
    },
    {
      id: "05",
      title: "Építési organizáció",
      short: "Termelésszervezés, organizációs helyszínrajz, területberendezés, utak, tárolás, segédüzemek.",
      image: "assets/img/07_organizacio.png",
      chapter: "6. Építési organizáció",
      color: "green",
      goals: [
        "A tanuló felismeri az organizáció szerepét a biztonságos és gazdaságos kivitelezésben.",
        "Érti az anyagmozgatás, tárolás, közlekedés és közműellátás helyszíni összefüggéseit.",
        "Képes egy egyszerű organizációs helyszínrajz ellenőrzésére."
      ],
      blocks: [
        { label: "Termelésszervezés", text: "Mikor, hol, mit, mivel és ki végez; a cél a holtidők és ütközések csökkentése." },
        { label: "Terület berendezése", text: "Kerítés, bejárat, konténerek, öltöző, WC, raktár, gépek és anyagdepók elhelyezése." },
        { label: "Felvonulási utak", text: "Ideiglenes utak, rámpák, teherbírás, szélesség, lejtés, gépmozgások biztonsága." },
        { label: "Tárolás", text: "Fedett vagy szabad tárolás, beépítési sorrend, anyagvédelem, környezetvédelem." },
        { label: "Segédüzemek", text: "Ácsműhely, vasalóhely, betonkeverő, hegesztőállomás – ha a helyszíni előállítás indokolt." }
      ],
      practice: "Ellenőrizd egy organizációs helyszínrajzon: bejárat, anyagtároló, daruzási zóna, veszélyes anyag és hulladék útvonala nem ütközik-e.",
      checks: [
        "Miért szervezési kérdés a tárolóhely kijelölése?",
        "Milyen kockázatot okoz a rosszul kijelölt anyagmozgatási útvonal?",
        "Mikor indokolt segédüzem kialakítása?"
      ]
    },
    {
      id: "06",
      title: "Az építési munkák időtervezése",
      short: "Folyamat, időtartam, kapcsolatok, sávos ütemterv, hálós ütemterv, kritikus út.",
      image: "assets/img/08_idotervezes.png",
      chapter: "7. Az építési munkák időtervezése",
      color: "blue",
      goals: [
        "A tanuló érti az időtervezés szerepét az erőforrások összehangolásában.",
        "Megkülönbözteti a Gantt- és hálós ütemterv logikáját.",
        "Felismeri a kritikus út és tartalékidő jelentőségét."
      ],
      blocks: [
        { label: "Folyamat", text: "Önálló munkarész kezdettel, időtartammal és befejezéssel." },
        { label: "Kapcsolat", text: "Technológiai vagy logikai függés: egymás után, részleges átfedéssel vagy párhuzamosan." },
        { label: "Sávos ütemterv", text: "Idővonalas, könnyen áttekinthető ábra; jól mutatja a sorrendet és átfedést." },
        { label: "Hálós ütemterv", text: "A folyamatok logikai kapcsolatait és a kritikus utat szemlélteti." },
        { label: "Kritikus út", text: "Az a feladatlánc, amelynek csúszása a projekt befejezését is csúsztatja." }
      ],
      practice: "Állíts össze mini Gantt-tervet: alapozás, falazás, födém, gépészet, vakolás. Jelöld, mi futhat párhuzamosan.",
      checks: [
        "Miért veszélyes a kritikus út csúszása?",
        "Milyen esetben lehet két folyamat részlegesen átfedésben?",
        "Miben erősebb a hálós ütemterv a Gantt-diagramnál?"
      ]
    },
    {
      id: "07",
      title: "Kivitelezési szakasz mérföldkövei",
      short: "Munkaterület átadás, e-napló, készre jelentés, műszaki átadás-átvétel, jótállás és szavatosság.",
      image: "assets/img/09_merfoldkovek.png",
      secondaryImage: "assets/img/10_enaplo.png",
      chapter: "8. Kivitelezési szakasz mérföldkövei",
      color: "red",
      goals: [
        "A tanuló ismeri a kivitelezési szakasz fő hivatalos fordulópontjait.",
        "Tudja, milyen dokumentum készül az egyes mérföldköveknél.",
        "Érti az e-építési napló szerepét a dokumentálásban és visszakövethetőségben."
      ],
      blocks: [
        { label: "Munkaterület átadás-átvétel", text: "A kivitelezés hivatalos kezdőlépése; rögzíti az átadott terület állapotát és a felelősségi határokat." },
        { label: "E-építési napló", text: "Készenlétbe helyezés, főnapló, alnapló, napi jelentés, FMV nyilatkozat, zárás." },
        { label: "Készre jelentés", text: "A kivitelező jelzi, hogy a szerződés szerinti munka elkészült és ellenőrzésre alkalmas." },
        { label: "Műszaki átadás-átvétel", text: "A teljesítés ellenőrzése; hibák, hiányok, feltételes vagy megfelelt átvétel rögzítése." },
        { label: "Jótállás és szavatosság", text: "Hibakezelés, bizonyítás, határidők és felelősségi kérdések az átadás után." }
      ],
      practice: "Készíts munkaterület átadás-átvételi jegyzőkönyv-vázlatot: résztvevők, dátum, állapot, közművek, fotók, megjegyzések, aláírások.",
      checks: [
        "Miért bizonyító erejű a munkaterület átadás-átvételi jegyzőkönyv?",
        "Milyen adatokat tartalmaz egy napi jelentés?",
        "Mi a különbség a készre jelentés és a műszaki átadás-átvétel között?"
      ]
    },
    {
      id: "08",
      title: "Az építőipari gépek általános ismeretei",
      short: "Gépcsoportok, földmunka, emelés, anyagmozgatás, betontechnológia, üzemeltetési kontroll.",
      image: "assets/img/11_gepek.png",
      chapter: "9. Építőipari gépek általános ismeretei",
      color: "orange",
      goals: [
        "A tanuló csoportosítani tudja az építőipari gépeket munkafolyamat, mozgásmód és energiaellátás szerint.",
        "Felismeri a főbb géptípusokat és felhasználási területüket.",
        "Érti a gépkönyv, napi ellenőrzés, üzemnapló és gépkezelői jogosultság jelentőségét."
      ],
      blocks: [
        { label: "Földmunka", text: "Kotró, bulldózer, gréder, scraper, vibrációs henger." },
        { label: "Alépítmény", text: "Cölöpverő, fúróberendezés, daru, zsaluzó rendszerek mozgatása." },
        { label: "Anyagmozgatás", text: "Szállítószalag, elevátor, dömper, targonca, teherfelvonó." },
        { label: "Emelés", text: "Toronydaru, autódaru, csörlő; teherbírás, hatósugár, biztonsági zóna." },
        { label: "Üzemeltetés", text: "Gépkönyv, karbantartási ciklus, napi ellenőrzés, üzemnapló, jogosultság." }
      ],
      practice: "Válassz ki 5 gépet, és sorold be: munkafolyamat, mozgásmód, energiaellátás, szükséges kezelői feltétel.",
      checks: [
        "Miért kell a napi indulás előtti ellenőrzés?",
        "Milyen dokumentum igazolja a gép használatát?",
        "Miért nem kezelhet bárki toronydarut vagy nehézgépet?"
      ]
    },
    {
      id: "09",
      title: "Épületüzemeltetés, karbantartás, fenntartás és felújítás",
      short: "Élettartamok, állapotfelmérés, üzemeltetés, működtetés, karbantartás, felújítás, korszerűsítés.",
      image: "assets/img/12_uzemeltetes.png",
      chapter: "10. Épületüzemeltetés, -karbantartás, -fenntartás és -felújítás",
      color: "green",
      goals: [
        "A tanuló megkülönbözteti a fizikai, gazdasági és műszaki élettartamot.",
        "Érti az állapotfelmérés szerepét a beavatkozási döntésekben.",
        "El tudja különíteni az üzemeltetés, működtetés, karbantartás, fenntartás, felújítás és korszerűsítés fogalmait."
      ],
      blocks: [
        { label: "Élettartam", text: "Fizikai, gazdasági és műszaki élettartam; szerkezetenként eltérő várható használati idő." },
        { label: "Állapotvizsgálat", text: "Szemrevételezés, tapintás, kopogtatás, roncsolásmentes és roncsolásos vizsgálatok." },
        { label: "Üzemeltetés / működtetés", text: "Az épület működésének és használói komfortjának biztosítása." },
        { label: "Karbantartás", text: "Állagromlás megelőzése; megelőző és hibajavító karbantartás." },
        { label: "Felújítás / korszerűsítés", text: "Elhasználódott elemek cseréje, műszaki színvonal és energetikai teljesítmény javítása." }
      ],
      practice: "Döntési feladat: egy beázó tetőnél elég karbantartani, vagy felújítás/korszerűsítés szükséges? Indokold vizsgálati adatokkal.",
      checks: [
        "Miben más a karbantartás és a felújítás?",
        "Miért kell állapotfelmérési jegyzőkönyv?",
        "Mit jelent a gazdasági élettartam?"
      ]
    }
  ],
  glossary: [
    ["Beruházó / építtető", "A projekt kezdeményezője, finanszírozója és döntéshozója."],
    ["Tervező", "Az építmény terveit és műszaki dokumentációját készítő szakember vagy tervezői team."],
    ["Kivitelező", "A kivitelezési tervek alapján a fizikai megvalósítást végző vállalkozó."],
    ["Műszaki ellenőr", "Az építtető megbízottja, aki ellenőrzi a kivitelezés minőségét, mennyiségét és dokumentációját."],
    ["FMV", "Felelős műszaki vezető; a kivitelező oldalán a szakmai megfelelőséget felügyeli."],
    ["Programalkotás", "A beruházás céljainak, funkcióinak, műszaki paramétereinek, költség- és időkeretének meghatározása."],
    ["Engedélyezési terv", "A hatósági eljáráshoz szükséges tervdokumentáció."],
    ["Kiviteli terv", "A részletes kivitelezést megalapozó műszaki tervdokumentáció."],
    ["Megvalósulási terv", "A kivitelezés utáni tényleges állapotot rögzítő dokumentáció."],
    ["Idomterv", "Méretezett rajz, amely a mennyiségszámítás geometriai alapja."],
    ["Méretkimutatás", "Geometriai adatokat és számított mennyiségeket összesítő táblázat."],
    ["Normaidő", "Egységnyi munkához szükséges munkaidő."],
    ["Költségvetési tétel", "Egy konkrét munkafolyamat mennyiséggel, egységgel és árral meghatározott sora."],
    ["Árazatlan költségvetés", "Tételeket és mennyiségeket tartalmaz, de az árakat a vállalkozó tölti ki."],
    ["Gantt-diagram", "Sávos ütemterv, amely idővonalon ábrázolja a munkafolyamatokat."],
    ["Hálós ütemterv", "A folyamatok logikai kapcsolatait megjelenítő ütemterv."],
    ["Kritikus út", "Az a feladatlánc, amely meghatározza a projekt befejezési idejét."],
    ["E-építési napló", "Elektronikus nyilvántartás az építési munkák hivatalos dokumentálására."],
    ["Munkaterület átadás-átvétel", "A kivitelezés hivatalos kezdőlépése, amely rögzíti a terület állapotát és felelősségi határait."],
    ["Jótállás", "A teljesítés utáni, meghatározott idejű helytállási kötelezettség hibák esetére."],
    ["Szavatosság", "Hibás teljesítéshez kapcsolódó jogi felelősségi forma."],
    ["Fenntartás", "Az épület hosszú távú használhatóságának biztosítása üzemeltetéssel és karbantartással."],
    ["Felújítás", "Elhasználódott szerkezetek vagy rendszerek cseréje, javítása, korszerűsítése."],
    ["Korszerűsítés", "Műszaki színvonal vagy teljesítmény növelése, például energetikai fejlesztéssel."],
    ["Átalakítás", "Az épület funkciójának vagy belső kialakításának módosítása."],
    ["Bővítés", "Az épület alapterületének vagy térfogatának növelése új részekkel."]
  ],
  visuals: [
    ["01", "Építési beruházás életciklusa", "assets/img/01_eletciklus.png"],
    ["02", "Beruházási folyamat szereplői", "assets/img/02_szereplok.png"],
    ["03", "Beruházás szervezése és előkészítése", "assets/img/03_elokeszites.png"],
    ["04", "Mennyiségszámítás logikája", "assets/img/04_mennyisegszamitas.png"],
    ["05", "Költségvetési tétel felépítése", "assets/img/05_koltsegvetesi_tetel.png"],
    ["06", "Költségvetés-készítés folyamata", "assets/img/06_koltsegvetes_folyamat.png"],
    ["07", "Építési organizációs helyszínrajz", "assets/img/07_organizacio.png"],
    ["08", "Időtervezés: Gantt és hálós ütemterv", "assets/img/08_idotervezes.png"],
    ["09", "Kivitelezési szakasz mérföldkövei", "assets/img/09_merfoldkovek.png"],
    ["10", "E-építési napló működése", "assets/img/10_enaplo.png"],
    ["11", "Építőipari gépek csoportosítása", "assets/img/11_gepek.png"],
    ["12", "Épületüzemeltetés és beavatkozások", "assets/img/12_uzemeltetes.png"]
  ],
  quickQuiz: [
    { q: "Melyik dokumentum rögzíti a munkaterület átadáskori állapotát?", a: "Munkaterület átadás-átvételi jegyzőkönyv" },
    { q: "Mi a Gantt-diagram fő előnye?", a: "Egyszerűen szemlélteti a folyamatok időbeli sorrendjét és átfedését." },
    { q: "Miért kell a kiszerelési egységeket figyelembe venni?", a: "Mert az anyagokat a kereskedelemben rendelési egységekben lehet beszerezni." },
    { q: "Ki ellenőrzi a kivitelezést az építtető oldalán?", a: "A műszaki ellenőr." },
    { q: "Melyik út csúszása tolja a projekt végét?", a: "A kritikus úté." }
  ]
};
