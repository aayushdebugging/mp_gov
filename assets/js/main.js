let lang='en';

function setLang(l){
  lang=l;
  // text elements
  document.querySelectorAll('.t[data-en]').forEach(el=>{
    el.textContent=lang==='hi'?(el.dataset.hi||el.dataset.en):el.dataset.en;
  });
  // all lang-btn toggles
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const h=btn.querySelector('.hi'),e=btn.querySelector('.en');
    if(h&&e){h.className='hi'+(lang==='hi'?' active':'');e.className='en'+(lang==='en'?' active':'');}
  });
  // header toggles
  const lh=document.getElementById('lh'),le=document.getElementById('le');
  if(lh&&le){lh.className='hi'+(lang==='hi'?' active':'');le.className='en'+(lang==='en'?' active':'');}
  // login buttons
  const ben=document.getElementById('btn-en'),bhi=document.getElementById('btn-hi');
  if(ben&&bhi){
    if(lang==='en'){ben.style.cssText='padding:7px 18px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:700;background:#fff;color:var(--blue)';bhi.style.cssText='padding:7px 18px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:700;background:rgba(255,255,255,.15);color:rgba(255,255,255,.8);border:1.5px solid rgba(255,255,255,.3)';}
    else{bhi.style.cssText='padding:7px 18px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:700;background:#fff;color:var(--blue)';ben.style.cssText='padding:7px 18px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:700;background:rgba(255,255,255,.15);color:rgba(255,255,255,.8);border:1.5px solid rgba(255,255,255,.3)';}
  }
  // language page
  const loen=document.getElementById('lo-en'),lohi=document.getElementById('lo-hi'),lcen=document.getElementById('lc-en'),lchi=document.getElementById('lc-hi');
  if(loen&&lohi){
    if(lang==='en'){loen.style.cssText='border:2px solid var(--blue);border-radius:12px;padding:15px;display:flex;align-items:center;gap:13px;cursor:pointer;margin-bottom:10px;background:var(--blue-xlight)';lohi.style.cssText='border:1px solid var(--border);border-radius:12px;padding:15px;display:flex;align-items:center;gap:13px;cursor:pointer;margin-bottom:10px';lcen.textContent='✓';lcen.style.color='var(--blue)';lchi.textContent='○';lchi.style.color='var(--ink4)';}
    else{lohi.style.cssText='border:2px solid var(--blue);border-radius:12px;padding:15px;display:flex;align-items:center;gap:13px;cursor:pointer;margin-bottom:10px;background:var(--blue-xlight)';loen.style.cssText='border:1px solid var(--border);border-radius:12px;padding:15px;display:flex;align-items:center;gap:13px;cursor:pointer;margin-bottom:10px';lchi.textContent='✓';lchi.style.color='var(--blue)';lcen.textContent='○';lcen.style.color='var(--ink4)';}
  }
  const lsl=document.getElementById('lang-setting-lbl');
  if(lsl)lsl.textContent=lang==='en'?'Currently: English (E)':'Currently: हिंदी (अ)';
}

function toggleLang(){setLang(lang==='en'?'hi':'en');}

function go(id){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  const t=document.getElementById(id);
  if(t){t.classList.add('on');const b=t.querySelector('.body');if(b)b.scrollTop=0;}
}

function switchTab(el,tabId){
  const tabs=el.closest('.tabs');
  tabs.querySelectorAll('.tab').forEach(t=>t.classList.remove('act'));
  el.classList.add('act');
  const scr=tabs.closest('.scr');
  scr.querySelectorAll('[id^="tab-"],[id^="txn-"]').forEach(p=>p.style.display='none');
  const target=document.getElementById(tabId);
  if(target)target.style.display='';
}

function toggleFAQ(row){
  const a=row.querySelector('.help-ans'),icon=row.querySelector('div:last-child');
  if(a){const open=a.classList.toggle('open');if(icon){icon.style.transform=open?'rotate(90deg)':'rotate(0deg)';}}
}

setLang('en');
