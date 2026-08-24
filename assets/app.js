/* ============ FouxyTek Auto — shared app ============ */
const WA   = "243900413725";                 // WhatsApp Business
const TEL  = "+243821658060";                 // ligne d'appel
const FB   = "https://web.facebook.com/profile.php?id=61580159690085";
const TIKTOK = "https://www.tiktok.com/@fouxytekauto";
const EMAIL= "contact@fouxytekauto.com";       // TODO: remplacer par l'e-mail réel
const LOGO = "assets/img/logo.png";

/* ---- inline SVG icons ---- */
const IC = {
  phone:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>',
  wa:'<svg class="svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.4 1.2-1.9 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z"/></svg>',
  fb:'<svg class="svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1.4-3 3.4V11H9v3h2v6h3v-6h2.5l.5-3H14V9.4c0-.3.3-.4.6-.4Z"/></svg>',
  mail:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
  tiktok:'<svg class="svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.35 2.02 1.5 3.32 3.5 3.5v2.6c-1.2 0-2.4-.34-3.5-1v6.4a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6.02.9.07v2.75a3.15 3.15 0 1 0 2.2 3V3h2.8z"/></svg>',
  cart:'<svg class="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.6 13.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  screen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8M12 18v3"/></svg>',
  cam:'<svg viewBox="0 0 100 70" fill="none"><defs><radialGradient id="lz" cx="42%" cy="38%" r="60%"><stop offset="0" stop-color="#7fc8ff"/><stop offset="45%" stop-color="#1b3346"/><stop offset="100%" stop-color="#0b141d"/></radialGradient></defs><rect x="20" y="16" width="60" height="38" rx="9" fill="#2b3a4d" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="35" r="15" fill="#0d1620" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="35" r="11" fill="url(#lz)"/><circle cx="45" cy="30" r="3" fill="#bfe6ff" opacity=".9"/><circle cx="70" cy="23" r="2.4" fill="#F4611C"/><rect x="43" y="54" width="14" height="6" rx="2" fill="#1b2836" stroke="#5e7a97" stroke-width="1.5"/><rect x="34" y="60" width="32" height="4" rx="2" fill="#243547"/></svg>',
  sensor:'<svg viewBox="0 0 100 70" fill="none" stroke-linecap="round"><path d="M32 30a19 19 0 0 1 36 0" stroke="#5e7a97" stroke-width="2.4" opacity=".55"/><path d="M38 32a13 13 0 0 1 24 0" stroke="#5e7a97" stroke-width="2.4" opacity=".8"/><path d="M44 34a7 7 0 0 1 12 0" stroke="#F4611C" stroke-width="2.6"/><rect x="14" y="40" width="72" height="17" rx="8" fill="#2b3a4d" stroke="#5e7a97" stroke-width="2"/><circle cx="27" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/><circle cx="42" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/><circle cx="58" cy="48.5" r="3.4" fill="#F4611C"/><circle cx="73" cy="48.5" r="3.4" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/></svg>',
  clean:'<svg viewBox="0 0 100 70" fill="none"><g transform="rotate(-6 67 47)"><rect x="52" y="36" width="30" height="22" rx="3" fill="#eef2f6" stroke="#c3ccd6" stroke-width="1.6"/><path d="M55 42h24M55 48h24" stroke="#c3ccd6" stroke-width="1.4"/></g><rect x="30" y="26" width="20" height="32" rx="4" fill="#2FA3A0" stroke="#1d7d7a" stroke-width="2"/><rect x="32" y="40" width="16" height="16" rx="2" fill="#1d7d7a"/><rect x="35" y="18" width="10" height="9" rx="2" fill="#243547"/><path d="M35 21h-13v4h13" fill="#243547"/><path d="M22 17l-5-2M21 22h-6M22 27l-5 2" stroke="#F4611C" stroke-width="2" stroke-linecap="round"/></svg>',
  screen:'<svg viewBox="0 0 100 70" fill="none"><rect x="18" y="10" width="64" height="46" rx="6" fill="#1b2836" stroke="#5e7a97" stroke-width="2"/><rect x="23" y="15" width="54" height="36" rx="3" fill="#0d1620"/><rect x="28" y="20" width="12" height="12" rx="3" fill="#25C866"/><rect x="44" y="20" width="12" height="12" rx="3" fill="#3B82F6"/><rect x="60" y="20" width="12" height="12" rx="3" fill="#F4611C"/><rect x="28" y="36" width="12" height="10" rx="3" fill="#B23A78"/><rect x="44" y="36" width="28" height="10" rx="3" fill="#243547"/><rect x="43" y="56" width="14" height="6" rx="2" fill="#1b2836" stroke="#5e7a97" stroke-width="1.4"/><rect x="34" y="62" width="32" height="4" rx="2" fill="#243547"/></svg>',
  audio:'<svg viewBox="0 0 100 70" fill="none"><rect x="30" y="8" width="40" height="54" rx="8" fill="#1b2836" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="40" r="15" fill="#0d1620" stroke="#5e7a97" stroke-width="2"/><circle cx="50" cy="40" r="9" fill="#243547" stroke="#5e7a97" stroke-width="1.2"/><circle cx="50" cy="40" r="3.4" fill="#F4611C"/><circle cx="50" cy="19" r="4.5" fill="#0d1620" stroke="#5e7a97" stroke-width="1.4"/><path d="M74 30a14 14 0 0 1 0 20M80 24a22 22 0 0 1 0 32" stroke="#F4611C" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>'
};

/* ---- nav ---- */
const NAV=[
  ["index.html","Accueil"],["configurateur.html","Trouver mon écran"],
  ["produits.html","Produits"],["installation.html","Installation"],
  ["faq.html","FAQ"],["apropos.html","À propos"],["contact.html","Contact"]
];
const PAGE=document.body.dataset.page||"index";

/* ============ i18n (FR default · EN · SW) ============ */
let LANG="fr";
try{LANG=localStorage.getItem('ftx_lang')||'fr'}catch(e){}
function norm(s){return (s||'').replace(/\s+/g,' ').trim();}
// Full-text → innerHTML (elements that contain markup)
const DICT_HTML={
"Passez à zéro interférence et plus de style.":{en:'Switch to zero interference <span class="accent">and more style.</span>',sw:'Nenda kwa sifuri usumbufu <span class="accent">na mtindo zaidi.</span>'}
};
// French leaf-text → {en, sw}
const DICT={
// nav
"Accueil":{en:"Home",sw:"Mwanzo"},"Trouver mon écran":{en:"Find my screen",sw:"Tafuta skrini yangu"},
"Produits":{en:"Products",sw:"Bidhaa"},"Installation":{en:"Installation",sw:"Ufungaji"},
"FAQ":{en:"FAQ",sw:"Maswali"},"À propos":{en:"About",sw:"Kuhusu"},"Contact":{en:"Contact",sw:"Mawasiliano"},
// hero
"Modification & personnalisation auto · Lubumbashi":{en:"Auto modification & customization · Lubumbashi",sw:"Ubadilishaji na urekebishaji wa magari · Lubumbashi"},
"Bien plus que de l'électronique : votre spécialiste de la modification et de la personnalisation automobile à Lubumbashi — écrans CarPlay & Android, caméras, accessoires et bien plus, posés proprement par nos techniciens.":{en:"Far more than electronics: your specialist in vehicle modification and customization in Lubumbashi — CarPlay & Android screens, cameras, accessories and much more, cleanly fitted by our technicians.",sw:"Zaidi ya elektroniki tu: mtaalamu wako wa ubadilishaji na urekebishaji wa magari Lubumbashi — skrini za CarPlay na Android, kamera, vifaa na zaidi, vilivyofungwa vizuri na mafundi wetu."},
"Voir les produits":{en:"View products",sw:"Angalia bidhaa"},"Trouver mon écran →":{en:"Find my screen →",sw:"Tafuta skrini →"},
// checker
"Vérificateur de compatibilité":{en:"Compatibility checker",sw:"Kikagua ulinganifu"},
"Votre véhicule est-il compatible ?":{en:"Is your vehicle compatible?",sw:"Je, gari lako linaoana?"},
"Trouvez l'accessoire compatible avec votre véhicule en 3 clics.":{en:"Find the accessory compatible with your vehicle in 3 clicks.",sw:"Tafuta kifaa kinachooana na gari lako kwa mibonyezo 3."},
"Votre véhicule":{en:"Your vehicle",sw:"Gari lako"},"Modèle":{en:"Model",sw:"Modeli"},"Année":{en:"Year",sw:"Mwaka"},"Marque":{en:"Make",sw:"Chapa"},
"Vérifier la compatibilité":{en:"Check compatibility",sw:"Kagua ulinganifu"},
"Compatible":{en:"Compatible",sw:"Inaoana"},"Recommandation indicative":{en:"Indicative recommendation",sw:"Pendekezo la mwongozo"},
"Ajouter à ma liste":{en:"Add to my list",sw:"Ongeza kwenye orodha"},"Voir le détail →":{en:"See details →",sw:"Ona maelezo →"},
"Commander sur WhatsApp":{en:"Order on WhatsApp",sw:"Agiza kwa WhatsApp"},"Vérifier sur WhatsApp":{en:"Check on WhatsApp",sw:"Thibitisha kwa WhatsApp"},
// t100
"Produit phare":{en:"Flagship product",sw:"Bidhaa kuu"},
"Transformez votre véhicule en cockpit connecté. Écran tactile Apple CarPlay & Android Auto sans fil — disponible en 7″, 9″ et 10″.":{en:"Turn your vehicle into a connected cockpit. Wireless Apple CarPlay & Android Auto touchscreen — available in 7″, 9″ and 10″.",sw:"Geuza gari lako kuwa chumba cha kuendesha chenye muunganisho. Skrini ya kugusa ya Apple CarPlay na Android Auto bila waya — inapatikana 7″, 9″ na 10″."},
"Apple CarPlay & Android Auto sans fil":{en:"Wireless Apple CarPlay & Android Auto",sw:"Apple CarPlay na Android Auto bila waya"},
"Bluetooth, GPS & navigation":{en:"Bluetooth, GPS & navigation",sw:"Bluetooth, GPS na uelekezaji"},
"Support caméra de recul":{en:"Reverse camera support",sw:"Inasaidia kamera ya nyuma"},
"Commandes au volant conservées":{en:"Steering-wheel controls kept",sw:"Vidhibiti vya usukani vinabaki"},
"Commander le T100":{en:"Order the T100",sw:"Agiza T100"},
// split
"Nos écrans":{en:"Our screens",sw:"Skrini zetu"},
"Le bon format pour chaque tableau de bord":{en:"The right size for every dashboard",sw:"Ukubwa sahihi kwa kila dashibodi"},
"Du compact 7″ au grand format 10″ et au Premium 12,3″ — CarPlay sans fil, Android Auto, GPS, Bluetooth et caméra de recul. Une connexion stable, testée sur route.":{en:"From the compact 7″ to the large 10″ and the Premium 12.3″ — wireless CarPlay, Android Auto, GPS, Bluetooth and reverse camera. A stable connection, road-tested.",sw:"Kutoka 7″ ndogo hadi 10″ kubwa na Premium 12.3″ — CarPlay bila waya, Android Auto, GPS, Bluetooth na kamera ya nyuma. Muunganisho thabiti, uliojaribiwa barabarani."},
"Apple CarPlay & Android Auto sans fil":{en:"Wireless Apple CarPlay & Android Auto",sw:"Apple CarPlay na Android Auto bila waya"},
"Caméra de recul et capteurs en option":{en:"Reverse camera and sensors optional",sw:"Kamera ya nyuma na vitambuzi kwa hiari"},
"Commandes au volant conservées":{en:"Steering-wheel controls kept",sw:"Vidhibiti vya usukani vinabaki"},
"Installation propre incluse dès 20 $":{en:"Clean installation from $20",sw:"Ufungaji safi kuanzia $20"},
"Explorer le catalogue →":{en:"Explore the catalogue →",sw:"Chunguza katalogi →"},
// why
"Pourquoi nous choisir":{en:"Why choose us",sw:"Kwa nini utuchague"},
"Une customisation comme vous le méritez.":{en:"Customization as you deserve it.",sw:"Urekebishaji kama unavyostahili."},
"🔧 Installation professionnelle":{en:"🔧 Professional installation",sw:"🔧 Ufungaji wa kitaalamu"},
"Techniciens spécialisés : câblage discret, pose soignée et configuration complète, testée avant la remise du véhicule.":{en:"Specialized technicians: discreet wiring, careful fitting and full configuration, tested before the vehicle is handed back.",sw:"Mafundi wataalamu: waya wa siri, ufungaji makini na usanidi kamili, uliojaribiwa kabla ya kurudisha gari."},
"🚗 Toutes marques de véhicules":{en:"🚗 All vehicle makes",sw:"🚗 Magari ya aina zote"},
"Japonaises, coréennes ou européennes — on connaît vos tableaux de bord et on s'adapte à votre véhicule.":{en:"Japanese, Korean or European — we know your dashboards and adapt to your vehicle.",sw:"Za Kijapani, Kikorea au Kizungu — tunazijua dashibodi zenu na kuendana na gari lako."},
"🛡️ Garantie":{en:"🛡️ Warranty",sw:"🛡️ Dhamana"},
"Produits et installation garantis — les conditions exactes vous sont précisées lors du devis.":{en:"Products and installation guaranteed — exact terms are confirmed with your quote.",sw:"Bidhaa na ufungaji vyenye dhamana — masharti kamili yanathibitishwa wakati wa nukuu."},
"📱 Support WhatsApp":{en:"📱 WhatsApp support",sw:"📱 Msaada wa WhatsApp"},
"Assistance client directe : une question avant ou après la pose, on vous répond sur WhatsApp Business.":{en:"Direct customer support: a question before or after fitting, we reply on WhatsApp Business.",sw:"Msaada wa moja kwa moja: swali kabla au baada ya ufungaji, tunakujibu kwa WhatsApp Business."},
"⚡ Installation rapide":{en:"⚡ Fast installation",sw:"⚡ Ufungaji wa haraka"},
"La plupart des poses sont réalisées en quelques heures, souvent dans la même journée selon le véhicule.":{en:"Most fittings are done in a few hours, often the same day depending on the vehicle.",sw:"Ufungaji mwingi hukamilika ndani ya saa chache, mara nyingi siku ile ile kulingana na gari."},
"🔄 Service après-vente":{en:"🔄 After-sales service",sw:"🔄 Huduma baada ya mauzo"},
"Un souci après la pose ? On assure le suivi, les réglages et le dépannage — vous n'êtes pas seul.":{en:"An issue after fitting? We handle follow-up, adjustments and troubleshooting — you're not alone.",sw:"Tatizo baada ya ufungaji? Tunashughulikia ufuatiliaji, marekebisho na utatuzi — hauko peke yako."},
// testimonials
"Avis clients":{en:"Customer reviews",sw:"Maoni ya wateja"},
"Ce que disent nos clients":{en:"What our customers say",sw:"Wanachosema wateja wetu"},
"Installation nickel, le CarPlay marche parfaitement sur ma Prado. Équipe rapide et sérieuse.":{en:"Spotless installation, the CarPlay works perfectly on my Prado. Fast, serious team.",sw:"Ufungaji safi, CarPlay inafanya kazi vizuri kwenye Prado yangu. Timu ya haraka na makini."},
"Écran posé en une matinée, câblage propre et tout testé avant de partir. Je recommande.":{en:"Screen fitted in a morning, clean wiring and everything tested before leaving. I recommend it.",sw:"Skrini iliwekwa asubuhi moja, waya safi na kila kitu kilijaribiwa kabla ya kuondoka. Napendekeza."},
"Meilleur rapport qualité-prix à Lubumbashi. Support WhatsApp au top après la pose.":{en:"Best value for money in Lubumbashi. Great WhatsApp support after fitting.",sw:"Thamani bora zaidi Lubumbashi. Msaada mzuri wa WhatsApp baada ya ufungaji."},
// stats band
"Clients servis":{en:"Clients served",sw:"Wateja waliohudumiwa"},
"Véhicules équipés":{en:"Vehicles equipped",sw:"Magari yaliyowekewa vifaa"},
"Satisfaction client":{en:"Customer satisfaction",sw:"Kuridhika kwa wateja"},
"Chiffres indicatifs fournis par FouxyTek — à connecter aux données réelles pour une mise à jour en temps réel.":{en:"Indicative figures provided by FouxyTek — to be connected to real data for real-time updates.",sw:"Takwimu za mwongozo kutoka FouxyTek — zitaunganishwa na data halisi kwa masasisho ya wakati halisi."},
// trust
"Installation professionnelle":{en:"Professional installation",sw:"Ufungaji wa kitaalamu"},
"Vérification de compatibilité":{en:"Compatibility check",sw:"Ukaguzi wa ulinganifu"},
"Support WhatsApp":{en:"WhatsApp support",sw:"Msaada wa WhatsApp"},
"Service après-vente":{en:"After-sales service",sw:"Huduma baada ya mauzo"},
"Toutes marques de véhicules":{en:"All vehicle makes",sw:"Chapa zote za magari"},
// cta
"Prêt à moderniser votre véhicule ?":{en:"Ready to modernize your vehicle?",sw:"Uko tayari kuboresha gari lako?"},
"Trouvez l'accessoire compatible en 3 clics, ou parlez-nous directement sur WhatsApp.":{en:"Find the compatible accessory in 3 clicks, or talk to us directly on WhatsApp.",sw:"Tafuta kifaa kinachooana kwa mibonyezo 3, au ongea nasi moja kwa moja kwa WhatsApp."},
"Discuter sur WhatsApp":{en:"Chat on WhatsApp",sw:"Piga soga kwa WhatsApp"},
// footer
"Automotive Technology & Accessories":{en:"Automotive Technology & Accessories",sw:"Teknolojia na Vifaa vya Magari"},
"Écrans CarPlay & Android, caméras, GPS et accessoires pour tous types de véhicules — installation professionnelle à Lubumbashi.":{en:"CarPlay & Android screens, cameras, GPS and accessories for all types of vehicles — professional installation in Lubumbashi.",sw:"Skrini za CarPlay na Android, kamera, GPS na vifaa vya magari ya aina zote — ufungaji wa kitaalamu Lubumbashi."},
"Modification et personnalisation automobile à Lubumbashi — écrans CarPlay & Android, caméras, accessoires et installation professionnelle.":{en:"Vehicle modification and customization in Lubumbashi — CarPlay & Android screens, cameras, accessories and professional installation.",sw:"Ubadilishaji na urekebishaji wa magari Lubumbashi — skrini za CarPlay na Android, kamera, vifaa na ufungaji wa kitaalamu."},
"Créez votre pack":{en:"Build your package",sw:"Tengeneza pakiti yako"},
"Navigation":{en:"Navigation",sw:"Urambazaji"},"Services":{en:"Services",sw:"Huduma"},"Configurateur":{en:"Configurator",sw:"Kisanidi"},
"Installation CarPlay":{en:"CarPlay installation",sw:"Ufungaji wa CarPlay"},"Android Auto":{en:"Android Auto",sw:"Android Auto"},
"Caméras de recul":{en:"Reverse cameras",sw:"Kamera za nyuma"},"GPS & navigation":{en:"GPS & navigation",sw:"GPS na uelekezaji"},
"Accessoires automobiles":{en:"Car accessories",sw:"Vifaa vya magari"},
"Lubumbashi · Lun–Sam 08h–18h":{en:"Lubumbashi · Mon–Sat 8am–6pm",sw:"Lubumbashi · Jumatatu–Jumamosi 08h–18h"},
"© 2026 FouxyTek Auto — Lubumbashi, RDC.":{en:"© 2026 FouxyTek Auto — Lubumbashi, DRC.",sw:"© 2026 FouxyTek Auto — Lubumbashi, DRC."},
"Meilleur CarPlay, meilleur trajet.":{en:"Better CarPlay, better journey.",sw:"CarPlay bora, safari bora."},
// banners
"Catalogue":{en:"Catalogue",sw:"Katalogi"},"Écrans & accessoires":{en:"Screens & accessories",sw:"Skrini na vifaa"},
"Ajoutez ce qui vous intéresse à votre liste — on vous prépare un devis sur WhatsApp en un clic.":{en:"Add what interests you to your list — we prepare a WhatsApp quote in one click.",sw:"Ongeza unachopenda kwenye orodha — tunakuandalia nukuu kwa WhatsApp kwa mbonyezo mmoja."},
"La fonction signature":{en:"The signature feature",sw:"Kipengele maalum"},
"Trouvez l'écran fait pour votre véhicule":{en:"Find the screen made for your vehicle",sw:"Tafuta skrini iliyotengenezwa kwa gari lako"},
"Marque, modèle, année — on vous dit tout de suite l'écran compatible et sa taille idéale.":{en:"Make, model, year — we tell you the compatible screen and its ideal size right away.",sw:"Chapa, modeli, mwaka — tunakuambia mara moja skrini inayooana na ukubwa wake bora."},
"Service de pose":{en:"Fitting service",sw:"Huduma ya ufungaji"},"Installation professionnelle":{en:"Professional installation",sw:"Ufungaji wa kitaalamu"},
"Installation Pro":{en:"Pro Installation",sw:"Ufungaji Pro"},
"On pose votre écran, on branche la caméra et on configure CarPlay/Android Auto — tout testé avant que vous repreniez le volant.":{en:"We fit your screen, connect the camera and set up CarPlay/Android Auto — all tested before you take the wheel.",sw:"Tunaweka skrini yako, tunaunganisha kamera na kusanidi CarPlay/Android Auto — vyote vimejaribiwa kabla hujashika usukani."},
"Questions fréquentes":{en:"Frequently asked questions",sw:"Maswali yanayoulizwa mara kwa mara"},
"Tout ce qu'il faut savoir":{en:"Everything you need to know",sw:"Kila kitu unachohitaji kujua"},
"Les réponses aux questions qu'on nous pose le plus souvent. Une autre question ? On répond en direct sur WhatsApp.":{en:"Answers to the questions we get most often. Another question? We reply live on WhatsApp.",sw:"Majibu ya maswali tunayoulizwa mara nyingi. Swali lingine? Tunajibu moja kwa moja kwa WhatsApp."},
"Parlons de votre véhicule":{en:"Let's talk about your vehicle",sw:"Tuzungumze kuhusu gari lako"},
"Un devis, une question, un rendez-vous d'installation ? On vous répond vite — et en direct sur WhatsApp.":{en:"A quote, a question, an installation appointment? We reply quickly — and live on WhatsApp.",sw:"Nukuu, swali, miadi ya ufungaji? Tunajibu haraka — na moja kwa moja kwa WhatsApp."},
// about
"Qui sommes-nous":{en:"Who we are",sw:"Sisi ni nani"},
"Une entreprise locale, une expertise pointue.":{en:"A local company, sharp expertise.",sw:"Kampuni ya hapa, utaalamu wa hali ya juu."},
"FouxyTek est une entreprise spécialisée dans les solutions technologiques automobiles à Lubumbashi. Nous proposons des écrans CarPlay, Android Auto, caméras de recul, GPS et accessoires pour tous types de véhicules, avec installation professionnelle et accompagnement après-vente.":{en:"FouxyTek is a company specialized in automotive technology solutions in Lubumbashi. We offer CarPlay screens, Android Auto, reverse cameras, GPS and accessories for all types of vehicles, with professional installation and after-sales support.",sw:"FouxyTek ni kampuni maalum ya suluhu za teknolojia ya magari Lubumbashi. Tunatoa skrini za CarPlay, Android Auto, kamera za nyuma, GPS na vifaa vya magari ya aina zote, pamoja na ufungaji wa kitaalamu na msaada baada ya mauzo."},
"Notre mission":{en:"Our mission",sw:"Dhamira yetu"},"Notre expertise":{en:"Our expertise",sw:"Utaalamu wetu"},
"Notre équipe":{en:"Our team",sw:"Timu yetu"},"Pourquoi FouxyTek":{en:"Why FouxyTek",sw:"Kwa nini FouxyTek"},
"Une question ou un projet ?":{en:"A question or a project?",sw:"Swali au mradi?"},
"Écrivez-nous — on vous répond directement.":{en:"Write to us — we reply directly.",sw:"Tuandikie — tunakujibu moja kwa moja."},
// contact
"Nous contacter":{en:"Contact us",sw:"Wasiliana nasi"},"Appel direct":{en:"Direct call",sw:"Simu ya moja kwa moja"},
"Écrivez-nous, appelez ou passez à l'atelier.":{en:"Write, call or drop by the workshop.",sw:"Tuandikie, piga simu au tembelea karakana."},
"E-mail":{en:"Email",sw:"Barua pepe"},"Dimanche sur rendez-vous":{en:"Sunday by appointment",sw:"Jumapili kwa miadi"},
"Envoyer un message":{en:"Send a message",sw:"Tuma ujumbe"},
"Remplissez et on continue la conversation sur WhatsApp.":{en:"Fill it in and we continue the conversation on WhatsApp.",sw:"Jaza na tunaendelea mazungumzo kwa WhatsApp."},
"Votre nom":{en:"Your name",sw:"Jina lako"},"Votre message":{en:"Your message",sw:"Ujumbe wako"},
"Envoyer sur WhatsApp":{en:"Send on WhatsApp",sw:"Tuma kwa WhatsApp"},"Itinéraire":{en:"Directions",sw:"Njia"},
// installation page
"À partir de":{en:"Starting at",sw:"Kuanzia"},"Réservez votre créneau":{en:"Book your slot",sw:"Weka nafasi yako"},
"Remplissez le formulaire, on vous confirme la date et l'heure directement sur WhatsApp. Rapide, propre, soigné.":{en:"Fill in the form, we confirm the date and time directly on WhatsApp. Fast, clean, careful.",sw:"Jaza fomu, tunathibitisha tarehe na saa moja kwa moja kwa WhatsApp. Haraka, safi, makini."},
"Demande d'installation":{en:"Installation request",sw:"Ombi la ufungaji"},"Nom & post-nom":{en:"First & last name",sw:"Jina na jina la ukoo"},
"Nom":{en:"First name",sw:"Jina"},"Post-nom":{en:"Last name",sw:"Jina la ukoo"},
"Véhicule":{en:"Vehicle",sw:"Gari"},"Produit":{en:"Product",sw:"Bidhaa"},"Date souhaitée":{en:"Preferred date",sw:"Tarehe unayopendelea"},
"Téléphone":{en:"Phone",sw:"Simu"},"Demander l'installation":{en:"Request installation",sw:"Omba ufungaji"},
"Comment ça se passe":{en:"How it works",sw:"Jinsi inavyofanya kazi"},"Trois étapes, une seule visite":{en:"Three steps, one visit",sw:"Hatua tatu, ziara moja"},
"On choisit l'écran":{en:"We choose the screen",sw:"Tunachagua skrini"},"On installe":{en:"We install",sw:"Tunafunga"},"Vous roulez connecté":{en:"You drive connected",sw:"Unaendesha ukiwa umeunganishwa"},
// products
"Tout":{en:"All",sw:"Zote"},"Écrans Android":{en:"Android screens",sw:"Skrini za Android"},"CarPlay":{en:"CarPlay",sw:"CarPlay"},
"Accessoires":{en:"Accessories",sw:"Vifaa"},"Entretien auto":{en:"Car care",sw:"Utunzaji wa gari"},
"Comparatif":{en:"Comparison",sw:"Ulinganisho"},"Caractéristique":{en:"Feature",sw:"Kipengele"},
"Prix":{en:"Price",sw:"Bei"},"Sur devis":{en:"On quote",sw:"Kwa nukuu"},"+ Ajouter":{en:"+ Add",sw:"+ Ongeza"},
"Rupture":{en:"Out of stock",sw:"Imeisha"},"En stock":{en:"In stock",sw:"Ipo"},"Stock faible":{en:"Low stock",sw:"Stoo ndogo"},
"Accessoire":{en:"Accessory",sw:"Kifaa"},"Écran Android":{en:"Android screen",sw:"Skrini ya Android"},"Entretien":{en:"Care",sw:"Utunzaji"},
// configurator
"1 Marque":{en:"1 Make",sw:"1 Chapa"},
"Bon à savoir":{en:"Good to know",sw:"Vizuri kujua"},"Comment on choisit la taille":{en:"How we choose the size",sw:"Jinsi tunavyochagua ukubwa"},
"Compact & installation d'origine":{en:"Compact & factory fit",sw:"Ndogo na ufungaji wa kiwandani"},
"S'intègre discrètement quand l'emplacement d'origine est réduit — idéal pour garder un look d'usine.":{en:"Fits discreetly when the original slot is small — ideal to keep a factory look.",sw:"Inakaa kwa siri wakati nafasi ya asili ni ndogo — bora kudumisha muonekano wa kiwandani."},
"L'option la plus populaire":{en:"The most popular option",sw:"Chaguo maarufu zaidi"},
"Le meilleur équilibre taille / lisibilité — le format que la plupart de nos clients choisissent.":{en:"The best size/readability balance — the format most of our customers choose.",sw:"Uwiano bora wa ukubwa/usomekaji — muundo ambao wateja wengi huchagua."},
"Grand écran, expérience premium":{en:"Big screen, premium experience",sw:"Skrini kubwa, uzoefu wa hali ya juu"},
"Plus d'espace pour la navigation, la caméra et le multitâche — l'effet « cockpit moderne ».":{en:"More room for navigation, camera and multitasking — the 'modern cockpit' effect.",sw:"Nafasi zaidi ya uelekezaji, kamera na kazi nyingi — athari ya 'chumba cha kisasa'."},
"Pas sûr de votre modèle ?":{en:"Not sure of your model?",sw:"Huna uhakika wa modeli yako?"},
"📸 Envoyez une photo de votre tableau de bord":{en:"📸 Send a photo of your dashboard",sw:"📸 Tuma picha ya dashibodi yako"},
"Le trim, l'année et l'autoradio d'origine changent la compatibilité. Envoyez-nous une photo — notre équipe identifie l'écran idéal pour vous.":{en:"The trim, year and original head unit change compatibility. Send us a photo — our team identifies the ideal screen for you.",sw:"Aina, mwaka na redio ya asili hubadilisha ulinganifu. Tutumie picha — timu yetu itatambua skrini bora kwako."},
"Envoyer une photo sur WhatsApp":{en:"Send a photo on WhatsApp",sw:"Tuma picha kwa WhatsApp"},
"Complétez les 3 étapes pour découvrir l'écran idéal pour votre véhicule.":{en:"Complete the 3 steps to discover the ideal screen for your vehicle.",sw:"Kamilisha hatua 3 kugundua skrini bora kwa gari lako."},
"Compatible avec votre véhicule":{en:"Compatible with your vehicle",sw:"Inaoana na gari lako"},
"CarPlay sans fil":{en:"Wireless CarPlay",sw:"CarPlay bila waya"},"Bluetooth":{en:"Bluetooth",sw:"Bluetooth"},
"Caméra de recul":{en:"Reverse camera",sw:"Kamera ya nyuma"},"Commandes au volant":{en:"Steering controls",sw:"Vidhibiti vya usukani"},
// faq questions
"Le CarPlay fonctionne-t-il sans fil ?":{en:"Does CarPlay work wirelessly?",sw:"Je, CarPlay inafanya kazi bila waya?"},
"Oui, selon la configuration du T100. La plupart de nos écrans prennent en charge Apple CarPlay et Android Auto sans fil.":{en:"Yes, depending on the T100 configuration. Most of our screens support wireless Apple CarPlay and Android Auto.",sw:"Ndio, kulingana na usanidi wa T100. Skrini zetu nyingi zinasaidia Apple CarPlay na Android Auto bila waya."},
"Est-ce compatible avec mes commandes au volant ?":{en:"Is it compatible with my steering-wheel controls?",sw:"Je, inaoana na vidhibiti vyangu vya usukani?"},
"La compatibilité dépend de votre véhicule. Sur la plupart des véhicules, les commandes au volant sont conservées — on vérifie avant l'installation.":{en:"Compatibility depends on your vehicle. On most vehicles, steering-wheel controls are kept — we check before installation.",sw:"Ulinganifu unategemea gari lako. Kwenye magari mengi, vidhibiti vya usukani vinabaki — tunahakiki kabla ya ufungaji."},
"Pouvez-vous installer une caméra de recul ?":{en:"Can you install a reverse camera?",sw:"Je, mnaweza kufunga kamera ya nyuma?"},
"Oui, là où c'est compatible. La caméra se branche directement sur l'écran et s'active en marche arrière.":{en:"Yes, where compatible. The camera connects directly to the screen and activates in reverse.",sw:"Ndio, pale inapowezekana. Kamera inaunganishwa moja kwa moja na skrini na kuwaka wakati wa kurudi nyuma."},
"Allez-vous modifier mon tableau de bord ?":{en:"Will you modify my dashboard?",sw:"Je, mtabadilisha dashibodi yangu?"},
"L'installation est adaptée à votre véhicule et à son cadre de montage. On privilégie toujours une pose propre qui respecte le tableau de bord.":{en:"Installation is adapted to your vehicle and its mounting frame. We always favor a clean fit that respects the dashboard.",sw:"Ufungaji unaendana na gari lako na fremu yake. Sisi hupendelea ufungaji safi unaoheshimu dashibodi."},
"Installez-vous l'écran vous-mêmes ?":{en:"Do you install the screen yourselves?",sw:"Je, mnafunga skrini wenyewe?"},
"Oui, l'installation peut être proposée. Nos techniciens posent l'écran, branchent la caméra et configurent tout — dès 20 $.":{en:"Yes, installation can be offered. Our technicians fit the screen, connect the camera and set everything up — from $20.",sw:"Ndio, ufungaji unaweza kutolewa. Mafundi wetu huweka skrini, huunganisha kamera na kusanidi kila kitu — kuanzia $20."},
"Puis-je utiliser Android Auto ?":{en:"Can I use Android Auto?",sw:"Je, naweza kutumia Android Auto?"},
"Oui, sur les configurations T100 compatibles. Android Auto et Apple CarPlay sont pris en charge.":{en:"Yes, on compatible T100 configurations. Android Auto and Apple CarPlay are supported.",sw:"Ndio, kwenye usanidi wa T100 unaooana. Android Auto na Apple CarPlay zinasaidiwa."},
"Combien coûte l'installation ?":{en:"How much does installation cost?",sw:"Ufungaji unagharimu kiasi gani?"},
"L'installation démarre à 20 $. Le prix de l'écran est donné sur devis, selon le modèle et votre véhicule.":{en:"Installation starts at $20. The screen price is given on quote, depending on the model and your vehicle.",sw:"Ufungaji unaanzia $20. Bei ya skrini hutolewa kwa nukuu, kulingana na modeli na gari lako."},
"Où êtes-vous situés ?":{en:"Where are you located?",sw:"Mko wapi?"},
"À Lubumbashi (Haut-Katanga, RDC). Ouvert du lundi au samedi, 08h–18h, et le dimanche sur rendez-vous.":{en:"In Lubumbashi (Haut-Katanga, DRC). Open Monday to Saturday, 8am–6pm, and Sunday by appointment.",sw:"Lubumbashi (Haut-Katanga, DRC). Tumefunguliwa Jumatatu hadi Jumamosi, 08h–18h, na Jumapili kwa miadi."},
"Une autre question ?":{en:"Another question?",sw:"Swali lingine?"},
"Écrivez-nous — on vous répond directement sur WhatsApp.":{en:"Write to us — we reply directly on WhatsApp.",sw:"Tuandikie — tunakujibu moja kwa moja kwa WhatsApp."},
"Poser ma question":{en:"Ask my question",sw:"Uliza swali langu"},
// product one-liners + comparatif
"CarPlay · Android Auto · GPS · Caméra":{en:"CarPlay · Android Auto · GPS · Camera",sw:"CarPlay · Android Auto · GPS · Kamera"},
"Grand écran, commandes au volant, caméra HD":{en:"Big screen, steering controls, HD camera",sw:"Skrini kubwa, vidhibiti vya usukani, kamera ya HD"},
"Écran large QLED, la finition haut de gamme":{en:"Wide QLED screen, premium finish",sw:"Skrini pana ya QLED, umaliziaji wa hali ya juu"},
"Idéal petits véhicules · Bluetooth · radio":{en:"Ideal for small vehicles · Bluetooth · radio",sw:"Bora kwa magari madogo · Bluetooth · redio"},
"Le best-seller · fluide · WiFi · GPS":{en:"The best-seller · smooth · WiFi · GPS",sw:"Inayouzwa zaidi · laini · WiFi · GPS"},
"Grand format, processeur rapide, 4 Go RAM":{en:"Large format, fast processor, 4 GB RAM",sw:"Umbo kubwa, prosesa ya haraka, RAM 4 GB"},
"Vision nocturne, étanche, lignes de guidage":{en:"Night vision, waterproof, guide lines",sw:"Uonaji wa usiku, isiyopenya maji, mistari ya mwongozo"},
"4 capteurs, alerte sonore de proximité":{en:"4 sensors, proximity sound alert",sw:"Vitambuzi 4, tahadhari ya sauti ya ukaribu"},
"Microfibres + nettoyant tableau de bord":{en:"Microfiber + dashboard cleaner",sw:"Kitambaa laini + kisafishaji cha dashibodi"},
"Caméra de recul HD":{en:"HD reverse camera",sw:"Kamera ya nyuma ya HD"},
"Capteurs de recul":{en:"Parking sensors",sw:"Vitambuzi vya kuegesha"},
"Kit nettoyage intérieur":{en:"Interior cleaning kit",sw:"Seti ya kusafisha ndani"},
"Système audio":{en:"Sound system",sw:"Mfumo wa sauti"},
"Haut-parleurs & ampli — son clair et puissant":{en:"Speakers & amp — clear, powerful sound",sw:"Spika na ampli — sauti safi na yenye nguvu"},
"Nouveau · Entretien auto":{en:"New · Car care",sw:"Mpya · Utunzaji wa gari"},
"La gamme CRE WASH est arrivée.":{en:"The CRE WASH range has arrived.",sw:"Safu ya CRE WASH imefika."},
"Shampooing Auto Premium, mousse active pour l'extérieur et lavage moteur — le nettoyage premium signé CRE WASH, disponible chez FouxyTek.":{en:"Premium Car Shampoo, active foam for the exterior and engine wash — premium cleaning by CRE WASH, available at FouxyTek.",sw:"Shampuu ya Gari Premium, povu hai kwa nje na usafishaji wa injini — usafi wa hali ya juu wa CRE WASH, unapatikana FouxyTek."},
"Nettoie en profondeur & fait briller":{en:"Deep-cleans & adds shine",sw:"Husafisha kwa kina na kung'arisha"},
"Protège la carrosserie et la peinture":{en:"Protects bodywork and paint",sw:"Hulinda mwili na rangi ya gari"},
"Sûr sur toutes les surfaces":{en:"Safe on all surfaces",sw:"Salama kwa nyuso zote"},
"Voir les produits d'entretien →":{en:"See car-care products →",sw:"Ona bidhaa za utunzaji →"},
"Bluetooth & GPS":{en:"Bluetooth & GPS",sw:"Bluetooth na GPS"},"Taille d'écran":{en:"Screen size",sw:"Ukubwa wa skrini"},
"CRE WASH Shampooing Auto Premium":{en:"CRE WASH Premium Car Shampoo",sw:"CRE WASH Shampuu ya Gari Premium"},
"Nettoie en profondeur, fait briller et protège":{en:"Deep-cleans, adds shine and protects",sw:"Husafisha kwa kina, hung'arisha na kulinda"},
"CRE WASH Shampooing Extérieur":{en:"CRE WASH Exterior Shampoo",sw:"CRE WASH Shampuu ya Nje"},
"Mousse active · nettoyage en douceur":{en:"Active foam · gentle cleaning",sw:"Povu hai · usafishaji laini"},
"CRE WASH Lavage Moteur":{en:"CRE WASH Engine Wash",sw:"CRE WASH Usafishaji wa Injini"},
"Dégraisse en profondeur, moteur protégé":{en:"Cuts grease deeply, engine protected",sw:"Huondoa mafuta kwa kina, injini inalindwa"},
"Apple CarPlay":{en:"Apple CarPlay",sw:"Apple CarPlay"}
};
const DICT_PH={
"Ex. Toyota Hilux 2020":{en:"e.g. Toyota Hilux 2020",sw:"mf. Toyota Hilux 2020"},
"Ex. T100 CarPlay 10″":{en:"e.g. T100 CarPlay 10″",sw:"mf. T100 CarPlay 10″"},
"Ex. Bakenga René":{en:"e.g. John Smith",sw:"mf. Bakenga René"},
"Ex. Bakenga":{en:"e.g. John",sw:"mf. Bakenga"},"Ex. René":{en:"e.g. Smith",sw:"mf. René"},
"Nom & prénom":{en:"Full name",sw:"Jina kamili"},"+243…":{en:"+243…",sw:"+243…"},
"Ce que vous recherchez…":{en:"What you're looking for…",sw:"Unachotafuta…"},
"Choisir la marque…":{en:"Choose the make…",sw:"Chagua chapa…"},"Marque…":{en:"Make…",sw:"Chapa…"},
"Modèle…":{en:"Model…",sw:"Modeli…"},"Année…":{en:"Year…",sw:"Mwaka…"}
};
function translateNode(el){
  let fr=el.getAttribute('data-frkey');
  if(fr===null)fr=norm(el.textContent);
  if(LANG==='fr'){ if(el.hasAttribute('data-fr0')){el.innerHTML=el.getAttribute('data-fr0');el.removeAttribute('data-fr0');el.removeAttribute('data-frkey');} return; }
  if(DICT_HTML[fr]&&DICT_HTML[fr][LANG]){ if(!el.hasAttribute('data-fr0')){el.setAttribute('data-fr0',el.innerHTML);el.setAttribute('data-frkey',fr);} el.innerHTML=DICT_HTML[fr][LANG]; return; }
  if(DICT[fr]&&DICT[fr][LANG]){
    const kids=[...el.childNodes];
    const elemKids=kids.filter(n=>n.nodeType===1);
    const textNodes=kids.filter(n=>n.nodeType===3&&norm(n.nodeValue)!=='');
    if(elemKids.length===0){
      if(!el.hasAttribute('data-fr0')){el.setAttribute('data-fr0',el.innerHTML);el.setAttribute('data-frkey',fr);}
      el.textContent=DICT[fr][LANG];
    } else if(textNodes.length&&elemKids.every(n=>norm(n.textContent)==='')){
      if(!el.hasAttribute('data-fr0')){el.setAttribute('data-fr0',el.innerHTML);el.setAttribute('data-frkey',fr);}
      textNodes[0].nodeValue=DICT[fr][LANG];textNodes.slice(1).forEach(n=>n.nodeValue='');
    }
  }
}
function translateTree(root){
  (root||document).querySelectorAll('h1,h2,h3,h4,p,span,a,button,li,label,b,small,blockquote,figcaption,.pcard__feat,.pcard__cat,.band__lab').forEach(translateNode);
  document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
    let fr=el.getAttribute('data-phkey'); if(fr===null)fr=norm(el.getAttribute('placeholder'));
    if(LANG==='fr'){ if(el.hasAttribute('data-ph0')){el.placeholder=el.getAttribute('data-ph0');el.removeAttribute('data-ph0');el.removeAttribute('data-phkey');} return; }
    if(DICT_PH[fr]&&DICT_PH[fr][LANG]){ if(!el.hasAttribute('data-ph0')){el.setAttribute('data-ph0',el.placeholder);el.setAttribute('data-phkey',fr);} el.placeholder=DICT_PH[fr][LANG]; }
  });
}
function applyLang(l){
  LANG=l; try{localStorage.setItem('ftx_lang',l)}catch(e){}
  document.documentElement.lang=l;
  translateTree();
  document.querySelectorAll('.langsw button').forEach(x=>x.classList.toggle('is-on',x.dataset.l===l));
}

/* ============ inject shared chrome ============ */
function chrome(){
  const nav=NAV.map(([h,t])=>`<a href="${h}" class="${h.startsWith(PAGE)?'active':''}">${t}</a>`).join("");
  const brand=`<a href="index.html" class="brand"><img src="${LOGO}" alt="FouxyTek Auto"><span class="brand__name"><b>Fouxy</b><span>Tek</span> Auto</span></a>`;

  document.getElementById('site-header').innerHTML=`
    <div class="wrap hdr__in">
      ${brand}
      <nav class="nav" id="nav">${nav}</nav>
      <div class="hdr__cta">
        <div class="langsw" id="langsw" role="group" aria-label="Langue">
          <button data-l="fr">FR</button><button data-l="en">EN</button><button data-l="sw">SW</button>
        </div>
        <button class="hdr-cart" id="abList" aria-label="Ma liste">${IC.cart}<b id="listCount">0</b></button>
        <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;

  document.getElementById('site-footer').innerHTML=`
    <div class="wrap">
      <div class="foot__grid">
        <div class="foot__brand">
          <a href="index.html" class="brand"><img src="${LOGO}" alt="FouxyTek Auto"><span class="brand__name"><b>Fouxy</b><span>Tek</span> Auto</span></a>
          <p class="foot__tag">Automotive Technology &amp; Accessories</p>
          <p>Modification et personnalisation automobile à Lubumbashi — écrans CarPlay &amp; Android, caméras, accessoires et installation professionnelle.</p>
          <div class="foot__soc">
            <a class="soc soc--wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.wa}</a>
            <a class="soc soc--fb" href="${FB}" target="_blank" rel="noopener" aria-label="Facebook">${IC.fb}</a>
            <a class="soc soc--tk" href="${TIKTOK}" target="_blank" rel="noopener" aria-label="TikTok">${IC.tiktok}</a>
            <a class="soc soc--mail" href="mailto:${EMAIL}" aria-label="E-mail">${IC.mail}</a>
          </div>
        </div>
        <div><h4>Navigation</h4>
          <a href="index.html">Accueil</a>
          <a href="produits.html">Produits</a>
          <a href="configurateur.html">Configurateur</a>
          <a href="apropos.html">À propos</a>
          <a href="contact.html">Contact</a></div>
        <div><h4>Services</h4>
          <a href="produits.html">Créez votre pack</a>
          <a href="produits.html">Installation CarPlay</a>
          <a href="produits.html">Android Auto</a>
          <a href="produits.html">Caméras de recul</a>
          <a href="produits.html">Accessoires automobiles</a></div>
        <div><h4>Contact</h4>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp · +243 900 413 725</a>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
          <a href="${TIKTOK}" target="_blank" rel="noopener">TikTok · @fouxytekauto</a>
          <a href="${FB}" target="_blank" rel="noopener">Facebook · FouxyTek</a>
          <a href="contact.html">Lubumbashi · Lun–Sam 08h–18h</a></div>
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

  /* chatbot (Fouxy assistant, bottom-left) */
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
  navEl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navEl.classList.remove('is-open')));
}

/* ============ data ============ */
const AUTRE={"Autre / Je ne sais pas":9};
const VEHICLES={
  Toyota:{Hilux:10,"Hilux Surf":10,Prado:10,"Land Cruiser":10,"Land Cruiser Prado":10,Fortuner:10,RAV4:10,Harrier:10,"Mark X":10,Vanguard:10,Alphard:10,Vellfire:10,Noah:9,Voxy:9,Wish:9,Sienta:9,Raum:9,Corolla:9,"Corolla Axio":9,"Corolla Fielder":9,Premio:9,Allion:9,Belta:9,Succeed:9,Vitz:7,Passo:7,Probox:7,Ractis:7,Aqua:7,...AUTRE},
  Nissan:{Patrol:10,"X-Trail":10,Murano:10,Serena:10,Elgrand:10,Navara:10,Qashqai:9,Juke:9,Teana:9,Bluebird:9,Sylphy:9,Tiida:9,Sunny:9,Wingroad:9,Note:9,Cube:7,March:7,AD:7,...AUTRE},
  Mazda:{"CX-9":10,"CX-7":10,"CX-5":10,"CX-3":9,Atenza:9,Axela:9,Mazda2:9,Familia:9,Premacy:9,Bongo:9,Demio:7,Verisa:7,...AUTRE},
  Honda:{"CR-V":10,Odyssey:10,StepWGN:10,Accord:10,Stream:9,Freed:9,Vezel:9,Civic:9,Insight:9,Airwave:9,"CR-Z":9,Fit:7,...AUTRE},
  Mitsubishi:{Pajero:10,Montero:10,Delica:10,Outlander:10,"ASX / RVR":9,Lancer:9,Galant:9,L200:10,Colt:7,...AUTRE},
  Suzuki:{"Grand Vitara":10,Escudo:9,Vitara:9,Jimny:9,SX4:9,Ertiga:9,Baleno:9,Swift:7,"Wagon R":7,Alto:7,...AUTRE},
  Subaru:{Outback:10,Forester:10,Exiga:10,XV:9,Impreza:9,Legacy:9,WRX:9,...AUTRE},
  Lexus:{LX:10,GX:10,RX:10,NX:10,IS:9,ES:9,CT:9,...AUTRE},
  "Autre marque":{"Citadine":7,"Berline":9,"Crossover / SUV":10,"Pick-up":10,"Van / Minibus":10,"Je ne sais pas":9}
};
const SIZE_MODEL={7:"Écran CarPlay 7″",9:"T100 CarPlay 9″",10:"T200 CarPlay 10″"};

const PRODUCTS=[
  {name:"T100 CarPlay",cat:"carplay",size:"9″",feat:"CarPlay · Android Auto · GPS · Caméra",stock:"ok",img:"prod-t100.jpg"},
  {name:"T200 CarPlay",cat:"carplay",size:"10″",feat:"Grand écran, commandes au volant, caméra HD",stock:"ok",img:"prod-carplay.jpg"},
  {name:"Premium 12,3″",cat:"carplay",size:"12,3″",feat:"Écran large QLED, la finition haut de gamme",stock:"low",icon:"screen"},
  {name:"Écran Android 7″",cat:"android",size:"7″",feat:"Idéal petits véhicules · Bluetooth · radio",stock:"ok",icon:"screen"},
  {name:"Écran Android 9″",cat:"android",size:"9″",feat:"Le best-seller · fluide · WiFi · GPS",stock:"ok",icon:"screen"},
  {name:"Écran Android 10″",cat:"android",size:"10″",feat:"Grand format, processeur rapide, 4 Go RAM",stock:"out",icon:"screen"},
  {name:"Système audio",cat:"accessoire",feat:"Haut-parleurs & ampli — son clair et puissant",stock:"ok",icon:"audio"},
  {name:"Caméra de recul HD",cat:"accessoire",feat:"Vision nocturne, étanche, lignes de guidage",stock:"ok",icon:"cam"},
  {name:"Capteurs de recul",cat:"accessoire",feat:"4 capteurs, alerte sonore de proximité",stock:"ok",icon:"sensor"},
  {name:"CRE WASH Shampooing Auto Premium",cat:"entretien",size:"500 ml",feat:"Nettoie en profondeur, fait briller et protège",stock:"ok",img:"crewash-shampoo.jpg"},
  {name:"CRE WASH Shampooing Extérieur",cat:"entretien",size:"1 L",feat:"Mousse active · nettoyage en douceur",stock:"ok",img:"crewash-mousse.jpg"},
  {name:"CRE WASH Lavage Moteur",cat:"entretien",size:"1 L",feat:"Dégraisse en profondeur, moteur protégé",stock:"ok",img:"crewash-moteur.jpg"},
  {name:"Kit nettoyage intérieur",cat:"entretien",feat:"Microfibres + nettoyant tableau de bord",stock:"low",icon:"clean"}
];
const STOCK={ok:["s-ok","En stock"],low:["s-low","Stock faible"],out:["s-out","Rupture"]};

/* ============ cart (localStorage) ============ */
let LIST=[];
try{LIST=JSON.parse(localStorage.getItem('ftx_list')||'[]')}catch(e){LIST=[]}
let VEH="";
try{VEH=localStorage.getItem('ftx_veh')||''}catch(e){}
let VEHY="";
try{VEHY=localStorage.getItem('ftx_vehy')||''}catch(e){}
function persist(){try{localStorage.setItem('ftx_list',JSON.stringify(LIST));localStorage.setItem('ftx_veh',VEH);localStorage.setItem('ftx_vehy',VEHY)}catch(e){}}

/* build a rich, contextual WhatsApp order message */
function waOrder(product){
  let m=`Bonjour FouxyTek 👋 Je suis intéressé par le ${product}.`;
  if(VEH)m+=`\nVéhicule : ${VEH}`;
  if(VEHY)m+=`\nAnnée : ${VEHY}`;
  m+=`\nJe voudrais connaître le prix et la disponibilité.`;
  return `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
}

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
  if(VEHY)m+=`%0AAnnée : ${encodeURIComponent(VEHY)}`;
  m+="%0A%0AJe voudrais connaître le prix et la disponibilité (+ installation à 20 $ ?).";
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
          <div class="pcard__foot"><span class="pcard__price"><small>Prix</small> <span>Sur devis</span></span>
          ${out?`<button class="add" disabled>Rupture</button>`
               :`<button class="add" data-add>+ Ajouter</button>`}</div></div>`;
      if(!out)el.querySelector('[data-add]').onclick=()=>addToList(p.name,p.size,p.img||'');
      grid.appendChild(el);
    });
    translateTree(grid);
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
    if(m.value){for(let yr=2025;yr>=2004;yr--)y.add(new Option(yr,yr));y.add(new Option("Je ne sais pas","Je ne sais pas"));y.disabled=false;}else y.disabled=true;reco();};
  y.onchange=reco;
  /* deep-link prefill from the home checker */
  const q=new URLSearchParams(location.search);
  if(q.get('b')&&VEHICLES[q.get('b')]){
    b.value=q.get('b');b.dispatchEvent(new Event('change'));
    const mv=q.get('m');
    if(mv&&VEHICLES[b.value][mv]){m.value=mv;m.dispatchEvent(new Event('change'));
      const yv=q.get('y');
      if(yv&&[...y.options].some(o=>o.value===yv)){y.value=yv;y.dispatchEvent(new Event('change'));}
    }
  }
  function reco(){
    const box=document.getElementById('reco');
    if(!(b.value&&m.value&&y.value)){box.innerHTML=`<div class="config__idle"><img src="assets/img/prod-t100.jpg" alt="Écran CarPlay recommandé"><div class="config__idle-txt"><svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 18v2M18 18v2"/></svg>Complétez les 3 étapes pour découvrir l'écran idéal pour votre véhicule.</div></div>`;return;}
    const size=VEHICLES[b.value][m.value],name=SIZE_MODEL[size];
    const soft=b.value==="Autre marque"||/^Autre|^Je ne sais/.test(m.value)||y.value==="Je ne sais pas";
    const vname=[b.value,m.value].filter(v=>v&&!/^Autre/.test(v)).join(' ')||"véhicule";
    const vyear=/^Je ne sais/.test(y.value)?'':y.value;
    const veh=[vname,vyear].filter(Boolean).join(' ');
    const pct=92+(m.value.length%7);
    const tag=soft?`<span class="reco__tag reco__tag--soft">🔎 Recommandation indicative</span>`
                  :`<span class="reco__tag">✅ Compatible avec votre véhicule</span>`;
    const compat=soft?`<div class="reco__stars">★★★★☆ <span>À confirmer avec une photo</span></div>`
                     :`<div class="reco__stars">★★★★★ <span>Compatibilité ${pct}%</span></div><div class="reco__compat"><i style="width:${pct}%"></i></div>`;
    box.innerHTML=`<div class="reco">
      ${tag}
      <h3>${name}</h3>
      <div class="reco__veh">${veh||"votre véhicule"}</div>
      ${compat}
      <ul class="reco__feats"><li>CarPlay sans fil</li><li>Android Auto</li><li>Bluetooth</li><li>Caméra de recul</li><li>Commandes au volant</li></ul>
      <div class="reco__price">Écran ${size}″ · Prix <b>sur devis</b> · Installation dispo (20 $)</div>
      <div class="reco__btns">
        <button class="btn btn--primary" id="recoAdd">Ajouter à ma liste</button>
        <a class="btn btn--wa" id="recoOrder" target="_blank" rel="noopener">${soft?'Vérifier sur WhatsApp':'Commander sur WhatsApp'}</a>
      </div></div>`;
    VEH=vname;VEHY=vyear;persist();
    document.getElementById('recoAdd').onclick=()=>{const dv=document.getElementById('drawerVeh');if(dv)dv.value=vname;addToList(name,size+'″','');openDrawer();persist();};
    const softMsg=`Bonjour FouxyTek 👋 J'ai ${veh||"votre véhicule"} et je ne suis pas sûr du modèle exact. Pouvez-vous confirmer l'écran idéal (je peux envoyer une photo du tableau de bord) ?`;
    document.getElementById('recoOrder').href=soft?`https://wa.me/${WA}?text=${encodeURIComponent(softMsg)}`:waOrder(name);
    translateTree(box);
  }
}

/* ============ installation booking ============ */
function initBooking(){
  const btn=document.getElementById('bookBtn');if(!btn)return;
  btn.onclick=()=>{
    if(!needFields(['bkName','bkVeh','bkProd']))return;
    const name=(document.getElementById('bkName').value||'').trim();
    const post=(document.getElementById('bkPost')?document.getElementById('bkPost').value:'').trim();
    const full=[name,post].filter(Boolean).join(' ');
    const veh=(document.getElementById('bkVeh').value||'').trim()||"(véhicule)";
    const prod=(document.getElementById('bkProd').value||'').trim()||"(produit)";
    const date=document.getElementById('bkDate').value,phone=(document.getElementById('bkPhone').value||'').trim();
    let m=`Bonjour FouxyTek 👋%0AJe voudrais réserver une installation :%0A`;
    if(full)m+=`%0ANom : ${encodeURIComponent(full)}`;
    m+=`%0AVéhicule : ${encodeURIComponent(veh)}%0AProduit : ${encodeURIComponent(prod)}`;
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

/* ============ gallery lightbox ============ */
function initGallery(){
  const items=document.querySelectorAll('.gal__item');if(!items.length)return;
  const lb=document.createElement('div');lb.className='lightbox';lb.id='lightbox';
  lb.innerHTML=`<button class="lightbox__close" aria-label="Fermer">&times;</button><img alt="">`;
  document.body.appendChild(lb);
  const img=lb.querySelector('img');
  const close=()=>lb.classList.remove('is-open');
  items.forEach(it=>it.addEventListener('click',()=>{const i=it.querySelector('img');if(!i)return;img.src=i.src;img.alt=i.alt;lb.classList.add('is-open');}));
  lb.addEventListener('click',e=>{if(e.target!==img)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}

/* ============ UX polish: scroll header, back-to-top, lazy imgs ============ */
function initPolish(){
  const hdr=document.querySelector('.hdr');
  const top=document.createElement('button');
  top.className='totop';top.setAttribute('aria-label','Haut de page');
  top.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(top);
  top.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  const onScroll=()=>{const y=window.scrollY;if(hdr)hdr.classList.toggle('is-scrolled',y>8);top.classList.toggle('show',y>640);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  document.querySelectorAll('img:not(.hero__media img)').forEach(i=>{if(!i.getAttribute('loading'))i.setAttribute('loading','lazy');});
  const t100=document.getElementById('t100Order');if(t100)t100.addEventListener('click',e=>{e.preventDefault();window.open(waOrder('T100 CarPlay'),'_blank');});
}

/* ============ counters + reveal ============ */
function initFx(){
  document.querySelectorAll('.grid,.why-grid,.testi-grid,.gal,.steps3,.why-grid,.about__vals').forEach(g=>{
    [...g.children].forEach((c,i)=>{if(c.classList.contains('reveal'))c.style.transitionDelay=(i%3)*90+'ms';});
  });
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.1,rootMargin:"0px 0px -60px 0px"});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  function fmt(el){const t=parseFloat(el.dataset.count),dec=parseInt(el.dataset.decimals||0),suf=el.dataset.suffix||"";return(dec?t.toFixed(dec):t.toLocaleString('fr-FR'))+suf;}
  document.querySelectorAll('[data-count]').forEach(el=>{el.textContent=fmt(el);});
  function count(el){const t=parseFloat(el.dataset.count),dec=parseInt(el.dataset.decimals||0),suf=el.dataset.suffix||"",t0=performance.now();
    (function s(now){const p=Math.min((now-t0)/1400,1),e=1-Math.pow(1-p,3),v=t*e;
      el.textContent=(dec?v.toFixed(dec):Math.floor(v).toLocaleString('fr-FR'))+suf;
      if(p<1)requestAnimationFrame(s);else el.textContent=fmt(el);})(t0);}
  const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);cio.unobserve(e.target);}}),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
}

/* ============ home compatibility checker ============ */
function initHomeChecker(){
  const b=document.getElementById('ckBrand');if(!b)return;
  const m=document.getElementById('ckModel'),y=document.getElementById('ckYear'),btn=document.getElementById('ckBtn'),res=document.getElementById('ckResult');
  Object.keys(VEHICLES).forEach(x=>b.add(new Option(x,x)));
  const reset=()=>{res.innerHTML='';res.classList.remove('show');};
  b.onchange=()=>{m.innerHTML='<option value="">Modèle…</option>';y.innerHTML='<option value="">Année…</option>';y.disabled=true;reset();
    if(b.value){Object.keys(VEHICLES[b.value]).forEach(x=>m.add(new Option(x,x)));m.disabled=false;}else m.disabled=true;};
  m.onchange=()=>{y.innerHTML='<option value="">Année…</option>';reset();
    if(m.value){for(let yr=2025;yr>=2004;yr--)y.add(new Option(yr,yr));y.add(new Option('Je ne sais pas','Je ne sais pas'));y.disabled=false;}else y.disabled=true;};
  y.onchange=reset;
  btn.onclick=()=>{
    if(!(b.value&&m.value&&y.value)){res.innerHTML='<div class="ckmsg">Sélectionnez la marque, le modèle et l\'année.</div>';res.classList.add('show');return;}
    const size=VEHICLES[b.value][m.value],name=SIZE_MODEL[size];
    const soft=b.value==='Autre marque'||/^Autre|^Je ne sais/.test(m.value)||y.value==='Je ne sais pas';
    const vname=[b.value,m.value].filter(v=>v&&!/^Autre/.test(v)).join(' ')||'véhicule';
    const vyear=/^Je ne sais/.test(y.value)?'':y.value;
    const veh=[vname,vyear].filter(Boolean).join(' ');
    VEH=vname;VEHY=vyear;persist();
    const params=`?b=${encodeURIComponent(b.value)}&m=${encodeURIComponent(m.value)}&y=${encodeURIComponent(y.value)}`;
    const softMsg=`Bonjour FouxyTek 👋 J'ai ${veh||"votre véhicule"} et je ne suis pas sûr du modèle exact. Pouvez-vous confirmer l'écran idéal ?`;
    const waHref=soft?`https://wa.me/${WA}?text=${encodeURIComponent(softMsg)}`:waOrder(name);
    res.innerHTML=`<div class="ckres ${soft?'ckres--soft':''}">
      <div class="ckres__tag">${soft?'🔎 Recommandation indicative':'✅ Compatible'}</div>
      <div class="ckres__main"><b>${name}</b><span>pour ${veh||'votre véhicule'}${soft?' · à confirmer avec une photo':''}</span></div>
      <div class="ckres__btns">
        <button class="btn btn--primary btn--sm" id="ckAdd">Ajouter à ma liste</button>
        <a class="btn btn--ghost btn--sm" href="configurateur.html${params}">Voir le détail →</a>
        <a class="btn btn--wa btn--sm" target="_blank" rel="noopener" href="${waHref}">${soft?'Vérifier':'Commander'} sur WhatsApp</a>
      </div></div>`;
    res.classList.add('show');
    translateTree(res);
    document.getElementById('ckAdd').onclick=()=>{const dv=document.getElementById('drawerVeh');if(dv)dv.value=vname;addToList(name,size+'″','');openDrawer();persist();};
  };
}

/* ============ contact form ============ */
function needFields(ids){
  let ok=true,first=null;
  ids.forEach(id=>{const el=document.getElementById(id);if(!el)return;
    if(!(el.value||'').trim()){ok=false;el.classList.add('input-err');if(!first)first=el;
      el.addEventListener('input',()=>el.classList.remove('input-err'),{once:true});}
  });
  if(first)first.focus();
  return ok;
}
function initContact(){
  const btn=document.getElementById('ctBtn');if(!btn)return;
  btn.onclick=()=>{
    if(!needFields(['ctName','ctVeh']))return;
    const n=[document.getElementById('ctName').value,(document.getElementById('ctPost')||{}).value].map(s=>(s||'').trim()).filter(Boolean).join(' ');
    const v=(document.getElementById('ctVeh').value||'').trim();
    const msg=(document.getElementById('ctMsg').value||'').trim();
    let t="Bonjour FouxyTek 👋";
    if(n)t+=`%0AJe suis ${encodeURIComponent(n)}.`;
    if(v)t+=`%0AVéhicule : ${encodeURIComponent(v)}`;
    if(msg)t+=`%0A%0A${encodeURIComponent(msg)}`;
    if(!v&&!msg)t+=`%0AJe voudrais des informations sur vos écrans CarPlay.`;
    window.open(`https://wa.me/${WA}?text=${t}`,'_blank');
  };
}

/* ============ FAQ accordion ============ */
function initFAQ(){
  const faq=document.getElementById('faq');if(!faq)return;
  faq.addEventListener('click',e=>{
    const q=e.target.closest('.faq__q');if(!q)return;
    const item=q.parentElement,open=item.classList.contains('is-open');
    faq.querySelectorAll('.faq__item.is-open').forEach(i=>{i.classList.remove('is-open');i.querySelector('.faq__a').style.maxHeight=null;});
    if(!open){item.classList.add('is-open');const a=item.querySelector('.faq__a');a.style.maxHeight=a.scrollHeight+'px';}
  });
}

/* ============ boot ============ */
document.addEventListener('DOMContentLoaded',()=>{
  chrome();
  document.getElementById('abList').onclick=openDrawer;
  document.getElementById('closeDrawer').onclick=closeDrawer;
  document.getElementById('scrim').onclick=closeDrawer;
  const dv=document.getElementById('drawerVeh');if(dv){dv.value=VEH;dv.addEventListener('input',()=>{VEH=dv.value;VEHY='';persist();buildQuote();});}
  syncList();
  initProducts();initConfig();initHomeChecker();initBooking();initContact();initChat();initFAQ();initGallery();initPolish();initFx();
  const sw=document.getElementById('langsw');
  if(sw)sw.addEventListener('click',e=>{const btn=e.target.closest('button[data-l]');if(btn)applyLang(btn.dataset.l);});
  applyLang(LANG);
});
