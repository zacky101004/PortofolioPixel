// ─── Skills Data: Muhammad Zacky ──────────────────────────────────────────────
// Realistic, verified skills without fake percentages or unsubstantiated claims.

import type { Skill } from '../types';

export const skills: Skill[] = [
  // ─── A. Backend Development ──────────────────────────────────────────────
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend Development',
    description: 'Framework PHP utama untuk arsitektur MVC, routing, controller, dan pembuatan REST API modular.',
    statusBadge: 'Hands-on Experience',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Backend Development',
    description: 'Pemrograman backend server-side, pengolahan logika data, dan integrasi database.',
    statusBadge: 'Core Backend',
  },
  {
    id: 'rest-api',
    name: 'REST API',
    category: 'Backend Development',
    description: 'Perancangan arsitektur endpoint API, HTTP status codes, dan format pertukaran data JSON.',
    statusBadge: 'Hands-on Experience',
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'Backend Development',
    description: 'Format serialisasi data standar untuk payload request dan response API backend-frontend.',
    statusBadge: 'Standard Tool',
  },
  {
    id: 'laravel-sanctum',
    name: 'Laravel Sanctum',
    category: 'Backend Development',
    description: 'Penerapan autentikasi token API yang aman untuk SPA dan mobile client.',
    statusBadge: 'Applied in Project',
  },
  {
    id: 'eloquent-orm',
    name: 'Eloquent ORM',
    category: 'Backend Development',
    description: 'Query database ekspresif, relationship mapping (one-to-many, many-to-many), dan migration.',
    statusBadge: 'Hands-on Experience',
  },
  {
    id: 'middleware',
    name: 'Middleware',
    category: 'Backend Development',
    description: 'Penyaringan request, verifikasi session/token, serta pengamanan route sebelum dieksekusi.',
    statusBadge: 'Applied in Project',
  },
  {
    id: 'api-validation',
    name: 'API Validation',
    category: 'Backend Development',
    description: 'Validasi form request untuk menjamin integritas dan keamanan data masukan sebelum diproses.',
    statusBadge: 'Hands-on Experience',
  },
  {
    id: 'auth-rbac',
    name: 'Auth & Authorization',
    category: 'Backend Development',
    description: 'Manajemen login, hashing password, dan pembatasan hak akses berbasis role pengguna (RBAC).',
    statusBadge: 'Applied in Project',
  },

  // ─── B. Frontend Development ─────────────────────────────────────────────
  {
    id: 'react',
    name: 'React',
    category: 'Frontend Development',
    description: 'Pengembangan antarmuka komponen modular, hooks state management, dan SPA interaktif.',
    statusBadge: 'Core Frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend Development',
    description: 'Bahasa inti interaktivitas web, manipulasi DOM, async/await, dan konsumsi REST API.',
    statusBadge: 'Core Language',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend Development',
    description: 'Static typing untuk kode yang lebih terstruktur, aman, dan mudah di-maintain.',
    statusBadge: 'Applied & Practiced',
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend Development',
    description: 'Struktur semantik dokumen web untuk aksesibilitas dan fondasi aplikasi yang kokoh.',
    statusBadge: 'Core Markup',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend Development',
    description: 'Styling responsif dengan Flexbox, Grid, CSS Variables, dan animasi interaktif.',
    statusBadge: 'Core Styling',
  },

  // ─── C. Database Management ──────────────────────────────────────────────
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database Management',
    description: 'Manajemen sistem database relasional, perancangan skema, indexing, dan relasi tabel.',
    statusBadge: 'Hands-on Experience',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database Management',
    description: 'Pembuatan query DDL/DML, JOIN multi-tabel, filtering data, dan aggregasi.',
    statusBadge: 'Core Language',
  },
  {
    id: 'database-design',
    name: 'Database Design',
    category: 'Database Management',
    description: 'Perancangan ERD (Entity Relationship Diagram), normalisasi data, dan integritas referensial.',
    statusBadge: 'Practiced',
  },
  {
    id: 'xampp',
    name: 'XAMPP',
    category: 'Database Management',
    description: 'Lingkungan server lokal Apache & MySQL untuk pengujian dan development aplikasi.',
    statusBadge: 'Development Environment',
  },

  // ─── D. UI/UX Design ─────────────────────────────────────────────────────
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX Design',
    description: 'Desain antarmuka grafis, perancangan layout, komponen desain sistem, dan prototyping.',
    statusBadge: 'Design Tool',
  },
  {
    id: 'wireframing',
    name: 'Wireframing',
    category: 'UI/UX Design',
    description: 'Penyusunan kerangka kasar tampilan aplikasi untuk memetakan hierarki informasi dan alur navigasi.',
    statusBadge: 'Design Process',
  },
  {
    id: 'prototyping',
    name: 'Prototyping',
    category: 'UI/UX Design',
    description: 'Pembuatan simulasi interaksi antarmuka yang dapat diklik untuk uji pengalaman pengguna.',
    statusBadge: 'Design Process',
  },
  {
    id: 'layout-design',
    name: 'Layout & UI Design',
    category: 'UI/UX Design',
    description: 'Penerapan prinsip visual hierarchy, spacing, kontras warna, dan konsistensi desain sistem.',
    statusBadge: 'Practiced',
  },
  {
    id: 'ux-fundamentals',
    name: 'UX Fundamentals',
    category: 'UI/UX Design',
    description: 'Prinsip kemudahan navigasi, kejelasan umpan balik aksi, dan pemahaman alur kerja pengguna.',
    statusBadge: 'Design Fundamentals',
  },

  // ─── E. Data Mining & Machine Learning ───────────────────────────────────
  {
    id: 'python',
    name: 'Python',
    category: 'Data Mining & Machine Learning',
    description: 'Bahasa pemrograman untuk komputasi analitik, manipulasi dataset, dan pipeline machine learning.',
    statusBadge: 'Academic & Studied',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Data Mining & Machine Learning',
    description: 'Library manipulasi struktur data DataFrame, filtering, pembersihan missing value, dan agregasi.',
    statusBadge: 'Academic & Studied',
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'Data Mining & Machine Learning',
    description: 'Penerapan algoritma machine learning, feature scaling, model fitting, dan metrik evaluasi.',
    statusBadge: 'Academic & Studied',
  },
  {
    id: 'data-preprocessing',
    name: 'Data Preprocessing',
    category: 'Data Mining & Machine Learning',
    description: 'Pembersihan noise data, normalisasi fitur numerik, encoding data kategorikal, dan feature selection.',
    statusBadge: 'Academic & Studied',
  },
  {
    id: 'kmeans',
    name: 'K-Means Clustering',
    category: 'Data Mining & Machine Learning',
    description: 'Metode unsupervised learning untuk segmentasi dan pengelompokan data berdasarkan karakteristik kemiripan.',
    statusBadge: 'Academic & Research',
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    category: 'Data Mining & Machine Learning',
    description: 'Algoritma ensemble tree untuk tugas klasifikasi data multi-fitur dengan evaluasi performa model.',
    statusBadge: 'Academic & Research',
  },

  // ─── F. Creative Design & Digital Content ────────────────────────────────
  {
    id: 'canva',
    name: 'Canva',
    category: 'Creative Design & Digital Content',
    description: 'Pembuatan materi grafis digital, publikasi media sosial, slide presentasi, dan materi visual.',
    statusBadge: 'Content Tool',
  },
  {
    id: 'social-media-design',
    name: 'Social Media Design',
    category: 'Creative Design & Digital Content',
    description: 'Perancangan infografis dan feed visual informatif untuk kebutuhan publikasi digital.',
    statusBadge: 'Creative Practice',
  },
  {
    id: 'visual-branding',
    name: 'Visual & Digital Branding',
    category: 'Creative Design & Digital Content',
    description: 'Eksplorasi identitas visual, tone warna, tipografi, dan komposisi komunikasi media.',
    statusBadge: 'Creative Practice',
  },

  // ─── G. Tools & Workflow ─────────────────────────────────────────────────
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools & Workflow',
    description: 'Pengujian endpoint REST API, inspeksi payload request/response, dan verifikasi header auth.',
    statusBadge: 'Testing Tool',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools & Workflow',
    description: 'Version control system untuk pelacakan kode, branch management, dan repositori proyek.',
    statusBadge: 'Workflow Tool',
  },
  {
    id: 'vscode',
    name: 'VS Code & Jupyter',
    category: 'Tools & Workflow',
    description: 'Code editor utama dan interactive notebook untuk eksplorasi data science serta web development.',
    statusBadge: 'Primary Workspace',
  },
];
