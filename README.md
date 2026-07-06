# Personal Portfolio Website — Nadiah Ajeng Widjayanti

![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Selamat datang di repositori resmi **Personal Portfolio Website** milik **Nadiah Ajeng Widjayanti**, mahasiswa S1 Informatika di Telkom University dan seorang Full Stack Developer. Website ini dirancang sebagai platform profesional masa kini untuk memperlihatkan profil, latar belakang akademik, riwayat organisasi, keahlian teknis, serta berbagai studi kasus proyek dengan tampilan yang elegan, interaktif, responsif, dan berkecepatan tinggi.

---

## Deskripsi Proyek

**Personal Portfolio Website** dikembangkan sebagai media *personal branding* sekaligus portofolio interaktif yang ditujukan bagi *recruiter*, dosen, calon klien, maupun kolaborator teknologi. 

Website ini mengusung estetika desain web modern (seperti *dark/light mode*, *glassmorphism*, dan *micro-interactions*) yang memberikan kesan eksekutif dan terpercaya. Tidak hanya itu, situs ini dibangun dengan pendekatan **Data-Driven Architecture**, di mana seluruh konten aplikasi dikelola secara terpusat melalui satu berkas JSON tanpa perlu menyentuh logika kode UI sama sekali.

### Fitur Unggulan
- **Desain Visual & Interaksi Premium**: Menggunakan animasi halus dari Framer Motion, efek visual kustom seperti [*SpotlightCursor*](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/ui/effects.tsx#L12), kartu pratinjau dengan [*SpotlightCard*](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/ui/effects.tsx#L85), serta tombol berkilau [*ShinyButton*](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/ui/effects.tsx#L140).
- **Deep Dive Case Study Modal**: Pada setiap kartu proyek di halaman utama, pengguna dapat mengklik tombol *"View Case Study"* untuk membuka dialog modal detail yang merincikan latar belakang masalah (*The Problem*), solusi rekayasa (*Engineering Solution*), teknologi yang digunakan, dan daftar fitur lengkap.
- **Performa & SEO Optimal**: Menggunakan arsitektur terbaru **Next.js 15 App Router** dengan pemuatan halaman instan serta metadata SEO yang terstruktur.
- **Integrasi Curriculum Vitae (CV)**: Tersedia dedicated section [*Resume*](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/resume/Resume.tsx) dan tombol aksi cepat di [*Navbar*](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/navbar/Navbar.tsx) untuk melihat pratinjau maupun mengunduh dokumen CV PDF resmi secara langsung.
- **Dark / Light Mode**: Mendukung peralihan tema gelap dan terang secara mulus tanpa efek kedip (*flicker*) berkat integrasi `next-themes`.
- **Responsif Penuh**: Tata letak yang beradaptasi dengan sempurna pada berbagai resolusi layar, mulai dari smartphone, tablet, hingga monitor desktop beresolusi tinggi.

---

## Tech Stack

Proyek ini dibangun menggunakan teknologi terkini dalam ekosistem pengembangan web modern:

### **1. Core Framework & Language**
- **[Next.js 15 (App Router)](https://nextjs.org/)**: Framework React generasi terbaru untuk pemrosesan *rendering* statis dan dinamis yang super cepat serta struktur *routing* modular.
- **[React 19](https://react.dev/)**: Pustaka antarmuka pengguna (UI) utama dengan dukungan fitur reaktif modern.
- **[TypeScript 5](https://www.typescriptlang.org/)**: Bahasa pemrograman dengan sistem pengetikan statis (*type-safety*) yang kuat untuk mencegah *runtime errors* dan meningkatkan kualitas kode.

### **2. Styling & UI Components**
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Engine *utility-first CSS* versi terbaru yang sangat cepat dengan konfigurasi berbasis `@tailwindcss/postcss`.
- **[Framer Motion](https://www.framer.com/motion/)**: Pustaka animasi handal untuk menghasilkan efek *fade-in*, *slide*, hover, serta transisi antar elemen yang natural.
- **[Radix UI Primitives](https://www.radix-ui.com/)**: Komponen *headless* berbasis aksesibilitas tinggi yang digunakan pada elemen seperti [Dialog (Modal Case Study)](file:///C:/Users/Nadiah/PORTOFOLIO/src/components/ui/dialog.tsx).
- **[Lucide React](https://lucide.dev/)**: Koleksi ikon modern, ringan, dan konsisten di seluruh aplikasi.
- **[next-themes](https://github.com/pacocoursey/next-themes)**: Manajemen tema tampilan (mode gelap dan mode terang).
- **[Class Variance Authority (CVA) & clsx](https://cva.style/)**: Utilitas bantu untuk mengelola varian kelas gaya komponen secara terstruktur via fungsi [`cn()`](file:///C:/Users/Nadiah/PORTOFOLIO/src/lib/utils.ts#L11).

### **3. Quality Assurance & Tooling**
- **ESLint & TypeScript Compiler (`tsc`)**: Memastikan penulisan kode selalu memenuhi standar kebersihan kode dan bebas dari kesalahan tipe data.

---

## Arsitektur & Struktur Direktori

Proyek ini menerapkan pola rancangan **Separation of Concerns (SoC)** dan **Component-Driven Development (CDD)**. Logika antarmuka, sumber data statis, dan utilitas dipisahkan secara rapi di dalam folder `src/`.

```text
PORTOFOLIO/
├── public/                     # Aset statis publik
│   └── uploads/                # Gambar thumbnail, banner proyek, foto profil, dan dokumen CV PDF
├── src/
│   ├── app/                    # Routing utama Next.js App Router
│   │   ├── globals.css         # Variabel tema global dan utilitas Tailwind CSS
│   │   ├── layout.tsx          # Root layout, konfigurasi font, dan pembungkus ThemeProvider
│   │   └── page.tsx            # Halaman beranda utama (merakit seluruh section portofolio)
│   │
│   ├── components/             # Komponen antarmuka modular berdasarkan fitur/section
│   │   ├── navbar/             # Header navigasi statis, scroll spy, dan mobile drawer
│   │   ├── hero/               # Section perkenalan utama, lencana status, dan 3D lanyard/card
│   │   ├── skills/             # Pengelompokan keahlian teknis berdasarkan kategori
│   │   ├── experience/         # Garis waktu (timeline) riwayat kerja, organisasi, & pendidikan
│   │   ├── projects/           # Grid kartu portofolio proyek & dialog modal studi kasus
│   │   ├── certificates/       # Galeri sertifikasi dan kompetensi terverifikasi
│   │   ├── resume/             # Section kartu CTA khusus unduh dokumen Curriculum Vitae
│   │   ├── contact/            # Formulir kontak dan koneksi tautan media sosial
│   │   ├── footer/             # Catatan kaki dan hak cipta
│   │   ├── ui/                 # Komponen dasar atomik (Button, Card, Badge, Dialog, Effects)
│   │   └── theme-provider.tsx  # Context provider untuk penanganan dark/light mode
│   │
│   ├── data/                   # Single Source of Truth untuk manajemen konten
│   │   └── portfolio.json      # Pusat data profil, biografi, skill, riwayat, proyek, & kontak
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   └── use-portfolio-data.ts # Hook pembaca data portfolio.json secara reaktif
│   │
│   ├── lib/                    # Fungsi utilitas pembantu
│   │   └── utils.ts            # Helper penggabungan kelas Tailwind (cn / clsx / tailwind-merge)
│   │
│   └── types/                  # Definisi antarmuka/model data TypeScript
│       └── index.ts            # Interface Project, Experience, Skill, NavItem, Certificate, dll.
│
├── package.json                # Konfigurasi dependensi dan skrip eksekusi
├── tsconfig.json               # Konfigurasi TypeScript compiler
└── README.md                   # Dokumentasi resmi proyek
```

---

## Lisensi & Hak Cipta

© 2026 **Nadiah Ajeng Widjayanti**.  
Dikembangkan dengan menggunakan **Next.js 15**, **React 19**, dan **Tailwind CSS v4**.
