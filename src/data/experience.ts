// ─── Experience Data: Muhammad Zacky ──────────────────────────────────────────

import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-kemenag-kampar',
    title: 'Backend Developer (Kerja Praktik)',
    organization: 'Kementerian Agama Kabupaten Kampar — Seksi Pendidikan Madrasah (Penmad)',
    period: 'Kerja Praktik',
    description: 'Melaksanakan kerja praktik dengan berkontribusi langsung dalam perancangan dan pengembangan backend SIPELMAD (Sistem Pelaporan Madrasah), sistem berbasis web untuk digitalisasi rekapitulasi data madrasah.',
    outcomes: [
      'Menganalisis kebutuhan sistem dan alur pelaporan administrasi di lingkungan instansi kementerian',
      'Mengembangkan arsitektur REST API modular menggunakan framework Laravel dan PHP',
      'Merancang skema dan relasi basis data MySQL untuk data entitas madrasah dan laporan bulanan',
      'Mengimplementasikan sistem autentikasi token aman dengan Laravel Sanctum serta pembatasan akses berbasis peran pengguna (RBAC)',
      'Melakukan pengujian komprehensif seluruh endpoint API menggunakan Postman untuk menjamin keandalan fungsional',
      'Menerapkan validasi data form request ketat dan menyusun dokumentasi alur sistem',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Laravel Sanctum', 'Postman', 'XAMPP'],
    type: 'internship',
  },
  {
    id: 'exp-kkn-2026',
    title: 'Pengabdian Masyarakat — Kuliah Kerja Nyata (KKN)',
    organization: 'Desa Teluk Lancang, Kec. Sungai Mandau, Kab. Siak, Riau',
    period: '2026',
    description: 'Mengikuti program pengabdian kepada masyarakat yang berfokus pada pilar pendidikan, sosial kemasyarakatan, pelestarian lingkungan, dan dukungan administrasi desa.',
    outcomes: [
      'Mendampingi pembelajaran anak-anak desa dalam mata pelajaran Matematika, Bahasa Inggris, dan bimbingan mengaji',
      'Mendukung aktivitas pengajaran dan penguatan karakter pada pendidikan anak usia dini (PAUD)',
      'Mengorganisasi kegiatan gotong royong kebersihan lingkungan bersama perangkat desa dan warga setempat',
      'Membantu efisiensi pencatatan data administratif dan pelayanan informasi di kantor desa',
      'Melatih kemampuan komunikasi publik, kepekaan sosial, kolaborasi tim multidisiplin, dan pemecahan masalah di lapangan',
    ],
    technologies: ['Teamwork', 'Public Communication', 'Problem Solving', 'Social Leadership', 'Community Service'],
    type: 'organization',
  },
];
