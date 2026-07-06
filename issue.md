# Issue / Project Planning: Personal Portfolio Website (Nadiah Ajeng Widjayanti)

## 📌 Deskripsi Tugas (*Overview*)
Implementasikan website portfolio personal berbasis Single Page Application (SPA) modern dan responsif sesuai dengan spesifikasi pada dokumen PRD (*Product Requirement Document*). Website ini ditujukan untuk membangun *personal branding* profesional kepada recruiter, HR, mentor, dan calon rekan kerja tanpa memerlukan sistem backend yang kompleks.

Dokumen ini merupakan **instruksi tingkat tinggi (*high-level planning*)** yang dirancang agar dapat dieksekusi oleh programmer atau AI model secara terstruktur, rapi, dan modular.

---

## 🛠️ Tech Stack & Dependensi Utama
1. **Framework Utama**: [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
2. **Styling & CSS**: [Tailwind CSS](https://tailwindcss.com/)
3. **UI Component Library**: [shadcn/ui](https://ui.shadcn.com/)
4. **Animation & Motion**: [Framer Motion](https://www.framer.com/motion/) (atau `motion`)
5. **Icons**: [Lucide React](https://lucide.dev/)
6. **Theme Management**: `next-themes` (untuk fitur Dark Mode & Light Mode)
7. **Contact Form Service**: EmailJS atau Formspree

---

## 🏗️ Arsitektur & Rekomendasi Struktur Direktori
Gunakan pemisahan yang jelas antara **Data**, **Komponen UI**, dan **Tipe Data (TypeScript Interfaces)**. Hal ini memungkinkan website mudah dipelihara dan diperbarui kontennya tanpa harus mengubah kode logika atau komponen UI:

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (termasuk ThemeProvider & Font setup)
│   │   ├── page.tsx           # Entrypoint SPA (menggabungkan semua section)
│   │   └── globals.css        # Konfigurasi Tailwind & CSS variabel warna
│   ├── components/
│   │   ├── navbar/            # Sticky Navbar (Desktop Horizontal & Mobile Hamburger)
│   │   ├── hero/              # Section Hero (Intro, Role, CTA Download CV)
│   │   ├── about/             # Section About Me & Pendidikan
│   │   ├── skills/            # Section Skills (Kategori: Languages, Frontend, Backend, dll.)
│   │   ├── experience/        # Section Experience (Timeline organisasi/kerja)
│   │   ├── projects/          # Section Projects Grid & Project Detail (Modal/Drawer)
│   │   ├── certificates/      # Section Certificates Gallery
│   │   ├── resume/            # Section Resume Preview & Download
│   │   ├── contact/           # Section Contact Form & Social Links
│   │   ├── footer/            # Footer
│   │   └── ui/                # Komponen hasil generate shadcn/ui (Button, Card, Dialog, dll.)
│   ├── data/                  # Sumber data statis (decoupled dari UI)
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── certificates.ts
│   ├── types/                 # Definisi TypeScript Interfaces (Project, Experience, Skill, dll.)
│   └── lib/                   # Utility functions (misal: cn dari tailwind-merge)
```

---

## 🚀 Tahapan Implementasi (*Step-by-Step*)

### Phase 1: Inisialisasi Project & Konfigurasi Dasar
1. **Setup Next.js Project**: Inisialisasi project Next.js baru di direktori ini menggunakan App Router, TypeScript, dan Tailwind CSS.
2. **Install Dependensi UI & Animasi**:
   - Install `framer-motion` (atau `motion`) untuk animasi *smooth scroll*, *hover*, dan *parallax* ringan.
   - Install `lucide-react` untuk ikon modern.
   - Install `next-themes` dan setup `ThemeProvider` di `src/app/layout.tsx` untuk mendukung Dark Mode & Light Mode.
3. **Inisialisasi shadcn/ui**: Konfigurasikan `shadcn-ui` dan install komponen dasar yang diperlukan (misalnya `Button`, `Card`, `Dialog/Modal`, `Sheet`, `Input`, `Textarea`).
4. **Konfigurasi Tema & Desain System**:
   - Atur warna kustom di konfigurasi Tailwind sesuai PRD: Background (`#0F172A`), Primary (`#6366F1`), Secondary (`#8B5CF6`), Accent (`#38BDF8`), Text (`#F8FAFC`).
   - Atur font **Geist** untuk Heading dan **Inter** untuk Body.
   - Set default *border radius* ke `16px`.

### Phase 2: Arsitektur Data & Tipe Data (TypeScript)
1. **Definisikan Tipe Data (`src/types/`)**: Buat interface untuk `Project`, `Experience`, `SkillCategory`, `Certificate`, dan `NavItem`.
2. **Buat File Data Statis (`src/data/`)**:
   - Isi file data berdasarkan konten di spesifikasi PRD (Daftar skill seperti Java, TS, Next.js, Laravel; daftar tool seperti Git, Docker, Figma; struktur data timeline pengalaman; dan struktur data project beserta detailnya).
   - Memisahkan data ini akan memudahkan penambahan project baru di masa depan tanpa menyentuh komponen UI.

### Phase 3: Navigasi & Root Layout
1. **Sticky Navbar**: Buat navigasi atas yang selalu *sticky*. Implementasikan navigasi *smooth scroll* antar section (`#home`, `#about`, `#skills`, `#experience`, `#projects`, `#certificates`, `#contact`).
2. **Responsive Menu**: Gunakan menu horizontal untuk layar Desktop/Laptop dan Hamburger Menu (menggunakan komponen `Sheet` atau drawer dari shadcn) untuk layar Mobile/Tablet.
3. **Theme Toggle**: Tambahkan tombol pengubah tema (Dark/Light) di navbar dengan transisi yang halus.

### Phase 4: Pengembangan Komponen Section (SPA)
Implementasikan setiap section di dalam satu halaman utama (`src/app/page.tsx`) secara berurutan:
1. **Hero Section**: Menampilkan Foto, Nama, Role, Tagline, tombol CTA "Download CV", dan tautan cepat ke Social Media.
2. **About Section**: Deskripsi singkat profil, riwayat pendidikan, fokus belajar, dan minat di bidang teknologi.
3. **Skills Section**: Tampilkan skill dalam bentuk *grid* atau *badge* yang dikelompokkan berdasarkan kategori (Languages, Frontend, Backend, Database, Tools).
4. **Experience Section**: Implementasikan desain **Timeline** vertikal/horizontal untuk menampilkan Posisi, Organisasi, Deskripsi, dan Tanggal.
5. **Projects Section & Detail**:
   - Tampilkan kartu (*project cards*) berisi Thumbnail, Judul, Deskripsi singkat, Tech Stack badges, serta link GitHub & Live Demo.
   - **Project Detail**: Ketika kartu diklik, buka Modal/Dialog (dari shadcn/ui) yang menampilkan informasi lengkap: Banner, Screenshot, Permasalahan & Solusi, Fitur Utama, dan Tech Stack.
6. **Certificates Section**: Grid gallery yang menampilkan *preview* sertifikat (dapat diperbesar saat diklik).
7. **Resume Section**: Preview ringkas CV dan tombol untuk mengunduh dokumen PDF CV.
8. **Contact Section**:
   - Buat formulir kontak (Nama, Email, Pesan) yang diintegrasikan dengan **EmailJS** atau **Formspree** agar pesan langsung masuk ke email pemilik tanpa backend server.
   - Sertakan tautan sosial profesional (LinkedIn, GitHub, Email).

### Phase 5: Animasi, Responsivitas, & Optimasi Performa
1. **Framer Motion Integration**:
   - Berikan efek *fade-in* dan *slide-up* saat elemen masuk ke dalam layar (*scroll triggered animations*).
   - Tambahkan efek *hover* interaktif pada kartu project, tombol, dan ikon skill.
2. **Verifikasi Responsivitas**: Uji tampilan pada resolusi Mobile, Tablet, Laptop, dan Desktop untuk memastikan layout tidak pecah dan mudah dibaca.
3. **Optimasi SEO & Performa (Lighthouse ≥ 95)**:
   - Gunakan komponen `<Image />` bawaan Next.js dengan kompresi dan *lazy loading* untuk gambar project/sertifikat agar FCP (First Contentful Paint) < 1.5 detik.
   - Pastikan struktur HTML semantik (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h3>`).
   - Tambahkan meta tags dan deskripsi untuk keperluan SEO.

---

## ✅ Kriteria Penerimaan (*Definition of Done*)
- [ ] Project berhasil di-build tanpa error TypeScript maupun ESLint.
- [ ] Seluruh 7 section navigasi utama (Home, About, Skills, Projects, Experience, Certificates, Contact) dapat diakses dalam 1 halaman dengan *smooth scroll*.
- [ ] Fitur **Dark Mode** dan **Light Mode** berjalan normal dengan skema warna yang sesuai standar PRD.
- [ ] Komponen UI menggunakan pola desain modern, rapi, dan responsif di semua ukuran layar (Mobile hingga Desktop).
- [ ] Detail Project dapat dilihat melalui Modal/Dialog tanpa berpindah halaman.
- [ ] Form kontak berfungsi atau telah dikonfigurasikan dengan integrasi EmailJS/Formspree.
- [ ] Performa website memenuhi standar tinggi (Lighthouse Score ≥ 95, SEO & Accessibility ≥ 95).
- [ ] Konten data (project, skill, pengalaman) terisolasi di folder `src/data/` sehingga sangat mudah diperbarui.
