# PRD --- Personal Portfolio Website

**Version:** 1.0\
**Project Type:** Personal Portfolio Website\
**Owner:** Nadiah Ajeng Widjayanti

------------------------------------------------------------------------

# 1. Overview

Website portfolio modern yang bertujuan untuk memperkenalkan diri
sebagai mahasiswa Informatika sekaligus menampilkan pengalaman, project,
skill, dan pencapaian secara profesional.

Target utama website ini adalah recruiter, HR, mentor, dosen, serta
calon rekan kerja yang ingin mengetahui kemampuan teknis dan pengalaman
organisasi.

Website harus memiliki desain modern, responsif, cepat diakses, dan
mudah dipelihara tanpa memerlukan backend.

------------------------------------------------------------------------

# 2. Goals

## Primary Goals

-   Membangun personal branding.
-   Menampilkan project secara profesional.
-   Mempermudah recruiter melihat pengalaman.
-   Menjadi pusat semua informasi profesional.

## Secondary Goals

-   Menampilkan kemampuan frontend.
-   Mempermudah pengunjung menghubungi pemilik.
-   Menjadi landing page untuk GitHub, LinkedIn, dan CV.

------------------------------------------------------------------------

# 3. Target Users

## Recruiter

Mencari informasi singkat mengenai kandidat.

## HR

Melihat CV, pengalaman, skill, dan project.

## Dosen / Mentor

Melihat perkembangan project dan pengalaman.

## Teman / Client

Melihat hasil karya serta cara menghubungi.

------------------------------------------------------------------------

# 4. Tech Stack

## Frontend

-   Next.js 15
-   React 19
-   TypeScript
-   Tailwind CSS v4
-   shadcn/ui
-   Motion
-   Lucide React
-   next-themes

## Deployment

-   Vercel

## Contact Form

-   EmailJS atau Formspree

------------------------------------------------------------------------

# 5. Sitemap

``` text
/
│
├── Home
├── About
├── Skills
├── Experience
├── Projects
├── Certificates
├── Contact
└── Resume
```

Semua berada dalam satu halaman (Single Page Application) dengan
navigasi smooth scroll.

------------------------------------------------------------------------

# 6. Features

## Home

-   Nama
-   Foto
-   Role
-   Tagline
-   Download CV
-   Contact
-   Social Media

## About

-   Deskripsi singkat
-   Pendidikan
-   Fokus belajar
-   Minat bidang teknologi

## Skills

### Languages

-   Java
-   JavaScript
-   TypeScript
-   Python
-   Go
-   SQL

### Frontend

-   React
-   Next.js
-   Tailwind CSS
-   HTML
-   CSS

### Backend

-   Laravel
-   Express

### Database

-   MySQL
-   PostgreSQL

### Tools

-   Git
-   GitHub
-   Docker
-   Figma
-   VS Code

## Experience

Timeline berisi:

-   Position
-   Organization
-   Description
-   Date

## Projects

Setiap project menampilkan:

-   Thumbnail
-   Title
-   Description
-   Tech Stack
-   GitHub
-   Live Demo

## Project Detail

-   Banner
-   Screenshot
-   Deskripsi lengkap
-   Permasalahan
-   Solusi
-   Tech Stack
-   GitHub
-   Live Demo
-   Fitur utama

## Certificates

-   Grid gallery
-   Preview sertifikat

## Resume

-   Preview CV
-   Download CV

## Contact

Form:

-   Name
-   Email
-   Message

Tautan:

-   LinkedIn
-   GitHub
-   Email

------------------------------------------------------------------------

# 7. Navigation

Navbar sticky.

Menu:

-   Home
-   About
-   Skills
-   Projects
-   Experience
-   Certificates
-   Contact

Desktop menggunakan navbar horizontal, sedangkan mobile menggunakan
hamburger menu.

------------------------------------------------------------------------

# 8. UI Style

## Theme

-   Minimal
-   Modern
-   Developer Style
-   Professional

## Color Palette

  Element      Color
  ------------ -----------
  Background   `#0F172A`
  Primary      `#6366F1`
  Secondary    `#8B5CF6`
  Accent       `#38BDF8`
  Text         `#F8FAFC`

## Typography

-   Heading: Geist
-   Body: Inter

## Border Radius

16px

## Animation

-   Fade
-   Slide
-   Scale
-   Hover
-   Light Parallax

------------------------------------------------------------------------

# 9. Responsive

Support:

-   Mobile
-   Tablet
-   Laptop
-   Desktop

------------------------------------------------------------------------

# 10. Performance Goals

-   Lighthouse Score ≥ 95
-   FCP \< 1.5 detik
-   SEO ≥ 95
-   Accessibility ≥ 95

------------------------------------------------------------------------

# 11. Non-Functional Requirements

-   Dark & Light Mode
-   SEO Friendly
-   Semantic HTML
-   Mudah di-maintain
-   Mudah menambah project baru
-   Tidak memerlukan backend

------------------------------------------------------------------------

# 12. Folder Structure

``` text
src/
│
├── app/
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── certificates/
│   ├── contact/
│   ├── footer/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── certificates.ts
│   └── skills.ts
│
├── hooks/
├── lib/
├── public/
├── styles/
└── types/
```

------------------------------------------------------------------------

# 13. Future Enhancements (v2)

-   Multi-language (Indonesia & English)
-   Blog menggunakan MDX
-   GitHub Statistics
-   Spotify Now Playing
-   Project Search
-   Project Filter
-   AI Assistant
-   Visitor Analytics
