/* ============ FouxyTek Auto — shared app ============ */
const WA   = "243900413725";                 // WhatsApp Business
const TEL  = "+243821658060";                 // ligne d'appel
const IG   = "https://www.instagram.com/macandez/?hl=en";
const FB   = "https://www.facebook.com/fouxytekauto";
const EMAIL= "contact@fouxytekauto.com";       // TODO: remplacer par l'e-mail réel
const LOGO = "assets/img/logo.png";

/* ---- inline SVG icons ---- */
const IC = {
  phone:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>',
  wa:'<svg class="svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.4 1.2-1.9 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z"/></svg>',
  ig:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  fb:'<svg class="svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1.4-3 3.4V11H9v3h2v6h3v-6h2.5l.5-3H14V9.4c0-.3.3-.4.6-.4Z"/></svg>',
  mail:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
  cart:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.6 13.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  screen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8M12 18v3"/></svg>',
  cam:'<svg viewBox="0 0 100 70" fill="none"><defs><radialGradient id="lz" cx="42%" cy="38%" r="60%"><stop offset="0" stop-color="#7fc8ff"/><stop offset="45%" stop-color="#1b3346"/><stop offset="100%" stop-color="#0b141d"/></radialGradient></defs><rect x="20" y="16" width="60" height="38" rx="9" fill="#2b3a4d" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="35" r="15" fill="#0d1620" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="35" r="11" fill="url(#lz)"/><circle cx="45" cy="30" r="3" fill="#bfe6ff" opacity=".9"/><circle cx="70" cy="23" r="2.4" fill="#F4611C"/><rect x="43" y="54" width="14" height="6" rx="2" fill="#1b2836" stroke="#5e7a97" stroke-width="1.5"/><rect x="34" y="60" width="32" height="4" rx="2" fill="#243547"/></svg>',
  sensor:'<svg viewBox="0 0 100 70" fill="none" stroke-linecap="round"><path d="M32 30a19 19 0 0 1 36 0" stroke="#5e7a97" stroke-width="2.4" opacity=".55"/><path d="M38 32a13 13 0 0 1 24 0" stroke="#5e7a97" stroke-width="2.4" opacity=".8"/><path d="M44 34a7 7 0 0 1 12 0" stroke="#F4611C" stroke-width="2.6"/><rect x="14" y="40" width="72" height="17" rx="8" fill="#2b3a4d" stroke="#5e7a97" stroke-width="2"/><circle cx="27" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/><circle cx="42" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/><circle cx="58" cy="48.5" r="3.4" fill="#F4611C"/><circle cx="73" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/></svg>',
  clean:'<svg viewBox="0 0 100 70" fill="none"><g transform="rotate(-6 67 47)"><rect x="52" y="36" width="30" height="22" rx="3" fill="#eef2f6" stroke="#c3ccd6" stroke-width="1.6"/><path d="M55 42h24M55 48h24" stroke="#c3ccd6" stroke-width="1.4"/></g><rect x="30" y="26" width="20" height="32" rx="4" fill="#2FA3A0" stroke="#1d7d7a" stroke-width="2"/><rect x="32" y="40" width="16" height="16" rx="2" fill="#1d7d7a"/><rect x="35" y="18" width="10" height="9" rx="2" fill="#243547"/><path d="M35 21h-13v4h13" fill="#243547"/><path d="M22 17l-5-2M21 22h-6M22 27l-5 2" stroke="#F4611C" stroke-width="2" stroke-linecap="round"/></svg>'
};

/* ---- nav ---- */
const NAV=[
  ["index.html","Accueil"],["configurateur.html","Trouver mon écran"],
  ["produits.html","Produits"],["installation.html","Installation"],
  ["realisations.html","Réalisations"],["apropos.html","À propos"]
];
const PAGE=document.body.dataset.page||"index";

/* ============ inject shared chrome ============ */
function chrome(){
  const nav=NAV.map(([h,t])=>`<a href="${h}" class="${h.startsWith(PAGE)?'active':''}">${t}</a>`).join("");
  const brand=`<a href="index.html" class="brand"><img src="${LOGO}" alt="FouxyTek Auto"><span class="brand__name"><b>Fouxy</b><span>Tek</span> Auto</span></a>`;

  document.getElementById('site-header').innerHTML=`
    <div class="wrap hdr__in">
      ${brand}
      <nav class="nav" id="nav">${nav}</nav>
      <div class="hdr__cta">
        <a class="btn btn--wa btn--sm" href="https://wa.me/${WA}" target="_blank" rel="noopener">${IC.wa} WhatsApp</a>
        <button class="hdr-cart" id="abList" aria-label="Ma liste">${IC.cart}<b id="listCount">0</b></button>
        <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;

  document.getElementById('site-footer').innerHTML=`
    <div class="wrap">
      <div class="foot__grid">
        <div class="foot__brand">
          ${brand}
          <p>Écrans CarPlay &amp; Android et accessoires pour véhicules japonais. Installation professionnelle à Lubumbashi.</p>
          <div class="foot__soc">
            <a class="soc soc--wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.wa}</a>
            <a class="soc soc--ig" href="${IG}" target="_blank" rel="noopener" aria-label="Instagram">${IC.ig}</a>
            <a class="soc soc--fb" href="${FB}" target="_blank" rel="noopener" aria-label="Facebook">${IC.fb}</a>
            <a class="soc soc--mail" href="mailto:${EMAIL}" aria-label="E-mail">${IC.mail}</a>
            <a class="soc soc--call" href="tel:${TEL}" aria-label="Appeler">${IC.phone}</a>
          </div>
        </div>
        <div><h4>Navigation</h4>${NAV.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</div>
        <div><h4>Produits</h4>
          <a href="produits.html">Écrans Android</a><a href="produits.html">CarPlay</a>
          <a href="produits.html">Accessoires</a><a href="produits.html">Entretien auto</a></div>
        <div><h4>Contact</h4>
          <a href="tel:${TEL}">${TEL}</a>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp · +243 900 413 725</a>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
          <a href="${IG}" target="_blank" rel="noopener">Instagram @macandez</a>
          <a href="apropos.html#contact">Lubumbashi · Lun–Sam 08h–18h</a></div>
      </div>
      <div class="foot__bot"><span>© 2026 FouxyTek Auto — Lubumbashi, RDC.</span><span>Meilleur CarPlay, meilleur trajet.</span></div>
    </div>`;

  /* drawer + scrim */
  const scrim=document.createElement('div');scrim.className='scrim';scrim.id='scrim';document.body.appendChild(scrim);
  const dr=document.createElement('aside');dr.className='drawer';dr.id='drawer';dr.setAttribute('aria-hidden','true');
  dr.innerHTML=`
    <div class="drawer__head"><h3>Ma liste d'upgrades</h3><button id="closeDrawer" aria-label="Fermer">&times;</button></div>
    <div class="drawer__body" id="drawerBody"></div>
    <div class="drawer__veh"><label>Votre véhicule (pour le devis)</label><input id="drawerVeh" type="text" placeholder="Ex. Toyota Hilux 2020"></div>
    <div class="drawer__foot"><a class="btn btn--wa" style="width:100%;justify-content:center" id="quoteBtn" target="_blank" rel="noopener">${IC.wa} Demander un devis sur WhatsApp</a></div>`;
  document.body.appendChild(dr);

  /* chatbot */
  const chat=document.createElement('div');chat.className='chat';
  chat.innerHTML=`
    <div class="chat__win" id="chatWin">
      <div class="chat__top"><img src="${LOGO}" alt=""><div><b>Assistant Fouxy</b><span>en ligne</span></div></div>
      <div class="chat__body" id="chatBody"></div>
      <div class="chat__opts" id="chatOpts"></div>
    </div>
    <button class="chat__toggle" id="chatToggle" aria-label="Assistant Fouxy"><img src="${LOGO}" alt=""></button>`;
  document.body.appendChild(chat);

  /* mobile nav */
  const burger=document.getElementById('burger'),navEl=document.getElementById('nav');
  burger.onclick=()=>navEl.classList.toggle('is-open');
}

/* ============ data ============ */
const VEHICLES={
  Toyota:{Hilux:10,Prado:10,Fortuner:10,"Land Cruiser":10,RAV4:10,Raum:9,Alphard:10,Corolla:9,"Corolla Fielder":9},
  Nissan:{Patrol:10,"X-Trail":10,Navara:10,Note:9,March:7},
  Mazda:{Demio:7,"CX-5":10,Mazda2:9,Axela:9},
  Honda:{"CR-V":10,Fit:7,Vezel:9},
  Mitsubishi:{Pajero:10,Outlander:10,L200:10},
  Suzuki:{Swift:7,Vitara:9,Escudo:9},
  Subaru:{Forester:10,Impreza:9,Legacy:9},
  Lexus:{RX:10,LX:10,IS:9}
};
const SIZE_MODEL={7:"Écran CarPlay 7″",9:"T100 CarPlay 9″",10:"T200 CarPlay 10″"};

const PRODUCTS=[
  {name:"T100 CarPlay",cat:"carplay",size:"9″",feat:"CarPlay · Android Auto · GPS · Caméra",stock:"ok",img:"prod-t100.jpg"},
  {name:"T200 CarPlay",cat:"carplay",size:"10″",feat:"Grand écran, commandes au volant, caméra HD",stock:"ok",img:"prod-carplay.jpg"},
  {name:"Premium 12,3″",cat:"carplay",size:"12,3″",feat:"Écran large QLED, la finition haut de gamme",stock:"low",img:"veh-alphard.jpg"},
  {name:"Écran Android 7″",cat:"android",size:"7″",feat:"Idéal petits véhicules · Bluetooth · radio",stock:"ok",img:"veh-mazda.jpg"},
  {name:"Écran Android 9″",cat:"android",size:"9″",feat:"Le best-seller · fluide · WiFi · GPS",stock:"ok",img:"veh-raum.jpg"},
  {name:"Écran Android 10″",cat:"android",size:"10″",feat:"Grand format, processeur rapide, 4 Go RAM",stock:"out",img:"veh-rav4.jpg"},
  {name:"Caméra de recul HD",cat:"accessoire",feat:"Vision nocturne, étanche, lignes de guidage",stock:"ok",icon:"cam"},
  {name:"Capteurs de recul",cat:"accessoire",feat:"4 capteurs, alerte sonore de proximité",stock:"ok",icon:"sensor"},
  {name:"Kit nettoyage intérieur",cat:"entretien",feat:"Microfibres + nettoyant tableau de bord",stock:"low",icon:"clean"}
];
const STOCK={ok:["s-ok","En stock"],low:["s-low","Stock faible"],out:["s-out","Rupture"]};

/* ============ cart (localStorage) ============ */
let LIST=[];
try{LIST=JSON.parse(localStorage.getItem('ftx_list')||'[]')}catch(e){LIST=[]}
let VEH="";
try{VEH=localStorage.getItem('ftx_veh')||''}catch(e){}
function persist(){try{localStorage.setItem('ftx_list',JSON.stringify(LIST));localStorage.setItem('ftx_veh',VEH)}catch(e){}}

function addToList(name,size,img){
  const key=name+(size||'');
  const f=LIST.find(i=>i.key===key);
  if(f)f.qty++;else LIST.push({key,name,size:size||'',img:img||'',qty:1});
  persist();syncList();flash();
}
function removeFromList(key){LIST=LIST.filter(i=>i.key!==key);persist();syncList();}
function flash(){const b=document.getElementById('listCount');if(b&&b.animate)b.animate([{transform:'scale(1)'},{transform:'scale(1.4)'},{transform:'scale(1)'}],{duration:300});}
function syncList(){
  const count=LIST.reduce((n,i)=>n+i.qty,0);
  document.getElementById('listCount').textContent=count;
  const body=document.getElementById('drawerBody');
  if(!LIST.length){body.innerHTML='<div class="drawer__empty">Votre liste est vide.<br>Ajoutez des écrans ou accessoires pour préparer votre devis.</div>';}
  else body.innerHTML=LIST.map(i=>`<div class="ditem">
     <div class="ditem__thumb">${i.img?`<img src="assets/img/${i.img}" alt="">`:''}</div>
     <div><b>${i.name}</b><span>${i.size?i.size+' · ':''}Qté ${i.qty} · Sur devis</span></div>
     <button class="rm" onclick="removeFromList('${i.key.replace(/'/g,"\\'")}')">Retirer</button></div>`).join("");
  buildQuote();
}
function buildQuote(){
  let m="Bonjour FouxyTek 👋%0AJe souhaite un devis pour :%0A";
  LIST.forEach(i=>m+=`%0A• ${encodeURIComponent(i.name)}${i.size?" — "+encodeURIComponent(i.size):""}${i.qty>1?" (x"+i.qty+")":""}`);
  const v=(document.getElementById('drawerVeh').value||'').trim();
  if(v)m+=`%0A%0AVéhicule : ${encodeURIComponent(v)}`;
  m+="%0A%0A(+ installation à 20 $ ?)";
  document.getElementById('quoteBtn').href=`https://wa.me/${WA}?text=${m}`;
}
function openDrawer(){const d=document.getElementById('drawer'),s=document.getElementById('scrim');d.classList.add('is-open');s.classList.add('is-open');d.setAttribute('aria-hidden','false');}
function closeDrawer(){const d=document.getElementById('drawer'),s=document.getElementById('scrim');d.classList.remove('is-open');s.classList.remove('is-open');d.setAttribute('aria-hidden','true');}

/* ============ products page ============ */
function initProducts(){
  const grid=document.getElementById('grid');if(!grid)return;
  const CATL={carplay:"CarPlay",android:"Écran Android",accessoire:"Accessoire",entretien:"Entretien"};
  function render(cat){
    grid.innerHTML="";
    PRODUCTS.filter(p=>cat==="all"||p.cat===cat).forEach(p=>{
      const[cls,lab]=STOCK[p.stock],out=p.stock==="out";
      const media=p.img?`<img src="assets/img/${p.img}" alt="${p.name}">`:`<div class="pcard__icon">${IC[p.icon]}</div>`;
      const el=document.createElement('div');el.className="pcard";
      el.innerHTML=`<div class="pcard__img">
          ${p.size?`<div class="pcard__size">${p.size}</div>`:''}
          <div class="pcard__stock ${cls}"><i></i>${lab}</div>${media}</div>
        <div class="pcard__body">
          <span class="pcard__cat">${CATL[p.cat]}</span>
          <div class="pcard__name">${p.name}</div>
          <div class="pcard__feat">${p.feat}</div>
          <div class="pcard__foot"><span class="pcard__price"><small>Prix</small> Sur devis</span>
          ${out?`<button class="add" disabled>Rupture</button>`
               :`<button class="add" data-add>+ Ajouter</button>`}</div></div>`;
      if(!out)el.querySelector('[data-add]').onclick=()=>addToList(p.name,p.size,p.img||'');
      grid.appendChild(el);
    });
  }
  render("all");
  const f=document.getElementById('filters');
  if(f)f.addEventListener('click',e=>{if(!e.target.classList.contains('fchip'))return;
    f.querySelectorAll('.fchip').forEach(c=>c.classList.remove('is-on'));e.target.classList.add('is-on');render(e.target.dataset.cat);});
}

/* ============ configurator ============ */
function initConfig(){
  const b=document.getElementById('brand');if(!b)return;
  const m=document.getElementById('model'),y=document.getElementById('year');
  Object.keys(VEHICLES).forEach(x=>b.add(new Option(x,x)));
  b.onchange=()=>{m.innerHTML='<option value="">Choisir le modèle…</option>';y.innerHTML='<option value="">Sélectionnez d\'abord un modèle</option>';y.disabled=true;
    if(b.value){Object.keys(VEHICLES[b.value]).forEach(x=>m.add(new Option(x,x)));m.disabled=false;}else m.disabled=true;reco();};
  m.onchange=()=>{y.innerHTML='<option value="">Choisir l\'année…</option>';
    if(m.value){for(let yr=2024;yr>=2010;yr--)y.add(new Option(yr,yr));y.disabled=false;}else y.disabled=true;reco();};
  y.onchange=reco;
  function reco(){
    const box=document.getElementById('reco');
    if(!(b.value&&m.value&&y.value)){box.innerHTML=`<div class="config__idle"><img src="assets/img/prod-t100.jpg" alt="Écran CarPlay recommandé"><div class="config__idle-txt"><svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 18v2M18 18v2"/></svg>Complétez les 3 étapes pour découvrir l'écran idéal pour votre véhicule.</div></div>`;return;}
    const size=VEHICLES[b.value][m.value],name=SIZE_MODEL[size],veh=`${b.value} ${m.value} ${y.value}`;
    const pct=92+(m.value.length%7);   // 92–98 %
    box.innerHTML=`<div class="reco">
      <span class="reco__tag">✅ Compatible avec votre véhicule</span>
      <h3>${name}</h3>
      <div class="reco__veh">${veh}</div>
      <div class="reco__stars">★★★★★ <span>Compatibilité ${pct}%</span></div>
      <div class="reco__compat"><i style="width:${pct}%"></i></div>
      <ul class="reco__feats"><li>CarPlay sans fil</li><li>Android Auto</li><li>Bluetooth</li><li>Caméra de recul</li><li>Commandes au volant</li></ul>
      <div class="reco__price">Écran ${size}″ · Prix <b>sur devis</b> · Installation dispo (20 $)</div>
      <div class="reco__btns">
        <button class="btn btn--primary" id="recoAdd">Ajouter à ma liste</button>
        <a class="btn btn--wa" id="recoOrder" target="_blank" rel="noopener">Commander sur WhatsApp</a>
      </div></div>`;
    document.getElementById('recoAdd').onclick=()=>{VEH=veh;const dv=document.getElementById('drawerVeh');if(dv)dv.value=veh;addToList(name,size+'″','');openDrawer();persist();};
    const msg=`Bonjour FouxyTek 👋 Je possède un(e) ${veh} et je voudrais le prix du ${name} avec installation.`;
    document.getElementById('recoOrder').href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  }
}

/* ============ installation booking ============ */
function initBooking(){
  const btn=document.getElementById('bookBtn');if(!btn)return;
  btn.onclick=()=>{
    const veh=(document.getElementById('bkVeh').value||'').trim()||"(véhicule)";
    const prod=(document.getElementById('bkProd').value||'').trim()||"(produit)";
    const date=document.getElementById('bkDate').value,phone=(document.getElementById('bkPhone').value||'').trim();
    let m=`Bonjour FouxyTek 👋%0AJe voudrais réserver une installation :%0A%0AVéhicule : ${encodeURIComponent(veh)}%0AProduit : ${encodeURIComponent(prod)}`;
    if(date)m+=`%0ADate souhaitée : ${date}`;if(phone)m+=`%0ATéléphone : ${encodeURIComponent(phone)}`;
    m+=`%0A%0A(Installation à 20 $)`;
    window.open(`https://wa.me/${WA}?text=${m}`,'_blank');
  };
}

/* ============ chatbot (scripted, WhatsApp handoff) ============ */
const BOT={
  start:{opts:[["produits","🚗 Trouver un écran"],["prix","💰 Prix & devis"],["install","🔧 Installation"],["lieu","📍 Localisation"],["wa","💬 Parler à un humain"]]},
  produits:{msg:"On a des écrans CarPlay & Android en 7″, 9″, 10″ et 12,3″ — compatibles Toyota, Nissan, Mazda, Honda et plus. Utilisez « Trouver mon écran » pour voir le modèle idéal pour votre voiture.",opts:[["config","→ Trouver mon écran"],["prix","💰 Voir les prix"],["back","↩ Retour"]]},
  prix:{msg:"Les prix sont donnés sur devis, selon l'écran et votre véhicule. Ajoutez ce qui vous intéresse à « Ma liste » et on vous prépare un devis complet sur WhatsApp en un clic. La pose est à 20 $.",opts:[["wa","💬 Demander un devis"],["install","🔧 Installation"],["back","↩ Retour"]]},
  install:{msg:"Oui, on installe ! Pose propre par nos techniciens à 20 $ : écran + caméra + configuration CarPlay/Android Auto, tout testé avant que vous repreniez le volant.",opts:[["book","📅 Réserver une pose"],["wa","💬 En parler sur WhatsApp"],["back","↩ Retour"]]},
  lieu:{msg:"On est à Lubumbashi (Haut-Katanga, RDC). Ouvert du lundi au samedi, 08h–18h. Dimanche sur rendez-vous.",opts:[["wa","💬 Nous contacter"],["back","↩ Retour"]]}
};
function initChat(){
  const win=document.getElementById('chatWin'),body=document.getElementById('chatBody'),opts=document.getElementById('chatOpts');
  let started=false;
  document.getElementById('chatToggle').onclick=()=>{win.classList.toggle('is-open');if(!started){started=true;botSay("Bonjour 👋 Je suis Fouxy, l'assistant de FouxyTek. Comment puis-je vous aider ?",()=>setOpts(BOT.start.opts));}};
  function scroll(){body.scrollTop=body.scrollHeight;}
  function add(cls,html){const d=document.createElement('div');d.className='bubble bubble--'+cls;d.innerHTML=html;body.appendChild(d);scroll();return d;}
  function botSay(txt,after){const t=document.createElement('div');t.className='bubble bubble--bot typing';t.innerHTML='<i></i><i></i><i></i>';body.appendChild(t);scroll();
    setTimeout(()=>{t.remove();add('bot',txt);after&&after();},650);}
  function setOpts(list){opts.innerHTML="";list.forEach(([k,label])=>{const btn=document.createElement('button');if(k==='wa'||k==='book')btn.className='wa';btn.textContent=label;btn.onclick=()=>choose(k,label);opts.appendChild(btn);});}
  function choose(k,label){
    add('user',label);opts.innerHTML="";
    if(k==='wa'){window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Bonjour FouxyTek 👋 J'ai une question.")}`,'_blank');botSay("Je vous bascule sur WhatsApp pour parler à l'équipe. À tout de suite ! 🦊",()=>setOpts(BOT.start.opts));return;}
    if(k==='config'){location.href='configurateur.html';return;}
    if(k==='book'){location.href='installation.html#reserver';return;}
    if(k==='back'){botSay("Que puis-je faire d'autre pour vous ?",()=>setOpts(BOT.start.opts));return;}
    const node=BOT[k];botSay(node.msg,()=>setOpts(node.opts));
  }
}

/* ============ counters + reveal ============ */
function initFx(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  function count(el){const t=parseFloat(el.dataset.count),dec=parseInt(el.dataset.decimals||0),suf=el.dataset.suffix||"",t0=performance.now();
    (function s(now){const p=Math.min((now-t0)/1400,1),e=1-Math.pow(1-p,3),v=t*e;
      el.textContent=(dec?v.toFixed(dec):Math.floor(v).toLocaleString('fr-FR'))+suf;
      if(p<1)requestAnimationFrame(s);else el.textContent=(dec?t.toFixed(dec):t.toLocaleString('fr-FR'))+suf;})(t0);}
  const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);cio.unobserve(e.target);}}),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
}

/* ============ boot ============ */
document.addEventListener('DOMContentLoaded',()=>{
  chrome();
  document.getElementById('abList').onclick=openDrawer;
  document.getElementById('closeDrawer').onclick=closeDrawer;
  document.getElementById('scrim').onclick=closeDrawer;
  const dv=document.getElementById('drawerVeh');if(dv){dv.value=VEH;dv.addEventListener('input',()=>{VEH=dv.value;persist();buildQuote();});}
  syncList();
  initProducts();initConfig();initBooking();initChat();initFx();
});
