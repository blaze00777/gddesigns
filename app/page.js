"use client";
import { useState, useEffect } from "react";

// ============================================================
// TRANSLATIONS
// ============================================================
const T = {
  ka: {
    brand: "design.ge",
    gallery: "გალერეა",
    about: "ჩვენ შესახებ",
    login: "შესვლა",
    register: "რეგისტრაცია",
    logout: "გასვლა",
    upload: "+ ატვირთვა",
    search: "ძიება...",
    all: "ყველა",
    hero_tag: "Creative Portfolio",
    hero_title1: "დიზაინი, რომელიც",
    hero_title2: "საუბრობს",
    hero_sub: "ბრენდინგი, UI/UX, სოციალური მედია და სხვა — ყველა პროექტი ერთ ადგილას",
    stat_projects: "პროექტი",
    stat_likes: "ლაიქი",
    stat_cats: "კატეგორია",
    not_found: "დიზაინი ვერ მოიძებნა",
    cta_title: "გინდა ლაიქების დადება?",
    cta_sub: "შექმენი ანგარიში — სრულიად უფასოდ",
    cta_btn: "→ რეგისტრაცია",
    name: "სახელი",
    email: "ელ-ფოსტა",
    password: "პაროლი",
    name_ph: "შენი სახელი",
    fill_all: "შეავსე ყველა ველი",
    wrong_creds: "არასწორი ელ-ფოსტა ან პაროლი",
    email_taken: "ეს ელ-ფოსტა უკვე გამოყენებულია",
    login_btn: "→ შესვლა",
    register_btn: "→ რეგისტრაცია",
    admin_hint: "ადმინი: admin@design.ge / admin123",
    edit_design: "დიზაინის რედაქტირება",
    new_design: "ახალი დიზაინი",
    title_label: "სათაური",
    title_ph: "დიზაინის სათაური",
    cat_label: "კატეგორია",
    img_label: "სურათის URL",
    img_ph: "https://...",
    desc_label: "აღწერა",
    desc_ph: "მოკლე აღწერა...",
    update_btn: "→ განახლება",
    add_btn: "→ დამატება",
    about_tag: "ჩვენ შესახებ",
    about_title: "კრეატიული სტუდია",
    about_collab: "→ დაიწყე თანამშრომლობა",
    footer: "ყველა უფლება დაცულია",
    admin_label: "ADMIN",
    services: [
      ["ბრენდინგი", "ლოგო, ვიზუალური იდენტობა, ფირმული სტილი — ყველაფერი ძლიერი ბრენდისთვის."],
      ["UI/UX", "მობაილ და ვებ ინტერფეისები, პროტოტიპები, User Experience დიზაინი."],
      ["სოციალური მედია", "Facebook, Instagram, TikTok — კონტენტი რომელიც ყურადღებას იქცევს."],
      ["Print", "პოსტერები, ბანერები, ბიზნეს ბარათები — ფიზიკური სამყაროსთვის."],
    ],
  },
  en: {
    brand: "design.ge",
    gallery: "Gallery",
    about: "About",
    login: "Login",
    register: "Register",
    logout: "Logout",
    upload: "+ Upload",
    search: "Search...",
    all: "All",
    hero_tag: "Creative Portfolio",
    hero_title1: "Design that",
    hero_title2: "speaks",
    hero_sub: "Branding, UI/UX, Social Media and more — all projects in one place",
    stat_projects: "Projects",
    stat_likes: "Likes",
    stat_cats: "Categories",
    not_found: "No designs found",
    cta_title: "Want to like designs?",
    cta_sub: "Create an account — completely free",
    cta_btn: "→ Register",
    name: "Name",
    email: "Email",
    password: "Password",
    name_ph: "Your name",
    fill_all: "Please fill all fields",
    wrong_creds: "Wrong email or password",
    email_taken: "This email is already taken",
    login_btn: "→ Login",
    register_btn: "→ Register",
    admin_hint: "Admin: admin@design.ge / admin123",
    edit_design: "Edit Design",
    new_design: "New Design",
    title_label: "Title",
    title_ph: "Design title",
    cat_label: "Category",
    img_label: "Image URL",
    img_ph: "https://...",
    desc_label: "Description",
    desc_ph: "Short description...",
    update_btn: "→ Update",
    add_btn: "→ Add",
    about_tag: "About Us",
    about_title: "Creative Studio",
    about_collab: "→ Start Collaboration",
    footer: "All rights reserved",
    admin_label: "ADMIN",
    services: [
      ["Branding", "Logo, visual identity, brand style — everything for a strong brand."],
      ["UI/UX", "Mobile and web interfaces, prototypes, User Experience design."],
      ["Social Media", "Facebook, Instagram, TikTok — content that captures attention."],
      ["Print", "Posters, banners, business cards — for the physical world."],
    ],
  },
  ru: {
    brand: "design.ge",
    gallery: "Галерея",
    about: "О нас",
    login: "Войти",
    register: "Регистрация",
    logout: "Выйти",
    upload: "+ Загрузить",
    search: "Поиск...",
    all: "Все",
    hero_tag: "Creative Portfolio",
    hero_title1: "Дизайн, который",
    hero_title2: "говорит",
    hero_sub: "Брендинг, UI/UX, Соцсети и многое другое — все проекты в одном месте",
    stat_projects: "Проектов",
    stat_likes: "Лайков",
    stat_cats: "Категорий",
    not_found: "Дизайны не найдены",
    cta_title: "Хочешь ставить лайки?",
    cta_sub: "Создай аккаунт — совершенно бесплатно",
    cta_btn: "→ Регистрация",
    name: "Имя",
    email: "Эл. почта",
    password: "Пароль",
    name_ph: "Твоё имя",
    fill_all: "Заполните все поля",
    wrong_creds: "Неверный email или пароль",
    email_taken: "Этот email уже используется",
    login_btn: "→ Войти",
    register_btn: "→ Зарегистрироваться",
    admin_hint: "Админ: admin@design.ge / admin123",
    edit_design: "Редактировать дизайн",
    new_design: "Новый дизайн",
    title_label: "Название",
    title_ph: "Название дизайна",
    cat_label: "Категория",
    img_label: "URL изображения",
    img_ph: "https://...",
    desc_label: "Описание",
    desc_ph: "Краткое описание...",
    update_btn: "→ Обновить",
    add_btn: "→ Добавить",
    about_tag: "О нас",
    about_title: "Креативная студия",
    about_collab: "→ Начать сотрудничество",
    footer: "Все права защищены",
    admin_label: "ADMIN",
    services: [
      ["Брендинг", "Логотип, визуальная идентичность, фирменный стиль — всё для сильного бренда."],
      ["UI/UX", "Мобильные и веб-интерфейсы, прототипы, дизайн UX."],
      ["Соцсети", "Facebook, Instagram, TikTok — контент, который привлекает внимание."],
      ["Печать", "Постеры, баннеры, визитки — для физического мира."],
    ],
  },
};

const CATS_BASE = ["Logo & Brand", "UI/UX", "Social Media", "Print / Poster", "სხვა / Other"];

// ============================================================
// STORAGE (localStorage — persists across page reloads)
// ============================================================
const LS = {
  get: (k) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

const DEFAULT_DESIGNS = [
  { id: "d1", title: "Tbilisi Branding", category: "Logo & Brand", img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80", desc: "კომპანიის ვიზუალური იდენტობა / Company visual identity", likes: [], date: "2024-01" },
  { id: "d2", title: "App Interface", category: "UI/UX", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80", desc: "მობაილ აპლიკაციის დიზაინი / Mobile app design", likes: [], date: "2024-02" },
  { id: "d3", title: "Social Pack", category: "Social Media", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", desc: "სოციალური მედიის პაკეტი / Social media package", likes: [], date: "2024-03" },
  { id: "d4", title: "Event Poster", category: "Print / Poster", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80", desc: "ღონისძიების პოსტერი / Event poster design", likes: [], date: "2024-03" },
  { id: "d5", title: "Coffee Brand", category: "Logo & Brand", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80", desc: "კაფეს ბრენდინგი / Cafe branding", likes: [], date: "2024-04" },
  { id: "d6", title: "Dashboard UI", category: "UI/UX", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", desc: "ანალიტიკის დეშბორდი / Analytics dashboard", likes: [], date: "2024-04" },
];

const DEFAULT_USERS = [
  { id: "admin", name: "Admin", email: "admin@design.ge", password: "admin123", role: "admin" },
];

const initStorage = () => {
  if (!LS.get("dp_users")) LS.set("dp_users", DEFAULT_USERS);
  if (!LS.get("dp_designs")) LS.set("dp_designs", DEFAULT_DESIGNS);
};

// ============================================================
// THEME
// ============================================================
const G = {
  bg: "#080808",
  card: "#0f0f0f",
  border: "#1c1c1c",
  accent: "#d4f53c",
  red: "#ff3d5a",
  text: "#efefef",
  muted: "#4a4a4a",
  mono: "'Space Mono', monospace",
  syne: "'Syne', sans-serif",
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${G.bg}; color: ${G.text}; font-family: ${G.mono}; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${G.bg}; }
  ::-webkit-scrollbar-thumb { background: ${G.accent}; border-radius: 2px; }
  ::selection { background: ${G.accent}; color: #000; }
  input, textarea, select {
    font-family: ${G.mono};
    background: #0c0c0c;
    color: ${G.text};
    border: 1px solid ${G.border};
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s;
  }
  input:focus, textarea:focus, select:focus { border-color: ${G.accent}; }
  input::placeholder, textarea::placeholder { color: ${G.muted}; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

  .fade-up { animation: fadeUp 0.4s ease both; }
  .fade-in { animation: fadeIn 0.3s ease both; }

  .card-img { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
  .card-wrap:hover .card-img { transform: scale(1.06); }

  .lang-btn { transition: all 0.15s; }
  .lang-btn:hover { color: ${G.accent}; }

  .cat-btn { transition: all 0.2s; }
  .cat-btn:hover { border-color: ${G.accent}; color: ${G.accent}; }

  .like-btn { transition: all 0.2s; }
  .like-btn:hover { transform: scale(1.05); }

  .nav-link { transition: color 0.15s; }
  .nav-link:hover { color: ${G.accent}; }

  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .grid-cols { grid-template-columns: 1fr !important; }
    .hero-title { font-size: 36px !important; }
    .nav-inner { padding: 0 16px !important; }
    .content-pad { padding-left: 16px !important; padding-right: 16px !important; }
  }
`;

// ============================================================
// SMALL COMPONENTS
// ============================================================
const Btn = ({ children, onClick, variant = "primary", sm, full, disabled, style: sx = {} }) => {
  const base = {
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    border: "none",
    fontFamily: G.mono,
    fontWeight: 700,
    letterSpacing: "0.04em",
    fontSize: sm ? 12 : 13,
    padding: sm ? "7px 14px" : "11px 22px",
    borderRadius: 3,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.18s",
    whiteSpace: "nowrap",
    ...(full ? { width: "100%", justifyContent: "center" } : {}),
    ...sx,
  };
  const v = {
    primary: { background: G.accent, color: "#000" },
    ghost: { background: "transparent", color: G.accent, border: `1px solid ${G.accent}` },
    danger: { background: G.red, color: "#fff" },
    dim: { background: "#161616", color: G.muted, border: `1px solid ${G.border}` },
  };
  return (
    <button onClick={disabled ? undefined : onClick} style={{ ...base, ...v[variant] }}>
      {children}
    </button>
  );
};

const Field = ({ label, value, onChange, type = "text", placeholder, rows }) => (
  <div style={{ marginBottom: 14 }}>
    {label && <div style={{ fontSize: 10, color: G.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>}
    {rows ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        style={{ width: "100%", padding: "10px 13px", fontSize: 13, resize: "vertical" }} />
    ) : (
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: "100%", padding: "10px 13px", fontSize: 13 }} />
    )}
  </div>
);

const Overlay = ({ open, onClose, children, title }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fade-in"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="fade-up"
        style={{ background: G.card, border: `1px solid ${G.border}`, borderRadius: 6, width: "100%", maxWidth: 460, padding: "28px 32px", maxHeight: "92vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <span style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 18 }}>{title}</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: G.muted, cursor: "pointer", fontSize: 22, lineHeight: 1, padding: 4 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

// ============================================================
// AUTH MODAL
// ============================================================
const AuthModal = ({ open, onClose, onLogin, t }) => {
  const [tab, setTab] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const reset = () => { setName(""); setEmail(""); setPass(""); setErr(""); };

  const submit = () => {
    setErr("");
    const users = LS.get("dp_users") || [];
    if (tab === "login") {
      const u = users.find(u => u.email === email && u.password === pass);
      if (!u) return setErr(t.wrong_creds);
      onLogin(u); onClose(); reset();
    } else {
      if (!name || !email || !pass) return setErr(t.fill_all);
      if (users.find(u => u.email === email)) return setErr(t.email_taken);
      const nu = { id: "u" + Date.now(), name, email, password: pass, role: "user" };
      LS.set("dp_users", [...users, nu]);
      onLogin(nu); onClose(); reset();
    }
  };

  const tabStyle = (active) => ({
    flex: 1, padding: "9px", border: "none", cursor: "pointer", fontFamily: G.mono, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em",
    background: active ? G.accent : "transparent", color: active ? "#000" : G.muted, transition: "all 0.18s",
  });

  return (
    <Overlay open={open} onClose={() => { onClose(); reset(); }} title={tab === "login" ? t.login : t.register}>
      <div style={{ display: "flex", border: `1px solid ${G.border}`, borderRadius: 3, overflow: "hidden", marginBottom: 22 }}>
        <button style={tabStyle(tab === "login")} onClick={() => { setTab("login"); reset(); }}>{t.login}</button>
        <button style={tabStyle(tab === "register")} onClick={() => { setTab("register"); reset(); }}>{t.register}</button>
      </div>
      {tab === "register" && <Field label={t.name} value={name} onChange={setName} placeholder={t.name_ph} />}
      <Field label={t.email} value={email} onChange={setEmail} type="email" placeholder="email@example.com" />
      <Field label={t.password} value={pass} onChange={setPass} type="password" placeholder="••••••••" />
      {err && <div style={{ color: G.red, fontSize: 12, marginBottom: 14 }}>⚠ {err}</div>}
      <Btn onClick={submit} full>{tab === "login" ? t.login_btn : t.register_btn}</Btn>
      <div style={{ marginTop: 14, fontSize: 10, color: G.muted, textAlign: "center", letterSpacing: "0.06em" }}>{t.admin_hint}</div>
    </Overlay>
  );
};

// ============================================================
// ADMIN UPLOAD/EDIT MODAL
// ============================================================
const AdminModal = ({ open, onClose, onSave, editing, t }) => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState(CATS_BASE[0]);
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editing) { setTitle(editing.title); setCat(editing.category); setImg(editing.img); setDesc(editing.desc); }
    else { setTitle(""); setCat(CATS_BASE[0]); setImg(""); setDesc(""); }
  }, [editing, open]);

  const save = () => {
    if (!title.trim() || !img.trim()) return;
    const all = LS.get("dp_designs") || [];
    if (editing) {
      LS.set("dp_designs", all.map(d => d.id === editing.id ? { ...d, title, category: cat, img, desc } : d));
    } else {
      LS.set("dp_designs", [...all, { id: "d" + Date.now(), title, category: cat, img, desc, likes: [], date: new Date().toISOString().slice(0, 7) }]);
    }
    onSave();
    onClose();
  };

  return (
    <Overlay open={open} onClose={onClose} title={editing ? t.edit_design : t.new_design}>
      <Field label={t.title_label} value={title} onChange={setTitle} placeholder={t.title_ph} />
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 10, color: G.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{t.cat_label}</div>
        <select value={cat} onChange={e => setCat(e.target.value)} style={{ width: "100%", padding: "10px 13px", fontSize: 13, borderRadius: 4 }}>
          {CATS_BASE.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <Field label={t.img_label} value={img} onChange={setImg} placeholder={t.img_ph} />
      {img && (
        <div style={{ marginBottom: 14 }}>
          <img src={img} alt="preview" style={{ width: "100%", height: 130, objectFit: "cover", borderRadius: 4, border: `1px solid ${G.border}` }} />
        </div>
      )}
      <Field label={t.desc_label} value={desc} onChange={setDesc} placeholder={t.desc_ph} rows={3} />
      <Btn onClick={save} full disabled={!title.trim() || !img.trim()}>
        {editing ? t.update_btn : t.add_btn}
      </Btn>
    </Overlay>
  );
};

// ============================================================
// DESIGN CARD
// ============================================================
const DesignCard = ({ d, user, onLike, onEdit, onDelete }) => {
  const liked = user && (d.likes || []).includes(user.id);
  const count = (d.likes || []).length;

  return (
    <div className="card-wrap fade-up"
      style={{ background: G.card, border: `1px solid ${G.border}`, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 210, overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <img className="card-img" src={d.img} alt={d.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: G.accent, color: "#000", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {d.category}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }} />
      </div>
      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 15, lineHeight: 1.3 }}>{d.title}</div>
        {d.desc && <div style={{ fontSize: 11, color: G.muted, lineHeight: 1.65, flex: 1 }}>{d.desc}</div>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
          <button className="like-btn"
            onClick={() => onLike(d.id)}
            style={{
              background: liked ? "rgba(212,245,60,0.1)" : "transparent",
              border: `1px solid ${liked ? G.accent : G.border}`,
              color: liked ? G.accent : G.muted,
              padding: "5px 13px", borderRadius: 3, cursor: "pointer",
              fontFamily: G.mono, fontSize: 12, display: "flex", alignItems: "center", gap: 5,
            }}>
            {liked ? "♥" : "♡"} {count}
          </button>
          {user?.role === "admin" && (
            <div style={{ display: "flex", gap: 5 }}>
              <Btn sm variant="ghost" onClick={() => onEdit(d)}>✎</Btn>
              <Btn sm variant="danger" onClick={() => onDelete(d.id)}>✕</Btn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================
export default function Page() {
  const [lang, setLang] = useState("ka");
  const [user, setUser] = useState(null);
  const [designs, setDesigns] = useState([]);
  const [cat, setCat] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("gallery");
  const [authOpen, setAuthOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const t = T[lang];

  useEffect(() => {
    initStorage();
    reload();
    const saved = LS.get("dp_currentUser");
    if (saved) setUser(saved);
    const savedLang = LS.get("dp_lang");
    if (savedLang) setLang(savedLang);
  }, []);

  const reload = () => setDesigns(LS.get("dp_designs") || []);

  const login = (u) => { setUser(u); LS.set("dp_currentUser", u); };
  const logout = () => { setUser(null); LS.set("dp_currentUser", null); };

  const switchLang = (l) => { setLang(l); LS.set("dp_lang", l); };

  const like = (id) => {
    if (!user) return setAuthOpen(true);
    const all = LS.get("dp_designs") || [];
    LS.set("dp_designs", all.map(d => {
      if (d.id !== id) return d;
      const likes = d.likes || [];
      return { ...d, likes: likes.includes(user.id) ? likes.filter(l => l !== user.id) : [...likes, user.id] };
    }));
    reload();
  };

  const del = (id) => {
    if (!confirm("Delete this design?")) return;
    LS.set("dp_designs", (LS.get("dp_designs") || []).filter(d => d.id !== id));
    reload();
  };

  const filtered = designs.filter(d =>
    (cat === "all" || d.category === cat) &&
    (!search || d.title.toLowerCase().includes(search.toLowerCase()) || (d.desc || "").toLowerCase().includes(search.toLowerCase()))
  );

  const stats = {
    total: designs.length,
    likes: designs.reduce((a, d) => a + (d.likes?.length || 0), 0),
    cats: [...new Set(designs.map(d => d.category))].length,
  };

  // ---- NAV ----
  const Nav = () => (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(8,8,8,0.96)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${G.border}` }}>
      <div className="nav-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, padding: "0 24px" }}>
        {/* LOGO */}
        <div onClick={() => setPage("gallery")}
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", userSelect: "none" }}>
          <div style={{ width: 26, height: 26, background: G.accent, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#000", fontWeight: 900, fontSize: 14 }}>◈</span>
          </div>
          <span style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>
            design<span style={{ color: G.accent }}>.ge</span>
          </span>
        </div>

        {/* CENTER LINKS */}
        <div style={{ display: "flex", gap: 2 }}>
          {[["gallery", t.gallery], ["about", t.about]].map(([key, label]) => (
            <button key={key} className="nav-link"
              onClick={() => setPage(key)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: G.mono, fontSize: 12, letterSpacing: "0.06em", padding: "8px 14px", borderRadius: 3, color: page === key ? G.accent : G.muted, background: page === key ? "rgba(212,245,60,0.06)" : "transparent" }}>
              {label}
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* LANG */}
          <div style={{ display: "flex", gap: 4 }}>
            {["ka", "en", "ru"].map(l => (
              <button key={l} className="lang-btn"
                onClick={() => switchLang(l)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: G.mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: lang === l ? G.accent : G.muted, padding: "4px 6px" }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {user?.role === "admin" && (
            <Btn sm onClick={() => { setEditing(null); setAdminOpen(true); }}>{t.upload}</Btn>
          )}

          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 12, color: user.role === "admin" ? G.accent : G.text, fontWeight: 700 }} className="hide-mobile">
                {user.name}
                {user.role === "admin" && <span style={{ color: G.red, fontSize: 9, marginLeft: 5 }}>{t.admin_label}</span>}
              </span>
              <Btn sm variant="dim" onClick={logout}>{t.logout}</Btn>
            </div>
          ) : (
            <Btn sm onClick={() => setAuthOpen(true)}>{t.login}</Btn>
          )}
        </div>
      </div>
    </nav>
  );

  // ---- GALLERY PAGE ----
  const GalleryPage = () => (
    <>
      {/* HERO */}
      <div style={{ padding: "90px 24px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,245,60,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(212,245,60,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div className="fade-up" style={{ position: "relative" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.4em", color: G.accent, marginBottom: 22, textTransform: "uppercase", fontWeight: 700 }}>▸ {t.hero_tag}</div>
          <h1 className="hero-title" style={{ fontFamily: G.syne, fontWeight: 800, fontSize: "clamp(38px, 8vw, 76px)", lineHeight: 1.03, marginBottom: 22, letterSpacing: "-0.04em" }}>
            {t.hero_title1}<br /><span style={{ color: G.accent }}>{t.hero_title2}</span>
          </h1>
          <p style={{ color: G.muted, fontSize: 14, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.75 }}>{t.hero_sub}</p>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            {[[stats.total, t.stat_projects], [stats.likes, t.stat_likes], [stats.cats, t.stat_cats]].map(([n, label]) => (
              <div key={label}>
                <div style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 38, color: G.accent, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, color: G.muted, letterSpacing: "0.14em", marginTop: 4, textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="content-pad" style={{ padding: "0 24px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 24 }}>
          <button className="cat-btn"
            onClick={() => setCat("all")}
            style={{ background: cat === "all" ? G.accent : "transparent", color: cat === "all" ? "#000" : G.muted, border: `1px solid ${cat === "all" ? G.accent : G.border}`, padding: "7px 16px", borderRadius: 3, cursor: "pointer", fontFamily: G.mono, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em" }}>
            {t.all}
          </button>
          {CATS_BASE.map(c => (
            <button key={c} className="cat-btn"
              onClick={() => setCat(c)}
              style={{ background: cat === c ? G.accent : "transparent", color: cat === c ? "#000" : G.muted, border: `1px solid ${cat === c ? G.accent : G.border}`, padding: "7px 16px", borderRadius: 3, cursor: "pointer", fontFamily: G.mono, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em" }}>
              {c}
            </button>
          ))}
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={`🔍 ${t.search}`}
            style={{ marginLeft: "auto", padding: "8px 13px", borderRadius: 3, fontSize: 12, width: 200 }} />
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "100px 0", color: G.muted }}>
            <div style={{ fontSize: 52, marginBottom: 18, opacity: 0.3 }}>◈</div>
            <div style={{ fontSize: 13 }}>{t.not_found}</div>
          </div>
        ) : (
          <div className="grid-cols" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 18 }}>
            {filtered.map(d => (
              <DesignCard key={d.id} d={d} user={user} onLike={like}
                onEdit={(d) => { setEditing(d); setAdminOpen(true); }}
                onDelete={del} />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      {!user && (
        <div className="content-pad" style={{ maxWidth: 680, margin: "0 auto 80px", padding: "0 24px" }}>
          <div style={{ background: "#0c0c0c", border: `1px solid ${G.border}`, borderRadius: 6, padding: "40px 40px", textAlign: "center" }}>
            <div style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>{t.cta_title}</div>
            <div style={{ color: G.muted, fontSize: 13, marginBottom: 24 }}>{t.cta_sub}</div>
            <Btn onClick={() => setAuthOpen(true)}>{t.cta_btn}</Btn>
          </div>
        </div>
      )}
    </>
  );

  // ---- ABOUT PAGE ----
  const AboutPage = () => (
    <div className="fade-up content-pad" style={{ maxWidth: 860, margin: "0 auto", padding: "80px 24px 100px" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.4em", color: G.accent, marginBottom: 18, textTransform: "uppercase", fontWeight: 700 }}>▸ {t.about_tag}</div>
      <h1 style={{ fontFamily: G.syne, fontWeight: 800, fontSize: "clamp(32px, 6vw, 58px)", marginBottom: 48, letterSpacing: "-0.03em" }}>{t.about_title}</h1>
      <div className="grid-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        {t.services.map(([title, desc]) => (
          <div key={title} style={{ background: G.card, border: `1px solid ${G.border}`, borderRadius: 5, padding: "22px 24px" }}>
            <div style={{ color: G.accent, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>{title}</div>
            <div style={{ color: G.muted, fontSize: 13, lineHeight: 1.75 }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: 36 }}>
        <Btn onClick={() => setAuthOpen(true)}>{t.about_collab}</Btn>
      </div>
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <div style={{ minHeight: "100vh" }}>
        <Nav />
        {page === "gallery" ? <GalleryPage /> : <AboutPage />}
        <footer style={{ borderTop: `1px solid ${G.border}`, padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: G.syne, fontWeight: 800, fontSize: 15 }}>design<span style={{ color: G.accent }}>.ge</span></span>
          <span style={{ fontSize: 11, color: G.muted }}>© 2024 {t.footer}</span>
          <div style={{ display: "flex", gap: 8 }}>
            {["ka", "en", "ru"].map(l => (
              <button key={l} onClick={() => switchLang(l)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: G.mono, fontSize: 10, fontWeight: 700, color: lang === l ? G.accent : G.muted, letterSpacing: "0.08em" }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </footer>
      </div>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onLogin={login} t={t} />
      <AdminModal open={adminOpen} onClose={() => setAdminOpen(false)} onSave={reload} editing={editing} t={t} />
    </>
  );
}
