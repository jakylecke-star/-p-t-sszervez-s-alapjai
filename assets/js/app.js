const DATA = window.PLATFORM_DATA;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHtml(str){
  return String(str).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
}
function moduleImage(m){ return `<img class="card-img" src="${m.image}" alt="${escapeHtml(m.title)} ábra">`; }
function tags(list){ return `<div class="tag-list">${list.slice(0,8).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>`; }
function renderModules(filter = ''){
  const q = filter.trim().toLowerCase();
  const wrap = $('#moduleGrid');
  const modules = DATA.modules.filter(m => {
    const hay = [m.id,m.title,m.short,m.chapter,...m.blocks.map(b=>b.label),...m.blocks.map(b=>b.text)].join(' ').toLowerCase();
    return !q || hay.includes(q);
  });
  wrap.innerHTML = modules.map(m => `
    <article class="card module-card" tabindex="0" data-id="${m.id}">
      ${moduleImage(m)}
      <div class="card-body">
        <div class="module-meta"><span class="module-id">${m.id}</span><span class="chapter">${escapeHtml(m.chapter)}</span></div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.short)}</p>
        ${tags(m.blocks.map(b=>b.label))}
      </div>
    </article>`).join('');
  $$('.module-card').forEach(card => {
    card.addEventListener('click', () => openModule(card.dataset.id));
    card.addEventListener('keydown', ev => { if(ev.key === 'Enter') openModule(card.dataset.id); });
  });
}
function renderLearningPath(){
  const items = [
    ['1','Megalapozás','igény, cél, finanszírozás','gold'],
    ['2','Előkészítés','program, tervezés, engedély','blue'],
    ['3','Megvalósítás','munkaterület, kivitelezés, e-napló','teal'],
    ['4','Átadás','készre jelentés, műszaki átadás','red'],
    ['5','Utógondozás','jótállás, karbantartás, felújítás','green']
  ];
  $('#learningPath').innerHTML = items.map(i => `<div class="path-card ${i[3]}"><strong><span class="badge">${i[0]}</span>${i[1]}</strong><p>${i[2]}</p></div>`).join('');
}
function openModule(id){
  const m = DATA.modules.find(x => x.id === id);
  if(!m) return;
  const wrap = $('#moduleDetail');
  wrap.innerHTML = `
    <button class="close" type="button" aria-label="Modul bezárása">Bezárás ×</button>
    <div class="detail-hero">
      <img src="${m.image}" alt="${escapeHtml(m.title)} részletes ábra">
      <div class="detail-content">
        <span class="pill">${m.id}</span><span class="pill">${escapeHtml(m.chapter)}</span>
        <h3>${escapeHtml(m.title)}</h3>
        <p class="sub">${escapeHtml(m.short)}</p>
        <div class="cols">
          <div class="mini"><h4>Tanulási cél</h4><ul>${m.goals.map(g => `<li>${escapeHtml(g)}</li>`).join('')}</ul></div>
          <div class="mini"><h4>Gyakorlati feladat</h4><p>${escapeHtml(m.practice)}</p></div>
          <div class="mini"><h4>Ellenőrző kérdések</h4><ul>${m.checks.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul></div>
        </div>
        <div class="block-list">${m.blocks.map(b => `<div class="block"><strong>${escapeHtml(b.label)}</strong><span>${escapeHtml(b.text)}</span></div>`).join('')}</div>
        ${m.secondaryImage ? `<img class="secondary-img" src="${m.secondaryImage}" alt="${escapeHtml(m.title)} kiegészítő ábra">` : ''}
      </div>
    </div>`;
  wrap.classList.add('active');
  wrap.scrollIntoView({behavior:'smooth', block:'start'});
  $('.close', wrap).addEventListener('click', () => wrap.classList.remove('active'));
}
function renderGlossary(filter = ''){
  const q = filter.trim().toLowerCase();
  const terms = DATA.glossary.filter(([term,def]) => !q || (term + ' ' + def).toLowerCase().includes(q));
  $('#glossaryGrid').innerHTML = terms.map(([term,def]) => `<div class="term"><strong>${escapeHtml(term)}</strong><span>${escapeHtml(def)}</span></div>`).join('');
}
function renderVisuals(){
  $('#visualGallery').innerHTML = DATA.visuals.map(([id,title,src]) => `
    <article class="card visual-card">
      <img src="${src}" alt="${escapeHtml(title)}">
      <div class="card-body"><span class="module-id">${id}</span><h3>${escapeHtml(title)}</h3><a href="${src}" target="_blank" rel="noopener">Megnyitás teljes méretben</a></div>
    </article>`).join('');
}
function renderQuiz(){
  $('#quizList').innerHTML = DATA.quickQuiz.map((qa,i)=>`
    <details class="qa"><summary>${i+1}. ${escapeHtml(qa.q)}</summary><p>${escapeHtml(qa.a)}</p></details>`).join('');
}
function calcMennyiseg(){
  const m3 = parseFloat($('#falM3').value) || 0;
  const dbm3 = parseFloat($('#teglaDbM3').value) || 0;
  const raklap = parseFloat($('#raklapDb').value) || 1;
  const tartalek = parseFloat($('#tartalek').value) || 0;
  const db = m3 * dbm3;
  const raklapok = db / raklap;
  const tartalekos = raklapok * (1 + tartalek/100);
  $('#mennyisegResult').innerHTML = `Szükséges tégla: <strong>${Math.round(db).toLocaleString('hu-HU')} db</strong><br>Raklap: <strong>${raklapok.toFixed(2)} raklap</strong><br>Tartalékkal: <strong>${Math.ceil(tartalekos)} raklap</strong>`;
}
function calcKoltseg(){
  const menny = parseFloat($('#kvMenny').value) || 0;
  const anyag = parseFloat($('#anyagEgysegar').value) || 0;
  const norma = parseFloat($('#normaido').value) || 0;
  const oradij = parseFloat($('#oradij').value) || 0;
  const gep = parseFloat($('#gepkoltseg').value) || 0;
  const afa = parseFloat($('#afa').value) || 0;
  const netto = (menny * anyag) + (menny * norma * oradij) + gep;
  const brutto = netto * (1 + afa/100);
  const egyseg = menny ? netto / menny : 0;
  $('#koltsegResult').innerHTML = `Nettó összesen: <strong>${netto.toLocaleString('hu-HU',{maximumFractionDigits:0})} Ft</strong><br>Egységár: <strong>${egyseg.toLocaleString('hu-HU',{maximumFractionDigits:0})} Ft/egység</strong><br>Bruttó: <strong>${brutto.toLocaleString('hu-HU',{maximumFractionDigits:0})} Ft</strong>`;
}
function calcIdo(){
  const menny = parseFloat($('#idoMenny').value) || 0;
  const norma = parseFloat($('#idoNorma').value) || 0;
  const letszam = parseFloat($('#letszam').value) || 1;
  const napi = parseFloat($('#napiOra').value) || 8;
  const ora = menny * norma;
  const nap = ora / (letszam * napi);
  $('#idoResult').innerHTML = `Összes munkaidő: <strong>${ora.toFixed(1)} óra/fő</strong><br>Becsült időtartam: <strong>${Math.ceil(nap)} munkanap</strong> (${nap.toFixed(2)} nap)`;
}
function bindTools(){
  ['falM3','teglaDbM3','raklapDb','tartalek'].forEach(id => $('#'+id).addEventListener('input', calcMennyiseg));
  ['kvMenny','anyagEgysegar','normaido','oradij','gepkoltseg','afa'].forEach(id => $('#'+id).addEventListener('input', calcKoltseg));
  ['idoMenny','idoNorma','letszam','napiOra'].forEach(id => $('#'+id).addEventListener('input', calcIdo));
  calcMennyiseg(); calcKoltseg(); calcIdo();
}
function init(){
  renderLearningPath(); renderModules(); renderGlossary(); renderVisuals(); renderQuiz(); bindTools();
  $('#moduleSearch').addEventListener('input', e => renderModules(e.target.value));
  $('#termSearch').addEventListener('input', e => renderGlossary(e.target.value));
  $('#printBtn').addEventListener('click', () => window.print());
}
document.addEventListener('DOMContentLoaded', init);
