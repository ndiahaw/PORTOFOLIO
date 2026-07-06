/**
 * Representasi item menu navigasi pada header/navbar.
 */
export interface NavItem {
  /** Label teks yang ditampilkan pada menu navigasi. */
  label: string;
  /** Link tujuan atau ID elemen HTML jangkar (anchor), misalnya '#about'. */
  href: string;
}

/**
 * Representasi dari keahlian (skill) teknis maupun non-teknis.
 */
export interface Skill {
  /** Nama keahlian, misalnya 'React', 'TypeScript', 'Communication'. */
  name: string;
  /** Kategori dari keahlian tersebut. */
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools" | "Soft Skill";
  /** Nama ikon kustom (optional) yang sesuai dari pustaka ikon. */
  iconName?: string;
}

/**
 * Pengelompokan keahlian berdasarkan kategorinya.
 */
export interface SkillCategoryGroup {
  /** Judul grup kategori yang akan ditampilkan di UI. */
  title: string;
  /** Kunci kategori keahlian. */
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools" | "Soft Skill";
  /** Daftar keahlian yang termasuk dalam kategori ini. */
  skills: Skill[];
}

/**
 * Representasi riwayat pengalaman kerja, organisasi, atau pendidikan.
 */
export interface Experience {
  /** ID unik untuk setiap item pengalaman. */
  id: string;
  /** Nama posisi atau jabatan yang dipegang. */
  position: string;
  /** Nama perusahaan, institusi, atau organisasi. */
  organization: string;
  /** Daftar deskripsi tugas, pencapaian, atau poin penting selama menjabat. */
  description: string[];
  /** Periode atau rentang waktu aktivitas, misalnya '2023 - Sekarang'. */
  date: string;
  /** Lokasi fisik atau status kerja (optional), misalnya 'Jakarta (Remote)'. */
  location?: string;
  /** Tipe pengalaman untuk kategorisasi visual (optional). */
  type?: "work" | "organization" | "education";
}

/**
 * Representasi proyek portofolio yang pernah dikerjakan.
 */
export interface Project {
  /** ID unik untuk proyek. */
  id: string;
  /** Judul proyek. */
  title: string;
  /** Deskripsi singkat/ringkasan proyek untuk tampilan kartu. */
  description: string;
  /** Deskripsi lengkap proyek untuk tampilan detail/modal. */
  fullDescription: string;
  /** Path file gambar thumbnail utama. */
  thumbnail: string;
  /** Path file gambar banner (optional) untuk detail proyek. */
  banner?: string;
  /** Kumpulan tangkapan layar (optional) dari proyek. */
  screenshots?: string[];
  /** Daftar teknologi yang digunakan, misalnya ['Next.js', 'TailwindCSS']. */
  techStack: string[];
  /** Link repository GitHub proyek (optional). */
  github?: string;
  /** Link demo langsung/live website proyek (optional). */
  liveDemo?: string;
  /** Latar belakang masalah yang diselesaikan proyek (optional). */
  problem?: string;
  /** Solusi yang diterapkan pada proyek (optional). */
  solution?: string;
  /** Daftar fitur utama dari proyek (optional). */
  features?: string[];
  /** Menandakan apakah proyek ini ditampilkan sebagai proyek unggulan (optional). */
  featured?: boolean;
}

/**
 * Representasi sertifikat atau penghargaan yang diverifikasi.
 */
export interface Certificate {
  /** ID unik sertifikat. */
  id: string;
  /** Nama/Judul sertifikat atau kompetensi. */
  title: string;
  /** Nama pihak penerbit sertifikat, misalnya 'Google', 'Dicoding'. */
  issuer: string;
  /** Tanggal penerbitan atau perolehan sertifikat. */
  date: string;
  /** Path file gambar sertifikat untuk pratinjau. */
  image: string;
  /** Tautan url untuk memverifikasi keaslian kredensial secara online (optional). */
  credentialUrl?: string;
  /** Deskripsi tambahan atau materi yang dipelajari (optional). */
  description?: string;
}

