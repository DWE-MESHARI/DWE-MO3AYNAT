/* ================= ICONS ================= */
const ICON = {
  home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>`,
  bldg:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>`,
  pin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  users:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  chart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  chevL:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  chevR:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  lock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  file:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  logout:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  printer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  warn:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  mail:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  eye:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M6.61 6.61C3.35 8.53 1 12 1 12s4 8 11 8a9.3 9.3 0 0 0 5.39-1.61"/><path d="M1 1l22 22"/></svg>`,
  whatsapp:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.8.47 3.55 1.36 5.1L2 22l5.03-1.32a9.98 9.98 0 0 0 4.99 1.34h.01c5.52 0 10.01-4.5 10.01-10.02C22.04 6.5 17.55 2 12.02 2Zm0 18.3h-.01a8.26 8.26 0 0 1-4.22-1.16l-.3-.18-3.14.82.84-3.06-.2-.32a8.28 8.28 0 0 1-1.27-4.4c0-4.58 3.73-8.3 8.31-8.3 2.22 0 4.3.87 5.87 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.73 8.3-8.31 8.3Zm4.55-6.22c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"/></svg>`,
};

/* ================= CONFIG ================= */
// Fallback employee accounts used only when Firebase isn't connected yet
// (demo/testing mode). Add/remove entries here to control who can log in
// as an employee before Firebase is wired up. Once FIREBASE_CONFIG below is
// filled in, real Firebase Authentication accounts take over automatically
// and this list is no longer used.
const DEMO_EMPLOYEES = [
  { email: "employee@darwaemaar.com", password: "Dar2026*" },
];
const LOGO_SRC = "assets/logo.png";

function hashStr(s){
  let h=0; for(let i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i))|0; }
  return Math.abs(h);
}
function projectTagStyle(seed){
  const hue = 14 + (seed % 46);
  return `background:hsl(${hue},72%,93%); color:hsl(${hue},60%,30%);`;
}
function projectStyle(seed){
  // distinctive orange-family gradient per project (deep red-orange .. golden amber), no navy/blue
  const hue = 14 + (seed % 46);        // 14 (rust-red) .. 60 (golden amber)
  const satTop = 82 + (seed % 3)*4;
  const c1 = `hsl(${hue},${satTop}%,56%)`;
  const c2 = `hsl(${(hue+ (seed%2?6:-6)+360)%360},${satTop-8}%,36%)`;
  const ink = `hsl(${hue},70%,30%)`;
  return { bg:`linear-gradient(135deg, ${c1}, ${c2})`, ink };
}
let svgCallCounter = 0;
function buildingSVG(seed, size=54){
  svgCallCounter++;
  const uid2 = 'bsvg'+svgCallCounter;
  const h1 = 26 + (seed%6)*6;       // 26-56
  const h2 = 16 + ((seed>>3)%6)*5;  // 16-41
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" style="filter:drop-shadow(0 8px 10px rgba(0,0,0,.25))">
    <defs>
      <linearGradient id="${uid2}-l" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".98"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity=".72"/>
      </linearGradient>
      <linearGradient id="${uid2}-m" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".62"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity=".28"/>
      </linearGradient>
      <linearGradient id="${uid2}-t" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="1"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity=".85"/>
      </linearGradient>
    </defs>
    <ellipse cx="29" cy="56" rx="21" ry="4.5" fill="rgba(0,0,0,.22)"/>
    <path d="M14 54 L14 ${54-h1} L28 ${46-h1} L28 54 Z" fill="url(#${uid2}-l)"/>
    <path d="M28 54 L28 ${46-h1} L44 ${54-h1-h2+22} L44 54 Z" fill="url(#${uid2}-m)"/>
    <path d="M14 ${54-h1} L28 ${46-h1} L44 ${54-h1-h2+22-8} L30 ${38-h1}Z" fill="url(#${uid2}-t)"/>
    ${Array.from({length:3}).map((_,r)=>`<rect x="17" y="${54-h1+8+r*9}" width="4" height="5" rx="1" fill="rgba(255,255,255,.9)"/>`).join('')}
    ${Array.from({length:3}).map((_,r)=>`<rect x="33" y="${54-h1-h2+30+r*8}" width="4" height="5" rx="1" fill="rgba(20,29,39,.32)"/>`).join('')}
  </svg>`;
}

/* ================= STATE / STORE ================= */
const State = {
  route: "guest",
  projects: [],
  viewings: [],
  ready: false,
  db: null,
  selectedProjectId: null,
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(),
  selectedDay: null,
  homeCalYear: new Date().getFullYear(),
  homeCalMonth: new Date().getMonth(),
  employeeAuthed: sessionStorage.getItem('dar_employee_ok') === '1',
  authMode: 'passcode', // 'passcode' (fallback/demo) or 'firebase' (real employee accounts)
  adminTab: 'projects',
  useLocal: false,
  storageMode: 'local',
};

const LS_KEY_P = 'dar_projects_v1';
const LS_KEY_V = 'dar_viewings_v1';

function uid(){ return 'id-' + Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

function localLoad(){
  try{ State.projects = JSON.parse(localStorage.getItem(LS_KEY_P) || '[]'); }catch(e){ State.projects = []; }
  try{ State.viewings = JSON.parse(localStorage.getItem(LS_KEY_V) || '[]'); }catch(e){ State.viewings = []; }
}
function localSaveP(){ localStorage.setItem(LS_KEY_P, JSON.stringify(State.projects)); }
function localSaveV(){ localStorage.setItem(LS_KEY_V, JSON.stringify(State.viewings)); }

/* ================= FIREBASE (optional external backend) =================
   To connect your own Firebase project (recommended once you host this file
   on your own domain — Firebase cannot be reached from inside Claude's
   in-chat preview due to its security policy, so this only activates on
   your own hosting):
   1) console.firebase.google.com → create a project → Build → Firestore
      Database → Create database (test mode is fine to start).
   2) Build → Authentication → Get started → enable the "Email/Password"
      sign-in method → Users tab → Add user for each Dar wa Emaar employee
      (their email + a password you set). Guests never get an account —
      only people you add here can log in as employees.
   3) Project settings (gear icon) → General → "Your apps" → Web app (</>) →
      copy the firebaseConfig object it gives you.
   4) Paste it below instead of "null", e.g.:
      const FIREBASE_CONFIG = { apiKey:"AIza...", authDomain:"x.firebaseapp.com",
        projectId:"x", storageBucket:"x.appspot.com", messagingSenderId:"...", appId:"..." };
   5) Save and re-host the file. The app auto-detects it and switches to
      real employee login (email/password) automatically — the temporary
      passcode stops being used. Inside Claude chat it will keep using the
      built-in storage and the passcode fallback automatically, with no errors. */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBXHeMx9YM3bmsKirOiJmBZQh3gpvgNUlk",
  authDomain: "dwe-mo3aynat.firebaseapp.com",
  projectId: "dwe-mo3aynat",
  storageBucket: "dwe-mo3aynat.firebasestorage.app",
  messagingSenderId: "387646147624",
  appId: "1:387646147624:web:faa3cfc847234afa7cf91d",
  measurementId: "G-YPH30318XE"
};
const FIREBASE_SDK_VERSION = '10.12.5';
let firebaseSDKPromise = null;
function loadFirebaseSDK(){
  if(firebaseSDKPromise) return firebaseSDKPromise;
  firebaseSDKPromise = new Promise((resolve, reject)=>{
    const s1 = document.createElement('script');
    s1.src = `https://cdn.jsdelivr.net/npm/firebase@${FIREBASE_SDK_VERSION}/firebase-app-compat.js`;
    s1.onload = ()=>{
      const s2 = document.createElement('script');
      s2.src = `https://cdn.jsdelivr.net/npm/firebase@${FIREBASE_SDK_VERSION}/firebase-firestore-compat.js`;
      s2.onload = ()=>{
        const s3 = document.createElement('script');
        s3.src = `https://cdn.jsdelivr.net/npm/firebase@${FIREBASE_SDK_VERSION}/firebase-auth-compat.js`;
        s3.onload = ()=> resolve();
        s3.onerror = ()=> reject(new Error('auth-sdk-load-failed'));
        document.head.appendChild(s3);
      };
      s2.onerror = ()=> reject(new Error('firestore-sdk-load-failed'));
      document.head.appendChild(s2);
    };
    s1.onerror = ()=> reject(new Error('app-sdk-load-failed'));
    document.head.appendChild(s1);
  });
  return firebaseSDKPromise;
}
async function tryInitFirebase(){
  if(!FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return false;
  try{
    await Promise.race([
      loadFirebaseSDK(),
      new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')), 7000)),
    ]);
    if(typeof firebase === 'undefined' || !firebase.firestore) return false;
    if(!firebase.apps || !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    State.db = firebase.firestore();
    State.useLocal = false;
    State.storageMode = 'firebase';
    if(firebase.auth){
      State.authMode = 'firebase';
      firebase.auth().onAuthStateChanged(user=>{
        State.employeeAuthed = !!user;
        if(user && (State.route==='guest' || State.route==='login')){ goto('home'); return; }
        if(!user && PROTECTED_ROUTES.includes(State.route)){ goto('guest'); return; }
        render();
      });
    }
    return true;
  }catch(e){
    return false;
  }
}
function attachSnapshots(){
  State.db.collection('projects').onSnapshot(snap=>{
    State.projects = snap.docs.map(d=>({id:d.id, ...d.data()}));
    State.ready = true;
    maybeSeedSarayaAlbaher();
    render();
  }, ()=>{ fallbackLocal(); });
  State.db.collection('viewings').onSnapshot(snap=>{
    State.viewings = snap.docs.map(d=>({id:d.id, ...d.data()}));
    render();
  }, ()=>{});
}

async function initStore(){
  const firebaseOk = await tryInitFirebase();
  if(firebaseOk){ attachSnapshots(); return; }
  try{
    if(window.claude && window.claude.use){
      const db = await window.claude.use('db');
      if(db){
        State.db = db;
        State.useLocal = false;
        State.storageMode = 'claude-db';
        attachSnapshots();
        return;
      }
    }
  }catch(e){ /* fall through */ }
  fallbackLocal();
}
function fallbackLocal(){
  State.useLocal = true;
  State.db = null;
  State.storageMode = 'local';
  localLoad();
  State.ready = true;
  seedIfEmpty();
  maybeSeedSarayaAlbaher();
  render();
}
function seedIfEmpty(){
  if(State.useLocal && State.projects.length===0){
    // no auto demo data injected — keep empty, admin adds real projects
  }
}

let seedChecked = false;
let projectPeopleFilter = 'all';
let projectPeopleBatch = '';
function setProjectPeopleFilter(f){ projectPeopleFilter=f; render(); }
function openRescheduleForm(id){
  const v = State.viewings.find(x=>x.id===id);
  if(!v) return;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
      <div class="modal">
        <div class="modal-head"><h3>إعادة جدولة موعد</h3><button class="modal-close" onclick="closeModal()">${ICON.x}</button></div>
        <p style="font-size:12.5px; color:var(--ink-500); margin-bottom:14px; line-height:1.8;">إعادة جدولة معاينة <b>${escapeHtml(v.name)}</b> — كان موعدها السابق ${fmtDateHuman(v.date)} الساعة ${escapeHtml(v.time||'')}.</p>
        <form id="reform">
          <div class="field field-row">
            <div><label>التاريخ الجديد</label><input type="date" required name="date" value="${v.date}"></div>
            <div><label>الوقت الجديد</label><input type="time" required name="time" value="${v.time||'10:00'}"></div>
          </div>
          <div class="field"><label>سبب عدم الحضور / ملاحظة</label><textarea name="reason" rows="3" placeholder="اختياري">${escapeHtml(v.notes||'')}</textarea></div>
          <div class="modal-actions">
            <button type="button" class="btn btn-ghost" onclick="closeModal()">إلغاء</button>
            <button type="submit" class="btn btn-primary">${ICON.check}<span>حفظ وإعادة الجدولة</span></button>
          </div>
        </form>
      </div>
    </div>`;
  document.getElementById('reform').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const history = Array.isArray(v.rescheduleHistory) ? [...v.rescheduleHistory] : [];
    history.push({ fromDate: v.date, fromTime: v.time||'', reason: f.get('reason').trim(), at: new Date().toISOString() });
    await updateViewing(id, { date: f.get('date'), time: f.get('time'), notes: f.get('reason').trim(), attended: null, wasRescheduled: true, rescheduleHistory: history });
    closeModal();
    toast('تمت إعادة جدولة الموعد');
    render();
  };
}
async function maybeSeedSarayaAlbaher(){
  if(seedChecked) return;
  seedChecked = true;
  const exists = State.projects.some(p=> (p.name||'').trim() === SEED_PROJECT_NAME);
  if(exists) return;
  try{
    let projectId;
    const projData = { name: SEED_PROJECT_NAME, city:'الدمام', units: 0, description:'مشروع سرايا البحر السكني' };
    if(State.db){
      const ref = await State.db.collection('projects').add({...projData, createdAt:new Date().toISOString()});
      projectId = ref.id;
    } else {
      projectId = uid();
      State.projects.push({id:projectId, ...projData, createdAt:new Date().toISOString()});
      localSaveP();
    }
    const rows = SEED_APPOINTMENTS.map(r=>({...r, projectId}));
    await bulkAddViewings(rows);
    toast('تمت إضافة بيانات معاينات سرايا البحر');
  }catch(e){ /* ignore seeding errors */ }
}

async function addProject(data){
  if(State.db){ const ref = await State.db.collection('projects').add({...data, createdAt: new Date().toISOString()}); return ref.id; }
  else{ const id=uid(); State.projects.push({id, ...data, createdAt:new Date().toISOString()}); localSaveP(); render(); return id; }
}
async function updateProject(id, data){
  if(State.db){ await State.db.doc('projects/'+id).update(data); }
  else{ const p=State.projects.find(x=>x.id===id); if(p) Object.assign(p,data); localSaveP(); render(); }
}
async function deleteProject(id){
  if(State.db){
    await State.db.doc('projects/'+id).delete();
    const vs = State.viewings.filter(v=>v.projectId===id);
    for(const v of vs){ await State.db.doc('viewings/'+v.id).delete(); }
  } else {
    State.projects = State.projects.filter(p=>p.id!==id);
    State.viewings = State.viewings.filter(v=>v.projectId!==id);
    localSaveP(); localSaveV(); render();
  }
}
async function addViewing(data){
  if(State.db){ await State.db.collection('viewings').add({...data, createdAt:new Date().toISOString()}); }
  else{ State.viewings.push({id:uid(), ...data, createdAt:new Date().toISOString()}); localSaveV(); render(); }
}
async function updateViewing(id, data){
  if(State.db){ await State.db.doc('viewings/'+id).update(data); }
  else{ const v=State.viewings.find(x=>x.id===id); if(v) Object.assign(v,data); localSaveV(); render(); }
}
async function deleteViewing(id){
  if(State.db){ await State.db.doc('viewings/'+id).delete(); }
  else{ State.viewings = State.viewings.filter(v=>v.id!==id); localSaveV(); render(); }
}
async function bulkAddViewings(rows){
  if(State.db){
    for(const r of rows){ await State.db.collection('viewings').add({...r, createdAt:new Date().toISOString()}); }
  } else {
    rows.forEach(r=> State.viewings.push({id:uid(), ...r, createdAt:new Date().toISOString()}));
    localSaveV(); render();
  }
}

/* ================= HELPERS ================= */
const WEEKDAYS = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const WEEKDAYS_LETTER = ['ح','ن','ث','ر','خ','ج','س'];
const MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
function todayISO(){ const d=new Date(); return d.toISOString().slice(0,10); }
function fmtDateHuman(iso){
  if(!iso) return '';
  const [y,m,d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m-1]} ${y}`;
}
function escapeHtml(s){ return (s==null?'':String(s)).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function iconSized(svg, size){ return svg.replace('<svg ', `<svg style="width:${size}px;height:${size}px;flex-shrink:0;" `); }
function normalizePhoneForWhatsapp(phone){
  if(!phone) return '';
  let p = String(phone).replace(/[^\d+]/g,'');
  if(p.startsWith('+')) p = p.slice(1);
  else if(p.startsWith('00')) p = p.slice(2);
  else if(p.startsWith('0')) p = '966' + p.slice(1);
  return p;
}
function whatsappLink(v){
  const phone = normalizePhoneForWhatsapp(v.phone);
  if(!phone) return '';
  const p = projectById(v.projectId);
  const msg = `مرحبًا ${v.name}، نود تذكيركم بموعد معاينتكم${p? ' في مشروع '+p.name : ''} بتاريخ ${fmtDateHuman(v.date)} الساعة ${v.time||''}. نتشرف بحضوركم - دار وإعمار`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
function toast(msg, isErr){
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = `${ICON.check}<span>${escapeHtml(msg)}</span>`;
  if(isErr) el.style.background = 'var(--orange-900)';
  root.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('show'));
  const duration = isErr? Math.min(9000, 2600 + msg.length*35) : 2600;
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(),300); }, duration);
}
function projectById(id){ return State.projects.find(p=>p.id===id); }
function viewingsForProject(id){ return State.viewings.filter(v=>v.projectId===id); }
function viewingsOnDate(iso, projectId){
  return State.viewings.filter(v=> v.date===iso && (!projectId || v.projectId===projectId));
}
function heatBg(count, max){
  if(!count) return '';
  const ratio = Math.min(1, count/Math.max(1,max));
  // green (few) -> yellow/orange (medium) -> red (many) — exception to the orange/white rule, by request
  const hue = 128 - ratio*128;
  const sat = 68 + ratio*8;
  const light = 90 - ratio*42;
  return `background:hsl(${hue.toFixed(0)},${sat.toFixed(0)}%,${light.toFixed(0)}%);`;
}
function heatTextColor(count, max){
  if(!count) return '';
  const ratio = Math.min(1, count/Math.max(1,max));
  return ratio > 0.42 ? 'color:#fff;' : '';
}
function heatBadgeStyle(count, max){
  if(!count) return '';
  const ratio = Math.min(1, count/Math.max(1,max));
  return ratio > 0.42 ? 'color:#fff;background:rgba(0,0,0,.24);' : 'color:var(--ink-900);background:rgba(255,255,255,.7);';
}
const PERSON_SHADES = [
  {bg:'hsl(26,80%,90%)', fg:'hsl(26,70%,30%)'},
  {bg:'hsl(18,78%,90%)', fg:'hsl(18,68%,32%)'},
  {bg:'hsl(34,75%,88%)', fg:'hsl(32,65%,28%)'},
  {bg:'hsl(12,72%,90%)', fg:'hsl(12,62%,34%)'},
  {bg:'hsl(30,60%,86%)', fg:'hsl(28,55%,26%)'},
];
function personColorBg(str){ return PERSON_SHADES[hashStr(str||'x')%PERSON_SHADES.length].bg; }
function personColorFg(str){ return PERSON_SHADES[hashStr(str||'x')%PERSON_SHADES.length].fg; }
function attendanceStatus(v){
  const isFuture = v.date && v.date > todayISO();
  if(isFuture) return {key:'upcoming', cls:'scheduled', label:'قادم'};
  if(v.attended === true) return {key:'attended', cls:'done', label:'حضر'};
  if(v.attended === false) return {key:'absent', cls:'cancelled', label:'لم يحضر'};
  return {key:'pending', cls:'scheduled', label:'لم تُحدَّد'};
}
function appointmentCardHTML(v, opts){
  opts = opts || {};
  const p = projectById(v.projectId);
  const initial = (v.name||'?').trim().charAt(0) || '?';
  const clickable = opts.clickable !== false;
  const onClickJS = opts.closeFirst ? `closeModal(); openAppointmentDetail('${v.id}')` : (opts.onClick || `openAppointmentDetail('${v.id}')`);
  let statusBadge = '';
  if(opts.showStatus){
    const st = attendanceStatus(v);
    statusBadge = `<span class="status-badge ${st.cls}">${st.label}</span>`;
  }
  return `<div class="appt-row ${clickable?'clickable':''}" ${clickable?`onclick="${onClickJS}"`:''}>
    <div class="ap-avatar" style="background:${personColorBg(v.name)};color:${personColorFg(v.name)};">${escapeHtml(initial)}</div>
    <div class="ap-info">
      <div class="ap-name">${escapeHtml(v.name)}</div>
      <div class="ap-meta">
        ${opts.showProject && p? `<span class="tag proj" style="${projectTagStyle(hashStr(p.id||p.name))}">${escapeHtml(p.name)}</span>`:''}
        ${v.unit? `<span class="tag unit">وحدة ${escapeHtml(v.unit)}</span>`:''}
        ${v.batch? `<span class="tag batch">${escapeHtml(v.batch)}</span>`:''}
        ${v.wasRescheduled? `<span class="tag reschedule">${ICON.calendar}معاد جدولتها</span>`:''}
      </div>
      ${v.phone? `<div class="ap-phone">${ICON.phone}<span>${escapeHtml(v.phone)}</span>${whatsappLink(v)? `<a href="${whatsappLink(v)}" target="_blank" rel="noopener" class="wa-btn" onclick="event.stopPropagation()" title="إرسال تذكير واتساب">${ICON.whatsapp}</a>`:''}</div>`:''}
      ${opts.showNote && v.notes? `<div class="reason-note">${escapeHtml(v.notes)}</div>`:''}
    </div>
    <div class="ap-side">
      <span class="tag time">${escapeHtml(v.time||'')}</span>
      ${statusBadge}
      ${opts.actionsHTML||''}
    </div>
  </div>`;
}
function buildCalendarCells(year, month, countFn){
  const firstDay = new Date(year,month,1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year,month+1,0).getDate();
  const cells = [];
  for(let i=0;i<startOffset;i++) cells.push(null);
  for(let d=1; d<=daysInMonth; d++) cells.push(d);
  const isos = cells.filter(d=>d!==null).map(d=>`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
  const max = Math.max(1, ...isos.map(iso=>countFn(iso)));
  return { cells, max, year, month };
}
function animateCount(el, to){
  let cur = 0; const dur = 700; const start = performance.now();
  function step(t){
    const p = Math.min(1,(t-start)/dur);
    const eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(eased*to);
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* 3D tilt */
function attachTilt(el){
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width - .5;
    const py = (e.clientY - r.top)/r.height - .5;
    el.style.transform = `perspective(700px) rotateX(${(-py*8).toFixed(2)}deg) rotateY(${(px*10).toFixed(2)}deg) translateY(-4px)`;
  });
  el.addEventListener('mouseleave', ()=>{ el.style.transform = ''; });
}

/* ================= ROUTER ================= */
window.addEventListener('hashchange', handleHash);
const PROTECTED_ROUTES = ['home','projects','project','admin'];
function handleHash(){
  const h = location.hash.replace('#/','').replace('#','');
  let route, projectId=null;
  if(h === 'admin') route='admin';
  else if(h.startsWith('project-')){ route='project'; projectId = h.replace('project-',''); }
  else if(h === 'projects') route='projects';
  else if(h === 'login') route='login';
  else if(h === 'guest') route='guest';
  else if(h === '' || h === 'home') route='home';
  else route='home';

  if(PROTECTED_ROUTES.includes(route) && !State.employeeAuthed){
    State.route = 'guest';
    render();
    return;
  }
  if((route==='guest' || route==='login') && State.employeeAuthed){
    State.route = 'home';
    render();
    return;
  }
  State.route = route;
  if(route==='project'){ State.selectedProjectId = projectId; State.selectedDay=null; projectPeopleFilter='all'; projectPeopleBatch=''; }
  render();
}
function goto(route){ location.hash = route; }

/* ================= RENDER: SHELL ================= */
function navItems(active){
  return `
    <button class="nav-item ${active==='home'?'active':''}" onclick="goto('home')">${ICON.home}<span>الرئيسية · المتابعة</span></button>
    <button class="nav-item ${active==='projects'||active==='project'?'active':''}" onclick="goto('projects')">${ICON.bldg}<span>المشاريع</span></button>
    <button class="nav-item ${active==='admin'?'active':''}" onclick="goto('admin')">${ICON.lock}<span>لوحة التحكم</span></button>
  `;
}
function shellHTML(active, contentHTML){
  return `
  <div class="sidebar">
    <div class="brand">
      <div class="brand-mark"><img src="${LOGO_SRC}" alt="دار وإعمار"></div>
      <div class="brand-text"><b>دار وإعمار</b><span>نظام إدارة المعاينات</span></div>
    </div>
    <div class="nav">${navItems(active)}</div>
    <div class="sidebar-foot">
      <p>دار وإعمار للتطوير العقاري<br>لوحة متابعة المعاينات الداخلية</p>
      <button class="btn btn-ghost btn-sm btn-block" style="margin-top:10px;" onclick="employeeLogout()">${ICON.logout}<span>تسجيل الخروج</span></button>
    </div>
  </div>
  <div class="mobile-topnav">
    <div class="brand"><div class="brand-mark" style="width:32px;height:32px;"><img src="${LOGO_SRC}" alt="دار وإعمار"></div></div>
    <div class="nav">${navItems(active)}</div>
  </div>
  <div class="main"><div class="view">${contentHTML}</div></div>
  `;
}

/* ================= RENDER: HOME ================= */
function renderHome(){
  const totalProjects = State.projects.length;
  const today = todayISO();
  const todays = State.viewings.filter(v=>v.date===today);
  const now = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate()-now.getDay());
  const weekDates = Array.from({length:7}).map((_,i)=>{ const d=new Date(weekStart); d.setDate(weekStart.getDate()+i); return d.toISOString().slice(0,10); });
  const weekCount = State.viewings.filter(v=>weekDates.includes(v.date)).length;
  const totalClients = new Set(State.viewings.map(v=>v.name+v.phone)).size;

  const maxDayCount = Math.max(1, ...weekDates.map(d=>State.viewings.filter(v=>v.date===d).length));

  const projectBars = [...State.projects].map(p=>({p, c: viewingsForProject(p.id).length}))
    .sort((a,b)=>b.c-a.c).slice(0,6);
  const maxProj = Math.max(1, ...projectBars.map(x=>x.c));

  const upcoming = [...State.viewings]
    .filter(v=> v.date >= today)
    .sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time))
    .slice(0,6);

  const html = `
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-eyebrow">لوحة المتابعة</div>
        <h2>نظرة شاملة على معاينات<br>جميع مشاريع دار وإعمار</h2>
        <p>تحليلات لحظية لمواعيد المعاينة، وأداء كل مشروع، والحركة الأسبوعية للعملاء.</p>
        <div class="hero-stat"><b id="hs-today">0</b><span>معاينة اليوم</span></div>
      </div>
      <div class="skyline">
        ${Array.from({length:9}).map((_,i)=>{
          const h = [40,65,50,80,55,95,45,70,58][i];
          const w = 26;
          const delay = (i*0.06).toFixed(2);
          return `<div class="bld" style="height:${h}%;width:${w}px;animation-delay:${delay}s">${i%2===0?'<i style="animation-delay:'+(i*0.3)+'s"></i>':''}</div>`;
        }).join('')}
      </div>
    </div>

    <div class="panel" style="margin-bottom:26px;">
      <div class="cal-nav">
        <h3>تقويم المعاينات — ${MONTHS[State.homeCalMonth]} ${State.homeCalYear}</h3>
        <div class="cal-nav-btns">
          <button class="icon-btn" onclick="shiftHomeMonth(-1)">${ICON.chevR}</button>
          <button class="btn btn-ghost btn-sm" onclick="jumpHomeToday()">اليوم</button>
          <button class="icon-btn" onclick="shiftHomeMonth(1)">${ICON.chevL}</button>
        </div>
      </div>
      <div class="cal-shell">
        <div class="weekdays">${WEEKDAYS_LETTER.map(w=>`<div>${w}</div>`).join('')}</div>
        ${(()=>{
          const {cells, max} = buildCalendarCells(State.homeCalYear, State.homeCalMonth, iso=>viewingsOnDate(iso).length);
          const todayStr = todayISO();
          return `<div class="days">${cells.map(d=>{
            if(d===null) return `<div class="day-cell pad"></div>`;
            const iso = `${State.homeCalYear}-${String(State.homeCalMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const count = viewingsOnDate(iso).length;
            const isToday = iso===todayStr;
            return `<div class="day-cell ${isToday?'today':''}" style="${heatBg(count,max)}${heatTextColor(count,max)}cursor:pointer" onclick="openDayLookup('${iso}')">
              ${count>0?`<span class="cnt2" style="${heatBadgeStyle(count,max)}">${count}</span>`:''}
              <span>${d}</span>
            </div>`;
          }).join('')}</div>`;
        })()}
        <div class="cal-legend"><span>أقل</span><span class="sw" style="background:hsl(109,69%,84%)"></span><span class="sw" style="background:hsl(77,71%,73%)"></span><span class="sw" style="background:hsl(45,73%,63%)"></span><span class="sw" style="background:hsl(13,75%,52%)"></span><span>أكثر</span></div>
      </div>
    </div>

    <div class="grid-stats">
      <div class="stat-card"><div class="stat-icon" style="background:var(--orange-100); color:var(--orange-700);">${ICON.bldg}</div><div class="num" id="cnt-proj">0</div><div class="lbl">إجمالي المشاريع</div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--orange-500); color:#fff;">${ICON.calendar}</div><div class="num" id="cnt-today">0</div><div class="lbl">معاينات اليوم</div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--ink-100); color:var(--ink-700);">${ICON.clock}</div><div class="num" id="cnt-week">0</div><div class="lbl">معاينات هذا الأسبوع</div></div>
      <div class="stat-card"><div class="stat-icon" style="background:var(--ink-100); color:var(--ink-700);">${ICON.users}</div><div class="num" id="cnt-clients">0</div><div class="lbl">إجمالي العملاء</div></div>
    </div>

    <div class="two-col">
      <div>
        <div class="panel">
          <div class="panel-head"><h3>الحركة الأسبوعية</h3><span>عدد المعاينات لكل يوم</span></div>
          <div class="bars">
            ${weekDates.map(d=>{
              const c = State.viewings.filter(v=>v.date===d).length;
              const pct = Math.max(4, (c/maxDayCount)*100);
              const dow = new Date(d+'T00:00:00').getDay();
              return `<div class="bar-col"><div class="bar" data-h="${pct}"></div><div class="bar-lbl">${WEEKDAYS[dow].slice(0,3)}</div></div>`;
            }).join('')}
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><h3>أداء المشاريع</h3><span>عدد المعاينات لكل مشروع</span></div>
          ${projectBars.length? projectBars.map(({p,c},i)=>`
            <div class="proj-row">
              <div class="dot" style="background:${projectStyle(hashStr(p.id||p.name)).ink}"></div>
              <div class="name">${escapeHtml(p.name)}</div>
              <div class="track"><div class="fill" data-w="${(c/maxProj)*100}"></div></div>
              <div class="cnt">${c}</div>
            </div>`).join('') : `<div class="empty-note">لا توجد مشاريع بعد</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h3>المعاينات القادمة</h3><span>${upcoming.length}</span></div>
        ${upcoming.length? upcoming.map(v=>{
          const p = projectById(v.projectId);
          return `<div class="up-item" style="cursor:pointer" onclick="openAppointmentDetail('${v.id}')">
            <div class="up-avatar">${escapeHtml((v.name||'?').trim().charAt(0))}</div>
            <div class="up-info"><div class="n">${escapeHtml(v.name)}</div><div class="p">${escapeHtml(p?p.name:'')} · ${fmtDateHuman(v.date)}</div></div>
            <div class="up-time">${escapeHtml(v.time||'')}</div>
          </div>`;
        }).join('') : `<div class="empty-note">لا توجد مواعيد قادمة</div>`}
      </div>
    </div>
  `;
  document.getElementById('app').innerHTML = shellHTML('home', html);
  animateCount(document.getElementById('hs-today'), todays.length);
  animateCount(document.getElementById('cnt-proj'), totalProjects);
  animateCount(document.getElementById('cnt-today'), todays.length);
  animateCount(document.getElementById('cnt-week'), weekCount);
  animateCount(document.getElementById('cnt-clients'), totalClients);
  requestAnimationFrame(()=>{
    document.querySelectorAll('.bar').forEach(b=> b.style.height = b.dataset.h+'%');
    document.querySelectorAll('.fill').forEach(f=> f.style.width = f.dataset.w+'%');
  });
}

/* ================= RENDER: PROJECTS ================= */
let projSearchTerm = '';
function renderProjects(){
  const list = State.projects.filter(p => !projSearchTerm || p.name.includes(projSearchTerm) || (p.city||'').includes(projSearchTerm));
  const html = `
    <div class="topbar">
      <div><h1>المشاريع</h1><p>جميع مشاريع دار وإعمار الجاري تسويقها ومعاينتها</p></div>
    </div>
    <div class="projects-toolbar">
      <div class="search-box">${ICON.search.replace('<svg ', '<svg style="position:absolute;top:11px;right:12px;width:15px;height:15px;color:var(--ink-300);" ')}
        <input placeholder="ابحث عن مشروع أو مدينة…" style="padding-right:34px" value="${escapeHtml(projSearchTerm)}" oninput="projSearchTerm=this.value; renderProjects();">
      </div>
      <button class="btn btn-primary" onclick="openProjectForm()">${ICON.plus}<span>مشروع جديد</span></button>
    </div>
    ${list.length>1? `<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px;">
      ${list.map(p=>{ const s=hashStr(p.id||p.name); return `<span class="tag proj" style="${projectTagStyle(s)}">${escapeHtml(p.name)}</span>`; }).join('')}
    </div>` : ''}
    <div class="grid-projects">
      ${list.map((p,i)=>{
        const seed = hashStr(p.id||p.name);
        const style = projectStyle(seed);
        const vc = viewingsForProject(p.id).length;
        return `<div class="pcard" data-tilt onclick="goto('project-'+'${p.id}')">
          <div class="pcard-art" style="background:${style.bg}">${buildingSVG(seed)}</div>
          <div class="pcard-body">
            <h4>${escapeHtml(p.name)}</h4>
            <div class="loc">${ICON.pin}${escapeHtml(p.city||'—')}</div>
            <div class="pcard-meta">
              <span class="chip units">${p.units||0} وحدة</span>
              <span class="chip visits">${vc} معاينة</span>
            </div>
          </div>
        </div>`;
      }).join('')}
      <div class="add-card" onclick="openProjectForm()">${ICON.plus}<span>إضافة مشروع جديد</span></div>
    </div>
  `;
  document.getElementById('app').innerHTML = shellHTML('projects', html);
  document.querySelectorAll('.pcard').forEach(attachTilt);
}

/* ================= RENDER: PROJECT DETAIL ================= */
function renderProjectDetail(){
  const p = projectById(State.selectedProjectId);
  if(!p){ renderProjects(); return; }
  const seed = hashStr(p.id||p.name);
  const style = projectStyle(seed);
  const vs = viewingsForProject(p.id);

  const y = State.calYear, m = State.calMonth;
  const todayStr = todayISO();
  const { cells, max } = buildCalendarCells(y, m, iso=>viewingsOnDate(iso, p.id).length);

  const dayCellsHTML = cells.map(d=>{
    if(d===null) return `<div class="day-cell pad"></div>`;
    const iso = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const count = viewingsOnDate(iso, p.id).length;
    const isToday = iso===todayStr;
    const isSel = iso===State.selectedDay;
    return `<div class="day-cell ${isToday?'today':''} ${isSel?'selected':''}" style="${isSel?'':heatBg(count,max)+heatTextColor(count,max)}" onclick="selectDay('${iso}')">
      ${count>0?`<span class="cnt2" style="${isSel?'':heatBadgeStyle(count,max)}">${count}</span>`:''}
      <span>${d}</span>
    </div>`;
  }).join('');

  const dayList = State.selectedDay ? viewingsOnDate(State.selectedDay, p.id).sort((a,b)=>(a.time||'').localeCompare(b.time||'')) : [];

  let peopleList = vs;
  const batches = [...new Set(vs.map(v=>v.batch).filter(Boolean))];
  if(projectPeopleBatch) peopleList = peopleList.filter(v=>(v.batch||'')===projectPeopleBatch);
  if(projectPeopleFilter==='rescheduled') peopleList = peopleList.filter(v=>v.wasRescheduled===true);
  else if(projectPeopleFilter!=='all') peopleList = peopleList.filter(v=>attendanceStatus(v).key===projectPeopleFilter);
  peopleList = [...peopleList].sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
  const statusCounts = {upcoming:0, attended:0, absent:0, pending:0};
  vs.forEach(v=>{ statusCounts[attendanceStatus(v).key]++; });
  const rescheduledCount = vs.filter(v=>v.wasRescheduled===true).length;

  const html = `
    <a class="back-link" onclick="goto('projects')">${ICON.arrow}<span>رجوع للمشاريع</span></a>
    <div class="pd-header">
      <div class="pd-art" style="background:${style.bg}">${buildingSVG(seed,52)}</div>
      <div class="pd-info">
        <h2>${escapeHtml(p.name)}</h2>
        <p>${escapeHtml(p.description||'لا يوجد وصف لهذا المشروع بعد.')}</p>
        <div class="pd-tags">
          <span class="chip loc">${ICON.pin} ${escapeHtml(p.city||'—')}</span>
          <span class="chip units">${ICON.bldg} ${p.units||0} وحدة</span>
          <span class="chip visits">${ICON.calendar} ${vs.length} معاينة مسجلة</span>
          ${(()=>{
            const known = vs.filter(v=> ['attended','absent'].includes(attendanceStatus(v).key));
            if(!known.length) return '';
            const rate = Math.round(known.filter(v=>v.attended===true).length/known.length*100);
            return `<span class="chip attend">${ICON.check} ${rate}% نسبة الحضور</span>`;
          })()}
        </div>
      </div>
    </div>

    <div class="cal-wrap">
      <div class="panel">
        <div class="cal-nav">
          <h3>${MONTHS[m]} ${y}</h3>
          <div class="cal-nav-btns">
            <button class="icon-btn" onclick="shiftMonth(-1)">${ICON.chevR}</button>
            <button class="btn btn-ghost btn-sm" onclick="printWeeklyReport()">${ICON.printer}<span>تقرير أسبوعي</span></button>
            <button class="btn btn-ghost btn-sm" onclick="printMonthlyReport()">${ICON.printer}<span>تقرير الشهر</span></button>
            <button class="icon-btn" onclick="shiftMonth(1)">${ICON.chevL}</button>
          </div>
        </div>
        <div class="cal-shell">
          <div class="weekdays">${WEEKDAYS_LETTER.map(w=>`<div>${w}</div>`).join('')}</div>
          <div class="days">${dayCellsHTML}</div>
          <div class="cal-legend"><span>أقل</span><span class="sw" style="background:hsl(109,69%,84%)"></span><span class="sw" style="background:hsl(77,71%,73%)"></span><span class="sw" style="background:hsl(45,73%,63%)"></span><span class="sw" style="background:hsl(13,75%,52%)"></span><span>أكثر</span></div>
        </div>
      </div>
      <div class="panel day-panel">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <h4 style="margin-bottom:0;">${State.selectedDay? 'معاينات '+fmtDateHuman(State.selectedDay) : 'اختر يومًا لعرض المعاينات'}</h4>
          ${State.selectedDay && dayList.length? `<button class="btn btn-ghost btn-sm" onclick="printDayReport()">${ICON.printer}<span>طباعة حسب الوقت</span></button>` : ''}
        </div>
        ${State.selectedDay ? (dayList.length? dayList.map(v=> appointmentCardHTML(v, {showStatus:true, showNote:true})).join('') : `<div class="empty-note">لا توجد معاينات في هذا اليوم</div>`)
        : `<div class="empty-note">اضغط على أي يوم بالتقويم لعرض تفاصيل المعاينات المجدولة فيه</div>`}
      </div>
    </div>

    ${batches.length>=2? `
    <div class="panel" style="margin-top:22px;">
      <div class="panel-head"><h3>مقارنة أداء الدفعات</h3><span>نسبة الحضور لكل دفعة</span></div>
      ${batches.map(b=>{
        const batchViewings = vs.filter(v=>(v.batch||'')===b);
        const known = batchViewings.filter(v=>['attended','absent'].includes(attendanceStatus(v).key));
        const rate = known.length? Math.round(known.filter(v=>v.attended===true).length/known.length*100) : 0;
        return `<div class="proj-row">
          <span class="tag batch" style="flex-shrink:0; width:auto;">${escapeHtml(b)}</span>
          <div class="name" style="flex-shrink:0; width:auto; color:var(--ink-300); font-size:11px;">${batchViewings.length} معاينة</div>
          <div class="track" style="flex:1;"><div class="fill" style="width:${rate}%"></div></div>
          <div class="cnt" style="width:auto;">${rate}%</div>
        </div>`;
      }).join('')}
    </div>` : ''}

    <div class="panel" style="margin-top:22px;">
      <div class="panel-head"><h3>كل الأشخاص</h3><span>${peopleList.length} من ${vs.length}</span></div>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px; align-items:center;">
        <button class="btn btn-sm ${projectPeopleFilter==='all'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('all')">الكل (${vs.length})</button>
        <button class="btn btn-sm ${projectPeopleFilter==='upcoming'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('upcoming')">قادمة (${statusCounts.upcoming})</button>
        <button class="btn btn-sm ${projectPeopleFilter==='attended'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('attended')">حضروا (${statusCounts.attended})</button>
        <button class="btn btn-sm ${projectPeopleFilter==='absent'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('absent')">لم يحضروا (${statusCounts.absent})</button>
        <button class="btn btn-sm ${projectPeopleFilter==='pending'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('pending')">لم تُحدَّد (${statusCounts.pending})</button>
        ${rescheduledCount>0? `<button class="btn btn-sm ${projectPeopleFilter==='rescheduled'?'btn-primary':'btn-ghost'}" onclick="setProjectPeopleFilter('rescheduled')">معاد جدولتها (${rescheduledCount})</button>` : ''}
        ${batches.length? `<select onchange="projectPeopleBatch=this.value; render();" style="margin-inline-start:auto; max-width:180px;">
          <option value="">كل الدفعات</option>
          ${batches.map(b=>`<option value="${escapeHtml(b)}" ${projectPeopleBatch===b?'selected':''}>${escapeHtml(b)}</option>`).join('')}
        </select>` : ''}
      </div>
      ${peopleList.length? peopleList.map(v=> appointmentCardHTML(v, {
          showStatus:true, showNote:true, clickable:false,
          actionsHTML: `<div class="ap-actions">
            <button class="btn btn-sm ${v.attended===true?'btn-primary':'btn-ghost'}" onclick="setAttended('${v.id}', true)">حضر</button>
            <button class="btn btn-sm ${v.attended===false?'btn-danger':'btn-ghost'}" onclick="setAttended('${v.id}', false)">لم يحضر</button>
            <button class="btn btn-sm btn-ghost" onclick="openRescheduleForm('${v.id}')">إعادة جدولة</button>
          </div>`
        })).join('') : `<div class="empty-note">لا يوجد أشخاص مطابقون لهذا الفلتر</div>`}
    </div>
  `;
  document.getElementById('app').innerHTML = shellHTML('project', html);
}
function printStatusClass(v){
  const st = attendanceStatus(v);
  if(st.key==='attended') return 'pr-status-done';
  if(st.key==='absent') return 'pr-status-absent';
  return 'pr-status-neutral';
}
function printDayReport(){
  const p = projectById(State.selectedProjectId);
  if(!p || !State.selectedDay) return;
  const seed = hashStr(p.id||p.name);
  const dayViewings = viewingsOnDate(State.selectedDay, p.id)
    .sort((a,b)=> (a.time||'').localeCompare(b.time||''));
  const rows = dayViewings.map(v=>`<tr>
    <td style="font-weight:700;">${escapeHtml(v.time||'—')}</td>
    <td>${escapeHtml(v.name)}</td>
    <td>${escapeHtml(v.unit||'—')}</td>
    <td style="direction:ltr;text-align:right">${escapeHtml(v.phone||'—')}</td>
    <td>${escapeHtml(v.batch||'—')}</td>
    <td class="${printStatusClass(v)}">${attendanceStatus(v).label}</td>
  </tr>`).join('');
  let container = document.getElementById('print-report');
  if(!container){ container = document.createElement('div'); container.id='print-report'; document.body.appendChild(container); }
  container.innerHTML = `
    <div class="pr-topbar" style="background:${projectStyle(seed).bg};"></div>
    <div class="pr-head"><span class="pr-brand">دار وإعمار</span><span class="pr-brand">${fmtDateHuman(todayISO())}</span></div>
    <h1>جدول معاينات ${escapeHtml(p.name)} — ${fmtDateHuman(State.selectedDay)}</h1>
    <div class="pr-sub">مرتّب حسب الوقت لتسهيل معرفة الأشخاص · إجمالي المعاينات: ${dayViewings.length}</div>
    <table>
      <thead><tr><th>الوقت</th><th>الاسم</th><th>الوحدة</th><th>الجوال</th><th>الدفعة</th><th>الحالة</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="6">لا توجد معاينات في هذا اليوم</td></tr>`}</tbody>
    </table>
    <div class="pr-foot">دار وإعمار للتطوير العقاري — نظام إدارة المعاينات</div>
  `;
  setTimeout(()=> window.print(), 80);
}
function printWeeklyReport(){
  const p = projectById(State.selectedProjectId);
  if(!p) return;
  const seed = hashStr(p.id||p.name);
  const base = State.selectedDay ? new Date(State.selectedDay+'T00:00:00') : new Date();
  const weekStart = new Date(base); weekStart.setDate(base.getDate()-base.getDay());
  const weekDates = Array.from({length:7}).map((_,i)=>{ const d=new Date(weekStart); d.setDate(weekStart.getDate()+i); return d.toISOString().slice(0,10); });
  const weekViewings = viewingsForProject(p.id)
    .filter(v=>weekDates.includes(v.date))
    .sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time));
  const attended = weekViewings.filter(v=>v.attended===true).length;
  const absent = weekViewings.filter(v=>v.attended===false).length;
  const rows = weekViewings.map(v=>`<tr>
    <td>${fmtDateHuman(v.date)}</td>
    <td style="font-weight:700;">${escapeHtml(v.time||'—')}</td>
    <td>${escapeHtml(v.name)}</td>
    <td>${escapeHtml(v.unit||'—')}</td>
    <td style="direction:ltr;text-align:right">${escapeHtml(v.phone||'—')}</td>
    <td>${escapeHtml(v.batch||'—')}</td>
    <td class="${printStatusClass(v)}">${attendanceStatus(v).label}</td>
  </tr>`).join('');
  let container = document.getElementById('print-report');
  if(!container){ container = document.createElement('div'); container.id='print-report'; document.body.appendChild(container); }
  container.innerHTML = `
    <div class="pr-topbar" style="background:${projectStyle(seed).bg};"></div>
    <div class="pr-head"><span class="pr-brand">دار وإعمار</span><span class="pr-brand">${fmtDateHuman(todayISO())}</span></div>
    <h1>تقرير أسبوعي — ${escapeHtml(p.name)}</h1>
    <div class="pr-sub">من ${fmtDateHuman(weekDates[0])} إلى ${fmtDateHuman(weekDates[6])} · إجمالي المعاينات: ${weekViewings.length} · حضر: ${attended} · لم يحضر: ${absent}</div>
    <table>
      <thead><tr><th>التاريخ</th><th>الوقت</th><th>الاسم</th><th>الوحدة</th><th>الجوال</th><th>الدفعة</th><th>الحالة</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="7">لا توجد معاينات في هذا الأسبوع</td></tr>`}</tbody>
    </table>
    <div class="pr-foot">دار وإعمار للتطوير العقاري — نظام إدارة المعاينات</div>
  `;
  setTimeout(()=> window.print(), 80);
}
function printMonthlyReport(){
  const p = projectById(State.selectedProjectId);
  if(!p) return;
  const seed = hashStr(p.id||p.name);
  const y = State.calYear, m = State.calMonth;
  const prefix = `${y}-${String(m+1).padStart(2,'0')}`;
  const monthViewings = viewingsForProject(p.id)
    .filter(v=> v.date && v.date.startsWith(prefix))
    .sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time));
  const attended = monthViewings.filter(v=>v.attended===true).length;
  const absent = monthViewings.filter(v=>v.attended===false).length;
  const rows = monthViewings.map(v=>`<tr>
    <td>${escapeHtml(v.name)}</td>
    <td>${fmtDateHuman(v.date)}</td>
    <td>${escapeHtml(v.time||'—')}</td>
    <td>${escapeHtml(v.unit||'—')}</td>
    <td style="direction:ltr;text-align:right">${escapeHtml(v.phone||'—')}</td>
    <td>${escapeHtml(v.batch||'—')}</td>
    <td class="${printStatusClass(v)}">${attendanceStatus(v).label}</td>
  </tr>`).join('');
  let container = document.getElementById('print-report');
  if(!container){ container = document.createElement('div'); container.id='print-report'; document.body.appendChild(container); }
  container.innerHTML = `
    <div class="pr-topbar" style="background:${projectStyle(seed).bg};"></div>
    <div class="pr-head"><span class="pr-brand">دار وإعمار</span><span class="pr-brand">${fmtDateHuman(todayISO())}</span></div>
    <h1>تقرير معاينات ${escapeHtml(p.name)} — ${MONTHS[m]} ${y}</h1>
    <div class="pr-sub">إجمالي المعاينات: ${monthViewings.length} · حضر: ${attended} · لم يحضر: ${absent}</div>
    <table>
      <thead><tr><th>الاسم</th><th>التاريخ</th><th>الوقت</th><th>الوحدة</th><th>الجوال</th><th>الدفعة</th><th>الحالة</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="7">لا توجد معاينات في هذا الشهر</td></tr>`}</tbody>
    </table>
    <div class="pr-foot">دار وإعمار للتطوير العقاري — نظام إدارة المعاينات</div>
  `;
  setTimeout(()=> window.print(), 80);
}
function shiftMonth(delta){
  let m = State.calMonth + delta, y = State.calYear;
  if(m<0){ m=11; y--; } if(m>11){ m=0; y++; }
  State.calMonth=m; State.calYear=y; render();
}
function shiftHomeMonth(delta){
  let m = State.homeCalMonth + delta, y = State.homeCalYear;
  if(m<0){ m=11; y--; } if(m>11){ m=0; y++; }
  State.homeCalMonth=m; State.homeCalYear=y; render();
}
function jumpHomeToday(){
  const now = new Date();
  State.homeCalMonth = now.getMonth(); State.homeCalYear = now.getFullYear();
  render();
  openDayLookup(todayISO());
}
function selectDay(iso){ State.selectedDay = (State.selectedDay===iso)? null : iso; render(); }

/* ================= PROJECT FORM MODAL ================= */
let pendingProjectFile = null;
function setupProjectFormDropzone(){
  const dz = document.getElementById('pf-dropzone');
  const input = document.getElementById('pf-file-input');
  const status = document.getElementById('pf-file-status');
  if(!dz) return;
  dz.onclick = ()=> input.click();
  dz.ondragover = (e)=>{ e.preventDefault(); dz.classList.add('drag'); };
  dz.ondragleave = ()=> dz.classList.remove('drag');
  dz.ondrop = (e)=>{
    e.preventDefault(); dz.classList.remove('drag');
    if(e.dataTransfer.files[0]){ pendingProjectFile = e.dataTransfer.files[0]; status.textContent = '📎 '+pendingProjectFile.name; }
  };
  input.onchange = ()=>{
    if(input.files[0]){ pendingProjectFile = input.files[0]; status.textContent = '📎 '+input.files[0].name; }
  };
}
function openProjectForm(id){
  const p = id? projectById(id) : null;
  pendingProjectFile = null;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
      <div class="modal">
        <div class="modal-head"><h3>${p?'تعديل المشروع':'مشروع جديد'}</h3><button class="modal-close" onclick="closeModal()">${ICON.x}</button></div>
        <form id="pform">
          <div class="field"><label>اسم المشروع</label><input required name="name" value="${p?escapeHtml(p.name):''}" placeholder="مثال: أبراج الواحة"></div>
          <div class="field"><label>المدينة / الموقع</label><input name="city" value="${p?escapeHtml(p.city||''):''}" placeholder="الرياض"></div>
          <div class="field field-row">
            <div><label>عدد الوحدات</label><input type="number" min="0" name="units" value="${p?p.units||'':''}" placeholder="120"></div>
          </div>
          <div class="field"><label>وصف مختصر</label><textarea name="description" rows="3" placeholder="نبذة عن المشروع…">${p?escapeHtml(p.description||''):''}</textarea></div>
          ${!p? `
          <div style="border-top:1px solid var(--line); margin:16px 0 14px; padding-top:14px;">
            <label style="display:block; font-size:12.5px; font-weight:700; color:var(--ink-700); margin-bottom:8px;">رفع بيانات المعاينات من إكسل (اختياري)</label>
            <div class="dropzone" id="pf-dropzone" style="padding:18px;">
              ${ICON.upload}
              <b style="font-size:12.5px;">اسحب ملف الإكسل هنا أو اضغط للاختيار</b>
              <span style="font-size:11px;">يدعم .xlsx و .xls و .csv — سيُربط تلقائيًا بهذا المشروع</span>
              <input type="file" id="pf-file-input" accept=".xlsx,.xls,.csv" style="display:none">
            </div>
            <div id="pf-file-status" style="font-size:12px; color:var(--orange-700); font-weight:600; margin-top:8px;"></div>
            <div class="field" style="margin-top:12px; margin-bottom:0;"><label>اسم الدفعة (اختياري)</label><input id="pf-batch-name" placeholder="افتراضيًا: الدفعة الأولى"></div>
          </div>` : ''}
          <div class="modal-actions">
            <button type="button" class="btn btn-ghost" onclick="closeModal()">إلغاء</button>
            <button type="submit" class="btn btn-primary">${ICON.check}<span>${p?'حفظ التعديلات':'إضافة المشروع'}</span></button>
          </div>
        </form>
      </div>
    </div>`;
  if(!p) setupProjectFormDropzone();
  document.getElementById('pform').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const data = { name:f.get('name').trim(), city:f.get('city').trim(), units: Number(f.get('units'))||0, description: f.get('description').trim() };
    if(!data.name) return;
    if(p){
      await updateProject(p.id, data);
      closeModal();
      toast('تم حفظ التعديلات');
      if(State.useLocal) render();
      return;
    }
    let parsedRows = null;
    if(pendingProjectFile){
      try{
        parsedRows = await parseExcelFile(pendingProjectFile);
      }catch(err){
        toast(excelErrorMessage(err), true);
        return;
      }
    }
    const newId = await addProject(data);
    if(parsedRows && parsedRows.length){
      const batchName = (document.getElementById('pf-batch-name')||{}).value?.trim() || 'الدفعة الأولى';
      const rows = parsedRows.map(r=>{ const {projectNameFromFile, ...rest} = r; return {...rest, projectId:newId, batch: rest.batch || batchName}; });
      await bulkAddViewings(rows);
      closeModal();
      toast(`تمت إضافة المشروع واستيراد ${rows.length} معاينة`);
    } else {
      closeModal();
      toast('تمت إضافة المشروع');
    }
    if(State.useLocal) render();
  };
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

/* ================= APPOINTMENT DETAIL MODAL ================= */
function openAppointmentDetail(id){
  const v = State.viewings.find(x=>x.id===id);
  if(!v) return;
  const p = projectById(v.projectId);
  const root = document.getElementById('modal-root');
  const st = attendanceStatus(v);
  root.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
      <div class="modal">
        <div class="modal-head"><h3>تفاصيل المعاينة</h3><button class="modal-close" onclick="closeModal()">${ICON.x}</button></div>
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:18px;">
          <div class="up-avatar" style="width:48px;height:48px;font-size:17px;">${escapeHtml((v.name||'?').trim().charAt(0))}</div>
          <div>
            <div style="font-family:var(--font-head); font-weight:800; font-size:16px; color:var(--ink-900);">${escapeHtml(v.name)}</div>
            <div style="font-size:12.5px; color:var(--ink-500);">${escapeHtml(p?p.name:'—')}</div>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">التاريخ</span><span>${fmtDateHuman(v.date)}</span></div>
          <div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">الوقت</span><span class="up-time">${escapeHtml(v.time||'—')}</span></div>
          ${v.phone?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">الجوال</span><span style="direction:ltr">${escapeHtml(v.phone)}</span></div>`:''}
          ${v.unit?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">رقم الوحدة</span><span>${escapeHtml(v.unit)}</span></div>`:''}
          ${v.batch?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">الدفعة</span><span>${escapeHtml(v.batch)}</span></div>`:''}
          ${v.nationalId?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">رقم الهوية</span><span style="direction:ltr">${escapeHtml(v.nationalId)}</span></div>`:''}
          ${v.appointmentNumber?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">رقم الموعد</span><span style="direction:ltr">${escapeHtml(v.appointmentNumber)}</span></div>`:''}
          <div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">حالة الحضور</span><span class="status-badge ${st.cls}">${st.label}</span></div>
          ${v.notes?`<div class="proj-row" style="border:none; padding:8px 0;"><span class="name" style="font-weight:700;">ملاحظات</span><span>${escapeHtml(v.notes)}</span></div>`:''}
        </div>
        ${(Array.isArray(v.rescheduleHistory) && v.rescheduleHistory.length)? `
        <div style="margin-top:14px; background:var(--canvas); border-radius:10px; padding:10px 12px;">
          <div style="font-size:12px; font-weight:700; color:var(--ink-700); margin-bottom:6px;">سجل إعادة الجدولة (${v.rescheduleHistory.length})</div>
          ${v.rescheduleHistory.map(h=>`<div style="font-size:11.5px; color:var(--ink-500); padding:4px 0; border-top:1px solid var(--line);">
            كان الموعد ${fmtDateHuman(h.fromDate)} الساعة ${escapeHtml(h.fromTime||'—')}${h.reason?' — '+escapeHtml(h.reason):''}
          </div>`).join('')}
        </div>` : ''}
        <div class="modal-actions">
          ${whatsappLink(v)? `<a href="${whatsappLink(v)}" target="_blank" rel="noopener" class="btn btn-block" style="background:#25D366; color:#fff;">${ICON.whatsapp}<span>إرسال تذكير واتساب</span></a>`:''}
          ${v.attended===false? `<button type="button" class="btn btn-primary" onclick="closeModal(); openRescheduleForm('${v.id}')">${ICON.calendar}<span>إعادة جدولة</span></button>`:''}
          <button type="button" class="btn btn-ghost btn-block" onclick="closeModal()">إغلاق</button>
        </div>
      </div>
    </div>`;
}

/* ================= QUICK DAY LOOKUP ================= */
function openDayLookup(dateStr){
  if(!dateStr) dateStr = todayISO();
  const list = viewingsOnDate(dateStr).sort((a,b)=>(a.time||'').localeCompare(b.time||''));
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
      <div class="modal wide">
        <div class="modal-head">
          <div><h3>معاينات ${fmtDateHuman(dateStr)}</h3><span style="font-size:12px; color:var(--ink-500);">${list.length} معاينة مجدولة</span></div>
          <button class="modal-close" onclick="closeModal()">${ICON.x}</button>
        </div>
        <div style="max-height:60vh; overflow-y:auto;">
          ${list.length? list.map(v=> appointmentCardHTML(v, {showProject:true, showStatus:true, closeFirst:true})).join('') : `<div class="empty-note">لا توجد معاينات في هذا اليوم</div>`}
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-ghost btn-block" onclick="closeModal()">إغلاق</button>
        </div>
      </div>
    </div>`;
}

/* ================= ADMIN ================= */
function renderAdmin(){
  const modeLabel = {firebase:'متصل بـ Firebase', 'claude-db':'متصل (مزامنة داخل Claude)', local:'تخزين محلي في هذا المتصفح'}[State.storageMode] || '—';
  const modeColor = {firebase:'var(--orange-700)', 'claude-db':'var(--orange-400)', local:'var(--orange-900)'}[State.storageMode] || 'var(--ink-500)';
  const html = `
    <div class="topbar">
      <div><h1>لوحة التحكم</h1><p>إدارة المشاريع والمعاينات واستيراد بيانات العملاء</p></div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span class="chip" style="background:transparent; border:1px solid var(--line); color:${modeColor};">
          <span style="width:7px;height:7px;border-radius:50%;background:${modeColor};display:inline-block;"></span> ${modeLabel}
        </span>
        <button class="btn btn-ghost btn-sm" onclick="exportAllData()">${ICON.download}<span>تصدير كل البيانات</span></button>
      </div>
    </div>
    <div class="admin-tabs">
      <button class="a-tab ${State.adminTab==='projects'?'active':''}" onclick="setAdminTab('projects')">المشاريع</button>
      <button class="a-tab ${State.adminTab==='viewings'?'active':''}" onclick="setAdminTab('viewings')">المعاينات</button>
      <button class="a-tab ${State.adminTab==='attendance'?'active':''}" onclick="setAdminTab('attendance')">معلومات المعاينات</button>
      <button class="a-tab ${State.adminTab==='import'?'active':''}" onclick="setAdminTab('import')">استيراد إكسل</button>
    </div>
    <div id="admin-content"></div>
  `;
  document.getElementById('app').innerHTML = shellHTML('admin', html);
  renderAdminTabContent();
}
function setAdminTab(t){ State.adminTab=t; renderAdminTabContent(); }
function renderAdminTabContent(){
  const c = document.getElementById('admin-content');
  if(!c) return;
  if(State.adminTab==='projects') c.innerHTML = adminProjectsHTML();
  else if(State.adminTab==='viewings') c.innerHTML = adminViewingsHTML();
  else if(State.adminTab==='attendance') c.innerHTML = adminAttendanceHTML();
  else c.innerHTML = adminImportHTML();
  if(State.adminTab==='import') setupDropzone();
}
function exportAllData(){
  if(typeof XLSX === 'undefined'){ toast('تعذر التصدير — مكتبة الإكسل لم تُحمَّل بعد، حاول مجددًا', true); return; }
  if(State.projects.length===0 && State.viewings.length===0){ toast('لا توجد بيانات لتصديرها', true); return; }
  const projectsData = State.projects.map(p=>({
    'اسم المشروع': p.name, 'المدينة': p.city||'', 'عدد الوحدات': p.units||0,
    'الوصف': p.description||'', 'تاريخ الإنشاء': p.createdAt? p.createdAt.slice(0,10) : '',
  }));
  const viewingsData = State.viewings.map(v=>{
    const p = projectById(v.projectId);
    return {
      'الاسم': v.name, 'المشروع': p?p.name:'', 'الجوال': v.phone||'', 'التاريخ': v.date||'', 'الوقت': v.time||'',
      'رقم الوحدة': v.unit||'', 'الدفعة': v.batch||'', 'رقم الهوية': v.nationalId||'', 'رقم الموعد': v.appointmentNumber||'',
      'الحالة': attendanceStatus(v).label, 'معاد جدولتها': v.wasRescheduled? 'نعم' : 'لا', 'ملاحظات': v.notes||'',
    };
  });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(projectsData), 'المشاريع');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(viewingsData), 'المعاينات');
  XLSX.writeFile(wb, `دار-وإعمار-نسخة-احتياطية-${todayISO()}.xlsx`);
  toast('تم تصدير كل البيانات بنجاح');
}
function adminProjectsHTML(){
  return `
    <div class="panel">
      <div class="panel-head"><h3>كل المشاريع (${State.projects.length})</h3><button class="btn btn-primary btn-sm" onclick="openProjectForm()">${ICON.plus}<span>إضافة</span></button></div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>المشروع</th><th>المدينة</th><th>الوحدات</th><th>المعاينات</th><th></th></tr></thead>
        <tbody>
          ${State.projects.length? State.projects.map(p=>`
            <tr>
              <td>${escapeHtml(p.name)}</td>
              <td>${escapeHtml(p.city||'—')}</td>
              <td>${p.units||0}</td>
              <td>${viewingsForProject(p.id).length}</td>
              <td style="white-space:nowrap">
                <button class="mini-btn" onclick="openProjectForm('${p.id}')">${ICON.edit}</button>
                <button class="mini-btn danger" onclick="confirmDeleteProject('${p.id}')">${ICON.trash}</button>
              </td>
            </tr>`).join('') : `<tr><td colspan="5"><div class="empty-note">لا توجد مشاريع بعد</div></td></tr>`}
        </tbody>
      </table></div>
    </div>`;
}
function confirmDeleteProject(id){
  if(confirm('سيتم حذف المشروع وكل المعاينات المرتبطة به. متابعة؟')){
    deleteProject(id).then(()=>{ toast('تم حذف المشروع'); renderAdminTabContent(); });
  }
}
let adminViewingsSearch = '';
function adminViewingsHTML(){
  let rows = [...State.viewings].sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
  if(adminViewingsSearch){
    const q = adminViewingsSearch.trim();
    rows = rows.filter(v=> (v.name||'').includes(q) || (v.phone||'').includes(q) || (v.unit||'').includes(q) || (v.appointmentNumber||'').includes(q));
  }
  return `
    <div class="panel">
      <div class="panel-head"><h3>كل المعاينات (${rows.length})</h3><button class="btn btn-primary btn-sm" onclick="openViewingForm()">${ICON.plus}<span>إضافة معاينة</span></button></div>
      <div class="field" style="max-width:280px;"><input placeholder="بحث بالاسم أو الجوال أو رقم الوحدة…" value="${escapeHtml(adminViewingsSearch)}" oninput="adminViewingsSearch=this.value; renderAdminTabContent();"></div>
      <div class="table-wrap" style="max-height:520px; overflow-y:auto;"><table class="table">
        <thead><tr><th>الاسم</th><th>الجوال</th><th>المشروع</th><th>الوحدة</th><th>التاريخ</th><th>الوقت</th><th>الحضور</th><th></th></tr></thead>
        <tbody>
          ${rows.length? rows.map(v=>{
            const p = projectById(v.projectId);
            const st = attendanceStatus(v);
            return `<tr style="cursor:pointer" onclick="openAppointmentDetail('${v.id}')">
              <td>${escapeHtml(v.name)}</td>
              <td style="direction:ltr;text-align:right">${escapeHtml(v.phone||'—')}</td>
              <td>${escapeHtml(p?p.name:'—')}</td>
              <td>${escapeHtml(v.unit||'—')}</td>
              <td>${fmtDateHuman(v.date)}</td>
              <td>${escapeHtml(v.time||'')}</td>
              <td><span class="status-badge ${st.cls}">${st.label}</span></td>
              <td style="white-space:nowrap" onclick="event.stopPropagation()">
                <button class="mini-btn" onclick="openViewingForm('${v.id}')">${ICON.edit}</button>
                <button class="mini-btn danger" onclick="confirmDeleteViewing('${v.id}')">${ICON.trash}</button>
              </td>
            </tr>`;
          }).join('') : `<tr><td colspan="8"><div class="empty-note">لا توجد معاينات بعد</div></td></tr>`}
        </tbody>
      </table></div>
    </div>`;
}
function confirmDeleteViewing(id){
  if(confirm('حذف هذه المعاينة؟')) deleteViewing(id).then(()=>{ toast('تم الحذف'); renderAdminTabContent(); });
}

/* ---- attendance quick-toggle tab ---- */
let attendanceSearch = '';
let attendanceFilter = 'all'; // all | pending | attended | absent
function adminAttendanceHTML(){
  let rows = [...State.viewings].sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));
  if(attendanceSearch){
    const q = attendanceSearch.trim();
    rows = rows.filter(v=> (v.name||'').includes(q) || (v.phone||'').includes(q) || (v.unit||'').includes(q));
  }
  if(attendanceFilter!=='all') rows = rows.filter(v=> attendanceStatus(v).key===attendanceFilter);
  return `
    <div class="panel">
      <div class="panel-head"><h3>معلومات المعاينات — تحديث حالة الحضور (${rows.length})</h3></div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:14px;">
        <div class="field" style="margin-bottom:0; max-width:260px; flex:1;">
          <input placeholder="بحث بالاسم أو الجوال أو الوحدة…" value="${escapeHtml(attendanceSearch)}" oninput="attendanceSearch=this.value; renderAdminTabContent();">
        </div>
        <select style="max-width:180px;" onchange="attendanceFilter=this.value; renderAdminTabContent();">
          <option value="all" ${attendanceFilter==='all'?'selected':''}>الكل</option>
          <option value="upcoming" ${attendanceFilter==='upcoming'?'selected':''}>قادمة</option>
          <option value="pending" ${attendanceFilter==='pending'?'selected':''}>لم تُحدَّد بعد</option>
          <option value="attended" ${attendanceFilter==='attended'?'selected':''}>حضر</option>
          <option value="absent" ${attendanceFilter==='absent'?'selected':''}>لم يحضر</option>
        </select>
      </div>
      <div class="table-wrap" style="max-height:560px; overflow-y:auto;"><table class="table">
        <thead><tr><th>الاسم</th><th>المشروع</th><th>التاريخ</th><th>الوقت</th><th>الحالة الحالية</th><th>إجراء</th></tr></thead>
        <tbody>
          ${rows.length? rows.map(v=>{
            const p = projectById(v.projectId);
            const st = attendanceStatus(v);
            return `<tr>
              <td>${escapeHtml(v.name)}</td>
              <td>${escapeHtml(p?p.name:'—')}</td>
              <td>${fmtDateHuman(v.date)}</td>
              <td>${escapeHtml(v.time||'')}</td>
              <td><span class="status-badge ${st.cls}">${st.label}</span></td>
              <td style="white-space:nowrap">
                <button class="btn btn-sm ${v.attended===true? 'btn-primary':'btn-ghost'}" style="padding:6px 10px;" onclick="setAttended('${v.id}', true)">${ICON.check}<span>حضر</span></button>
                <button class="btn btn-sm ${v.attended===false? 'btn-danger':'btn-ghost'}" style="padding:6px 10px;" onclick="setAttended('${v.id}', false)"><span>لم يحضر</span></button>
                <button class="btn btn-sm btn-ghost" style="padding:6px 10px;" onclick="openRescheduleForm('${v.id}')"><span>إعادة جدولة</span></button>
              </td>
            </tr>`;
          }).join('') : `<tr><td colspan="6"><div class="empty-note">لا توجد معاينات مطابقة</div></td></tr>`}
        </tbody>
      </table></div>
    </div>`;
}
async function setAttended(id, val){
  await updateViewing(id, {attended: val});
  toast(val? 'تم تحديد الحالة: حضر' : 'تم تحديد الحالة: لم يحضر');
  render();
}
function openViewingForm(id){
  const v = id? State.viewings.find(x=>x.id===id) : null;
  if(State.projects.length===0){ toast('أضف مشروعًا أولاً', true); return; }
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this) closeModal()">
      <div class="modal">
        <div class="modal-head"><h3>${v?'تعديل المعاينة':'معاينة جديدة'}</h3><button class="modal-close" onclick="closeModal()">${ICON.x}</button></div>
        <form id="vform">
          <div class="field"><label>المشروع</label><select name="projectId" required>
            ${State.projects.map(p=>`<option value="${p.id}" ${v&&v.projectId===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('')}
          </select></div>
          <div class="field"><label>اسم العميل</label><input required name="name" value="${v?escapeHtml(v.name):''}" placeholder="اسم العميل"></div>
          <div class="field"><label>رقم الجوال</label><input name="phone" value="${v?escapeHtml(v.phone||''):''}" placeholder="05xxxxxxxx" style="direction:ltr;text-align:right"></div>
          <div class="field field-row">
            <div><label>التاريخ</label><input type="date" required name="date" value="${v?v.date:todayISO()}"></div>
            <div><label>الوقت</label><input type="time" required name="time" value="${v?v.time:'10:00'}"></div>
          </div>
          <div class="field field-row">
            <div><label>رقم الوحدة</label><input name="unit" value="${v?escapeHtml(v.unit||''):''}" placeholder="اختياري"></div>
            <div><label>الدفعة</label><input name="batch" value="${v?escapeHtml(v.batch||''):''}" placeholder="مثال: الدفعة الأولى"></div>
          </div>
          <div class="field"><label>رقم الهوية</label><input name="nationalId" value="${v?escapeHtml(v.nationalId||''):''}" placeholder="اختياري" style="direction:ltr;text-align:right"></div>
          <div class="field"><label>رقم الموعد</label><input name="appointmentNumber" value="${v?escapeHtml(v.appointmentNumber||''):''}" placeholder="اختياري" style="direction:ltr;text-align:right"></div>
          <div class="field"><label>ملاحظات</label><input name="notes" value="${v?escapeHtml(v.notes||''):''}" placeholder="اختياري"></div>
          <div class="modal-actions">
            <button type="button" class="btn btn-ghost" onclick="closeModal()">إلغاء</button>
            <button type="submit" class="btn btn-primary">${ICON.check}<span>${v?'حفظ':'إضافة'}</span></button>
          </div>
        </form>
      </div>
    </div>`;
  document.getElementById('vform').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const data = { projectId:f.get('projectId'), name:f.get('name').trim(), phone:f.get('phone').trim(), date:f.get('date'), time:f.get('time'), unit:f.get('unit').trim(), batch:f.get('batch').trim(), nationalId:f.get('nationalId').trim(), appointmentNumber:f.get('appointmentNumber').trim(), notes:f.get('notes').trim() };
    if(v) await updateViewing(v.id, data); else await addViewing(data);
    closeModal();
    toast(v?'تم الحفظ':'تمت إضافة المعاينة');
    renderAdminTabContent();
  };
}

/* ---- import excel ---- */
let importedRows = [];
function adminImportHTML(){
  return `
    <div class="panel">
      <div class="panel-head"><h3>استيراد بيانات المعاينات من إكسل</h3></div>
      <p style="font-size:12.5px; color:var(--ink-500); line-height:1.9; margin-bottom:16px;">
        يجب أن يحتوي الملف على أعمدة بعناوين مشابهة لـ: <b>الاسم</b>، <b>الجوال</b>، <b>التاريخ</b>، <b>الوقت</b>، وعمود <b>المشروع</b> اختياري (إن لم يوجد سيتم تعيين المشروع المحدد أدناه لجميع الصفوف).
      </p>
      <div class="field"><label>المشروع (لصفوف بدون عمود مشروع في الملف)</label>
        <select id="import-default-project" onchange="toggleNewProjectFields(); if(importedRows.length) renderImportPreview();">
          <option value="">— بدون —</option>
          <option value="__new__">✚ إنشاء مشروع جديد بهذه البيانات</option>
          ${State.projects.map(p=>`<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('')}
        </select>
      </div>
      <div id="new-project-fields" class="hidden" style="background:var(--canvas); border:1px solid var(--line); border-radius:12px; padding:14px; margin-bottom:16px;">
        <div class="field"><label>اسم المشروع الجديد</label><input id="import-new-name" placeholder="مثال: أبراج الواحة"></div>
        <div class="field field-row">
          <div><label>المدينة / الموقع</label><input id="import-new-city" placeholder="الرياض"></div>
          <div><label>عدد الوحدات</label><input id="import-new-units" type="number" min="0" placeholder="120"></div>
        </div>
      </div>
      <div class="field"><label>اسم الدفعة (اختياري — لتقسيم معاينات المشروع لدفعات)</label><input id="import-batch-name" placeholder="مثال: الدفعة الأولى"></div>
      <div class="dropzone" id="dropzone">
        ${ICON.upload}
        <b>اسحب ملف الإكسل هنا أو اضغط للاختيار</b>
        <span>يدعم .xlsx و .xls و .csv</span>
        <input type="file" id="file-input" accept=".xlsx,.xls,.csv" style="display:none">
      </div>
      <div id="import-preview"></div>
    </div>
  `;
}
function toggleNewProjectFields(){
  const sel = document.getElementById('import-default-project');
  const box = document.getElementById('new-project-fields');
  if(!sel || !box) return;
  box.classList.toggle('hidden', sel.value !== '__new__');
}
function setupDropzone(){
  const dz = document.getElementById('dropzone');
  const input = document.getElementById('file-input');
  if(!dz) return;
  dz.onclick = ()=> input.click();
  dz.ondragover = (e)=>{ e.preventDefault(); dz.classList.add('drag'); };
  dz.ondragleave = ()=> dz.classList.remove('drag');
  dz.ondrop = (e)=>{ e.preventDefault(); dz.classList.remove('drag'); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); };
  input.onchange = ()=>{ if(input.files[0]) handleFile(input.files[0]); };
}
function normalizeHeader(h){
  h = String(h||'').trim().toLowerCase();
  const map = {
    'الاسم':'name','اسم العميل':'name','الاسم الكامل':'name','name':'name','اسم':'name',
    'account name':'name','customer name':'name','client name':'name','full name':'name','اسم الحساب':'name',
    'الجوال':'phone','رقم الجوال':'phone','الهاتف':'phone','phone':'phone','جوال':'phone',
    'mobile':'phone','mobile number':'phone','account mobile number':'phone','رقم الهاتف':'phone',
    'التاريخ':'date','date':'date','تاريخ':'date','تاريخ المعاينة':'date','appointment date':'date',
    'الوقت':'time','time':'time','وقت':'time','وقت المعاينة':'time',
    'المشروع':'project','project':'project','اسم المشروع':'project',
    'رقم الوحدة':'unit','الوحدة':'unit','unit':'unit','unit: unit name':'unit','unit name':'unit',
    'رقم الهوية':'nationalId','الهوية':'nationalId','national id':'nationalId','customer national id':'nationalId',
    'رقم الموعد':'appointmentNumber','appointmentnumber':'appointmentNumber','appointment number':'appointmentNumber',
    'active appointment: appointment number':'appointmentNumber',
    'الحضور':'attended','attended':'attended','attended appointment':'attended','حالة الحضور':'attended',
    'الدفعة':'batch','دفعة':'batch','batch':'batch',
    'ملاحظات':'notes','notes':'notes',
  };
  return map[h] || null;
}
function parseAttended(val){
  if(val===undefined || val==='' || val===null) return undefined;
  if(typeof val === 'boolean') return val;
  const s = String(val).trim().toLowerCase();
  if(['true','1','yes','y','نعم','حضر','تم الحضور'].includes(s)) return true;
  if(['false','0','no','n','لا','لم يحضر'].includes(s)) return false;
  return undefined;
}
/* Shared Excel/CSV parser — returns a Promise of parsed rows (project column
   kept as raw text in projectNameFromFile; callers decide how to resolve it
   to an actual project id). Rejects with {code, rawHeaders?} on any problem. */
function parseExcelFile(file){
  return new Promise((resolve, reject)=>{
    if(!file || file.size===0){ reject({code:'empty-file'}); return; }
    const reader = new FileReader();
    reader.onload = (e)=>{
      try{
        const wb = XLSX.read(e.target.result, {type:'binary', cellDates:false});
        const sheet = wb.Sheets[wb.SheetNames[0]];
        if(!sheet){ reject({code:'empty-file'}); return; }
        const rows = XLSX.utils.sheet_to_json(sheet, {header:1, raw:true, defval:''});
        if(rows.length === 0){ reject({code:'empty-file'}); return; }
        if(rows.length < 2){ reject({code:'headers-only'}); return; }
        const headers = rows[0].map(normalizeHeader);
        if(!headers.includes('name')){
          const rawHeaders = rows[0].map(h=>String(h||'').trim()).filter(Boolean).join('، ');
          reject({code:'no-name-column', rawHeaders});
          return;
        }
        const parsed = [];
        for(let i=1;i<rows.length;i++){
          const row = rows[i];
          if(row.every(c=>c==='' || c==null)) continue;
          const obj = {};
          headers.forEach((key,idx)=>{ if(key) obj[key] = row[idx]; });
          if(!obj.name) continue;
          let rawDate = obj.date, rawTime = obj.time;
          if(rawDate && !rawTime && typeof rawDate === 'string' && rawDate.includes(',')){
            const parts = rawDate.split(',');
            rawDate = parts[0].trim();
            rawTime = parts.slice(1).join(',').trim();
          }
          const attended = parseAttended(obj.attended);
          parsed.push({
            name: String(obj.name).trim(),
            phone: obj.phone!=null? String(obj.phone).trim(): '',
            date: excelDateToISO(rawDate),
            time: excelTimeToHHMM(rawTime),
            unit: obj.unit!=null? String(obj.unit).trim(): '',
            nationalId: obj.nationalId!=null? String(obj.nationalId).trim(): '',
            appointmentNumber: obj.appointmentNumber!=null? String(obj.appointmentNumber).trim(): '',
            notes: obj.notes!=null? String(obj.notes).trim(): '',
            batch: obj.batch!=null? String(obj.batch).trim(): '',
            projectNameFromFile: obj.project? String(obj.project).trim() : '',
            ...(attended!==undefined? {attended} : {}),
          });
        }
        if(parsed.length === 0){ reject({code:'no-valid-rows'}); return; }
        resolve(parsed);
      }catch(err){
        reject({code:'parse-error'});
      }
    };
    reader.onerror = ()=> reject({code:'read-error'});
    reader.readAsBinaryString(file);
  });
}
function excelErrorMessage(err){
  const map = {
    'empty-file': 'لا يمكن استيراد الملف — الملف فارغ',
    'headers-only': 'لا يمكن استيراد الملف — يحتوي على رؤوس الأعمدة فقط بدون بيانات',
    'no-name-column': 'لا يمكن استيراد الملف — تعذّر التعرف على عمود الاسم' + (err.rawHeaders? '. الأعمدة الموجودة: '+err.rawHeaders : ''),
    'no-valid-rows': 'لا يمكن استيراد الملف — لم يتم العثور على أي صفوف صالحة (تأكد من وجود عمود الاسم)',
    'parse-error': 'تعذر قراءة الملف، تأكد من الصيغة',
    'read-error': 'تعذر قراءة الملف',
  };
  return map[err.code] || 'تعذر استيراد الملف';
}
function excelDateToISO(val){
  if(val==null || val==='') return '';
  if(typeof val === 'number'){
    const d = XLSX.SSF.parse_date_code(val);
    if(d) return `${d.y}-${String(d.m).padStart(2,'0')}-${String(d.d).padStart(2,'0')}`;
  }
  const s = String(val).trim();
  // try common formats
  let mth = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
  if(mth) return `${mth[1]}-${mth[2].padStart(2,'0')}-${mth[3].padStart(2,'0')}`;
  mth = s.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})/);
  if(mth) return `${mth[3]}-${mth[2].padStart(2,'0')}-${mth[1].padStart(2,'0')}`;
  return s;
}
function excelTimeToHHMM(val){
  if(val==null || val==='') return '';
  if(typeof val === 'number'){
    const totalMin = Math.round(val*24*60);
    const h = Math.floor(totalMin/60)%24, m = totalMin%60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  }
  const s = String(val).trim();
  const m = s.match(/(\d{1,2}):(\d{2})/);
  if(m) return `${m[1].padStart(2,'0')}:${m[2]}`;
  return s;
}
function handleFile(file){
  parseExcelFile(file).then(parsed=>{
    const defaultProj = document.getElementById('import-default-project').value;
    importedRows = parsed.map(r=>{
      let projectId = defaultProj;
      if(r.projectNameFromFile){
        const found = State.projects.find(p=> p.name.trim() === r.projectNameFromFile);
        if(found) projectId = found.id;
      }
      const { projectNameFromFile, ...rest } = r;
      return { ...rest, projectId: projectId || '' };
    });
    renderImportPreview();
  }).catch(err=>{
    toast(excelErrorMessage(err), true);
  });
}
function computeDuplicates(){
  const sel = document.getElementById('import-default-project');
  const targetVal = sel ? sel.value : '';
  const existing = (targetVal && targetVal!=='__new__') ? viewingsForProject(targetVal) : [];
  const dupPhones = new Set(existing.map(v=>v.phone).filter(Boolean));
  const dupIds = new Set(existing.map(v=>v.nationalId).filter(Boolean));
  importedRows.forEach(r=>{
    r._dup = !!((r.phone && dupPhones.has(r.phone)) || (r.nationalId && dupIds.has(r.nationalId)));
  });
}
function renderImportPreview(){
  const box = document.getElementById('import-preview');
  if(importedRows.length===0){ box.innerHTML = `<div class="empty-note">لم يتم العثور على صفوف صالحة</div>`; return; }
  computeDuplicates();
  const dupCount = importedRows.filter(r=>r._dup).length;
  box.innerHTML = `
    <div style="margin-top:18px;">
      <div class="panel-head"><h3>معاينة البيانات (${importedRows.length} صف)</h3></div>
      ${dupCount>0? `<div style="display:flex; align-items:center; gap:8px; background:#fff4e5; color:#a8460c; border:1px solid #f5cf9a; border-radius:10px; padding:10px 12px; margin-bottom:12px; font-size:12.5px;">
        <span style="width:16px;height:16px;flex-shrink:0;display:inline-flex;">${iconSized(ICON.warn,16)}</span>
        <span>${dupCount} صف يبدو مكررًا (نفس رقم الجوال أو الهوية موجود مسبقًا في هذا المشروع)</span>
      </div>
      <label style="display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--ink-700); margin-bottom:12px; cursor:pointer;">
        <input type="checkbox" id="skip-dup-checkbox" checked> تجاهل الصفوف المكررة عند الاستيراد
      </label>` : ''}
      <div class="table-wrap" style="max-height:280px; overflow-y:auto;">
        <table class="table">
          <thead><tr><th></th><th>الاسم</th><th>الجوال</th><th>التاريخ</th><th>الوقت</th><th>المشروع</th></tr></thead>
          <tbody>
            ${importedRows.slice(0,80).map(r=>`<tr style="${r._dup?'background:#fff8ef;':''}">
              <td>${r._dup? `<span class="status-badge cancelled" style="white-space:nowrap;">مكرر</span>`:''}</td>
              <td>${escapeHtml(r.name)}</td>
              <td style="direction:ltr;text-align:right">${escapeHtml(r.phone)}</td>
              <td>${escapeHtml(r.date)}</td>
              <td>${escapeHtml(r.time)}</td>
              <td>${r.projectId==='__new__' ? '✚ مشروع جديد' : escapeHtml((projectById(r.projectId)||{}).name || '— غير محدد —')}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <button class="btn btn-primary btn-block" style="margin-top:16px;" onclick="confirmImport()">${ICON.upload}<span>تأكيد استيراد ${importedRows.length} معاينة</span></button>
    </div>
  `;
}
async function confirmImport(){
  let targetId = null;
  const usingNew = importedRows.some(r=>r.projectId==='__new__');
  const batchInput = (document.getElementById('import-batch-name')||{}).value?.trim() || '';
  const skipDupEl = document.getElementById('skip-dup-checkbox');
  const skipDup = skipDupEl ? skipDupEl.checked : true;
  if(usingNew){
    const nameEl = document.getElementById('import-new-name');
    const name = nameEl ? nameEl.value.trim() : '';
    if(!name){ toast('أدخل اسم المشروع الجديد أولًا', true); return; }
    const city = (document.getElementById('import-new-city')||{}).value?.trim() || '';
    const units = Number((document.getElementById('import-new-units')||{}).value) || 0;
    targetId = await addProject({ name, city, units, description:'' });
    toast('تم إنشاء المشروع "'+name+'" وربط البيانات به');
  }
  const defaultBatch = batchInput || (usingNew ? 'الدفعة الأولى' : '');
  let skipped = 0;
  const rows = importedRows
    .filter(r=>{ if(skipDup && r._dup){ skipped++; return false; } return true; })
    .map(r=> ({...r, projectId: r.projectId==='__new__' ? targetId : r.projectId, batch: r.batch || defaultBatch}))
    .filter(r=>r.projectId);
  if(rows.length===0){ toast(skipped? 'كل الصفوف كانت مكررة ولم يتم استيراد شيء' : 'حدد مشروعًا لكل صف أولًا', true); return; }
  await bulkAddViewings(rows);
  importedRows = [];
  toast(skipped? `تم الاستيراد — تم تجاهل ${skipped} صف مكرر` : 'تم استيراد البيانات بنجاح');
  document.getElementById('import-preview').innerHTML='';
  document.getElementById('file-input').value='';
  renderAdminTabContent();
}

/* ---- admin lock ---- */
let guestCalYear = new Date().getFullYear();
let guestCalMonth = new Date().getMonth();
let guestSelectedDay = todayISO();
function shiftGuestMonth(delta){
  let m = guestCalMonth + delta, y = guestCalYear;
  if(m<0){ m=11; y--; } if(m>11){ m=0; y++; }
  guestCalMonth=m; guestCalYear=y; render();
}
function selectGuestDay(iso){ guestSelectedDay = iso; render(); }
function jumpGuestToday(){
  const n = new Date();
  guestCalYear = n.getFullYear(); guestCalMonth = n.getMonth(); guestSelectedDay = todayISO();
  render();
}
function renderGuest(){
  const today = todayISO();
  const now = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate()-now.getDay());
  const weekDates = Array.from({length:7}).map((_,i)=>{ const d=new Date(weekStart); d.setDate(weekStart.getDate()+i); return d.toISOString().slice(0,10); });
  const weekCount = State.viewings.filter(v=>weekDates.includes(v.date)).length;
  const todaysCount = State.viewings.filter(v=>v.date===today).length;

  const { cells, max } = buildCalendarCells(guestCalYear, guestCalMonth, iso=>viewingsOnDate(iso).length);
  const dayCellsHTML = cells.map(d=>{
    if(d===null) return `<div class="day-cell pad"></div>`;
    const iso = `${guestCalYear}-${String(guestCalMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const count = viewingsOnDate(iso).length;
    const isToday = iso===today;
    const isSel = iso===guestSelectedDay;
    return `<div class="day-cell ${isToday?'today':''} ${isSel?'selected':''}" style="${isSel?'':heatBg(count,max)+heatTextColor(count,max)}" onclick="selectGuestDay('${iso}')">
      ${count>0?`<span class="cnt2" style="${isSel?'':heatBadgeStyle(count,max)}">${count}</span>`:''}
      <span>${d}</span>
    </div>`;
  }).join('');

  const dayList = [...viewingsOnDate(guestSelectedDay)].sort((a,b)=>(a.time||'').localeCompare(b.time||''));

  const html = `
    <div class="guest-wrap" style="min-height:100vh; width:100%; display:flex; flex-direction:column; background:var(--canvas);">
      <div class="guest-dots"></div>
      <div class="guest-skyline">
        ${[42,68,52,84,58,76,44,64,50].map(h=>`<div class="b" style="height:${h}px;width:34px;"></div>`).join('')}
      </div>
      <div class="guest-header" style="display:flex; align-items:center; justify-content:space-between; padding:18px 28px; border-bottom:1px solid var(--line); background:var(--paper); flex-wrap:wrap; gap:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="brand-mark" style="width:40px;height:40px;"><img src="${LOGO_SRC}" alt="دار وإعمار"></div>
          <div><b style="font-family:var(--font-head); font-size:15px; color:var(--ink-900); display:block;">دار وإعمار</b><span style="font-size:11.5px; color:var(--ink-500);">جدول المعاينات</span></div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="goto('login')">${ICON.lock}<span>تسجيل دخول الموظفين</span></button>
      </div>

      <div class="guest-main" style="flex:1; display:flex; justify-content:center; padding:40px 20px;">
        <div style="width:100%; max-width:640px;">

          <div style="text-align:center; margin-bottom:30px;">
            <div class="brand-mark" style="width:68px; height:68px; margin:0 auto 16px; box-shadow:var(--shadow-2);"><img src="${LOGO_SRC}" alt="دار وإعمار"></div>
            <div class="hero-eyebrow" style="color:var(--orange-600);">دار وإعمار للتطوير العقاري</div>
            <h1 style="font-family:var(--font-head); font-size:23px; font-weight:800; color:var(--ink-900); margin:8px 0 6px;">جدول المعاينات</h1>
            <p style="font-size:13px; color:var(--ink-500);">تصفّح أي يوم لمعرفة كل من لديه معاينة فيه</p>
          </div>

          <div class="guest-stats">
            <div class="stat-card" style="text-align:center;">
              <div class="stat-icon" style="background:var(--orange-500); color:#fff; margin:0 auto 12px;">${ICON.calendar}</div>
              <div class="num" id="gs-today" style="font-size:24px;">0</div>
              <div class="lbl">معاينة اليوم</div>
            </div>
            <div class="stat-card" style="text-align:center;">
              <div class="stat-icon" style="background:var(--ink-100); color:var(--ink-700); margin:0 auto 12px;">${ICON.clock}</div>
              <div class="num" id="gs-week" style="font-size:24px;">0</div>
              <div class="lbl">معاينات هذا الأسبوع</div>
            </div>
            <div class="stat-card" style="text-align:center;">
              <div class="stat-icon" style="background:var(--orange-100); color:var(--orange-700); margin:0 auto 12px;">${ICON.bldg}</div>
              <div class="num" id="gs-projects" style="font-size:24px;">0</div>
              <div class="lbl">مشاريع فعّالة</div>
            </div>
          </div>

          <div class="panel" style="margin-bottom:18px;">
            <div class="cal-nav">
              <h3>${MONTHS[guestCalMonth]} ${guestCalYear}</h3>
              <div class="cal-nav-btns">
                <button class="icon-btn" onclick="shiftGuestMonth(-1)">${ICON.chevR}</button>
                <button class="btn btn-ghost btn-sm" onclick="jumpGuestToday()">اليوم</button>
                <button class="icon-btn" onclick="shiftGuestMonth(1)">${ICON.chevL}</button>
              </div>
            </div>
            <div class="cal-shell">
              <div class="weekdays">${WEEKDAYS_LETTER.map(w=>`<div>${w}</div>`).join('')}</div>
              <div class="days">${dayCellsHTML}</div>
              <div class="cal-legend"><span>أقل</span><span class="sw" style="background:hsl(109,69%,84%)"></span><span class="sw" style="background:hsl(77,71%,73%)"></span><span class="sw" style="background:hsl(45,73%,63%)"></span><span class="sw" style="background:hsl(13,75%,52%)"></span><span>أكثر</span></div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-head"><h3>معاينات ${fmtDateHuman(guestSelectedDay)}</h3><span>${dayList.length} معاينة</span></div>
            ${(()=>{
              if(!dayList.length) return `<div class="empty-note">لا توجد معاينات مجدولة في هذا اليوم</div>`;
              const projectIds = [...new Set(dayList.map(v=>v.projectId))];
              const grouped = projectIds.length > 1;
              const cardHTML = (v)=>`<div class="appt-row">
                <div class="ap-avatar" style="background:${personColorBg(v.name)};color:${personColorFg(v.name)};">${escapeHtml((v.name||'?').trim().charAt(0)||'?')}</div>
                <div class="ap-info">
                  <div class="ap-name">${escapeHtml(v.name)}</div>
                  <div class="ap-meta">
                    ${(!grouped && projectById(v.projectId))? `<span class="tag proj" style="${projectTagStyle(hashStr(v.projectId))}">${escapeHtml(projectById(v.projectId).name)}</span>`:''}
                    ${v.unit? `<span class="tag unit">وحدة ${escapeHtml(v.unit)}</span>`:''}
                  </div>
                </div>
                <div class="ap-side"><span class="tag time">${escapeHtml(v.time||'')}</span></div>
              </div>`;
              if(!grouped) return dayList.map(cardHTML).join('');
              return projectIds.map(pid=>{
                const p = projectById(pid);
                const rows = dayList.filter(v=>v.projectId===pid);
                return `<div style="margin-bottom:16px; border-right:3px solid ${projectStyle(hashStr(pid)).ink}; padding-right:12px;">
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <span class="tag proj" style="font-size:11.5px; ${projectTagStyle(hashStr(pid))}">${escapeHtml(p?p.name:'مشروع غير معروف')}</span>
                    <span style="font-size:11px; color:var(--ink-300);">${rows.length} معاينة</span>
                  </div>
                  ${rows.map(cardHTML).join('')}
                </div>`;
              }).join('');
            })()}
          </div>

        </div>
      </div>
    </div>
  `;
  document.getElementById('app').innerHTML = html;
  animateCount(document.getElementById('gs-today'), todaysCount);
  animateCount(document.getElementById('gs-week'), weekCount);
  animateCount(document.getElementById('gs-projects'), State.projects.length);
}
function togglePwVisibility(){
  const inp = document.getElementById('login-password');
  const btn = document.querySelector('.pw-toggle');
  if(!inp || !btn) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  btn.innerHTML = show ? ICON.eyeOff : ICON.eye;
}
function renderLogin(){
  const usingFirebaseAuth = State.authMode === 'firebase';
  document.getElementById('app').innerHTML = `
    <div class="login-v2-wrap">
      <div class="login-v2-form-side">
        <div class="login-v2-brand">
          <div class="brand-mark" style="width:44px;height:44px;"><img src="${LOGO_SRC}" alt="دار وإعمار"></div>
          <b>دار وإعمار</b>
        </div>
        <h1>تسجيل الدخول</h1>
        <p class="sub">${usingFirebaseAuth? 'مرحبًا بك، سجّل دخولك للوصول إلى نظام إدارة المعاينات الخاص بموظفي دار وإعمار.' : 'وضع تجريبي — استخدم البيانات الموضّحة أدناه (سيُستبدل بحسابات موظفين حقيقية عند ربط Firebase).'}</p>
        <form id="loginform">
          <div class="lv2-field">
            <label>البريد الإلكتروني</label>
            <div class="input-icon" style="text-align:right;">
              <span class="input-icon-mark">${ICON.mail}</span>
              <input type="email" id="login-email" placeholder="name@darwaemaar.com" autocomplete="username" style="text-align:right;">
            </div>
          </div>
          <div class="lv2-field" style="margin-bottom:8px;">
            <label>كلمة المرور</label>
            <div class="input-icon" style="text-align:right;">
              <span class="input-icon-mark">${ICON.lock}</span>
              <input type="password" id="login-password" placeholder="أدخل كلمة المرور" autocomplete="current-password" style="text-align:right;">
              <button type="button" class="pw-toggle" onclick="togglePwVisibility()" aria-label="إظهار كلمة المرور">${ICON.eye}</button>
            </div>
          </div>
          <div class="lock-err" id="lock-err"></div>
          <button type="submit" class="btn btn-primary" style="margin-top:14px; width:100%; justify-content:center; padding:13px;">${ICON.lock}<span>دخول</span></button>
          <button type="button" class="btn btn-ghost" style="margin-top:10px; width:100%; justify-content:center;" onclick="goto('guest')">رجوع لصفحة الضيوف</button>
        </form>
        ${!usingFirebaseAuth? `<div class="demo-hint">
          <b>بيانات تجريبية للدخول الآن:</b>
          <div>البريد: <span dir="ltr">${escapeHtml(DEMO_EMPLOYEES[0]?.email || '—')}</span></div>
          <div>كلمة المرور: <span dir="ltr">${escapeHtml(DEMO_EMPLOYEES[0]?.password || '—')}</span></div>
        </div>` : ''}
      </div>
      <div class="login-v2-illust">
        <div class="login-v2-buildings">
          ${[70,110,88,130,96].map((h,i)=>`<div class="lv2-b"><svg width="${52}" height="${h}" viewBox="0 0 52 ${h}"><rect width="52" height="${h}" rx="4" fill="url(#lv2g${i})"/><defs><linearGradient id="lv2g${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--orange-500)"/><stop offset="1" stop-color="var(--orange-800,var(--orange-900))"/></linearGradient></defs>
            ${Array.from({length:Math.floor(h/18)}).map((_,r)=>`<rect x="8" y="${12+r*18}" width="8" height="8" rx="1.5" fill="rgba(255,255,255,.55)"/><rect x="28" y="${12+r*18}" width="8" height="8" rx="1.5" fill="rgba(255,255,255,.35)"/>`).join('')}
          </svg></div>`).join('')}
        </div>
        <div class="login-v2-scene">
          <div class="login-v2-card">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
              <span style="width:9px;height:9px;border-radius:50%;background:var(--orange-500);"></span>
              <span style="height:8px; width:70px; border-radius:4px; background:var(--ink-100);"></span>
              <span style="height:8px; width:34px; border-radius:4px; background:var(--orange-100); margin-inline-start:auto;"></span>
            </div>
            ${[0,1,2].map(i=>`<div style="display:flex; align-items:center; gap:8px; padding:8px 0; ${i<2?'border-bottom:1px solid var(--line);':''}">
              <span style="width:26px;height:26px;border-radius:8px; background:${personColorBg('x'+i)}; flex-shrink:0;"></span>
              <span style="display:flex; flex-direction:column; gap:5px; flex:1;">
                <span style="height:7px; width:${60+i*10}%; border-radius:4px; background:var(--ink-100);"></span>
                <span style="height:6px; width:40%; border-radius:4px; background:var(--canvas);"></span>
              </span>
              <span style="height:16px; width:36px; border-radius:20px; background:var(--orange-50); flex-shrink:0;"></span>
            </div>`).join('')}
          </div>
          <div class="login-v2-badge" style="width:54px; height:54px; top:-16px; inset-inline-end:-14px; color:#fff; background:var(--orange-500);">${ICON.check}</div>
          <div class="login-v2-badge" style="width:44px; height:44px; bottom:-12px; inset-inline-start:-16px; color:var(--orange-700);">${ICON.calendar}</div>
        </div>
      </div>
    </div>`;
  document.getElementById('loginform').onsubmit = async (e)=>{
    e.preventDefault();
    const errEl = document.getElementById('lock-err');
    errEl.textContent = '';
    const email = (document.getElementById('login-email').value||'').trim();
    const password = document.getElementById('login-password').value||'';
    if(usingFirebaseAuth){
      try{
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // onAuthStateChanged listener flips State.employeeAuthed and redirects
      }catch(err){
        errEl.textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      }
    } else {
      const match = DEMO_EMPLOYEES.find(u=> u.email.toLowerCase()===email.toLowerCase() && u.password===password);
      if(match){
        State.employeeAuthed = true;
        sessionStorage.setItem('dar_employee_ok','1');
        goto('home');
      } else {
        errEl.textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      }
    }
  };
}
function employeeLogout(){
  State.employeeAuthed = false;
  sessionStorage.removeItem('dar_employee_ok');
  if(State.authMode==='firebase' && typeof firebase!=='undefined' && firebase.auth){
    firebase.auth().signOut().catch(()=>{});
  }
  goto('guest');
}

/* ================= MAIN RENDER ================= */
function render(){
  if(!State.ready){
    document.getElementById('app').innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:var(--ink-300);font-size:13px;">جاري التحميل…</div>`;
    return;
  }
  if(State.route==='guest') renderGuest();
  else if(State.route==='login') renderLogin();
  else if(State.route==='home') renderHome();
  else if(State.route==='projects') renderProjects();
  else if(State.route==='project') renderProjectDetail();
  else if(State.route==='admin') renderAdmin();
  else renderGuest();
}

/* ================= ERROR SAFETY NET =================
   Catches any unexpected runtime error so a single bug can't leave the
   page silently blank/frozen for the person using it. Logs details to the
   console for debugging and shows a small toast instead of crashing. */
window.addEventListener('error', function(e){
  console.error('App error:', e.error || e.message, e);
  try{ toast('حدث خطأ غير متوقع — إذا تكرر، حدّث الصفحة', true); }catch(_){ /* toast itself unavailable */ }
});
window.addEventListener('unhandledrejection', function(e){
  console.error('Unhandled promise rejection:', e.reason);
});

/* ================= INIT ================= */
function safeInit(){
  try{
    handleHash();
  }catch(e){
    console.error('handleHash failed, falling back to guest view:', e);
    State.route = 'guest';
  }
  initStore().catch(e=>{
    console.error('initStore failed, falling back to local storage:', e);
    try{ fallbackLocal(); }catch(_e){ /* last resort: leave loading state */ }
  });
}
safeInit();
