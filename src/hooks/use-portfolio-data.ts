import initialPortfolioData from "@/data/portfolio.json";
import { SkillCategoryGroup, Experience, Project, Certificate } from "@/types";

/**
 * Data profil pribadi pemilik portofolio.
 */
export interface ProfileData {
  /** Nama lengkap pemilik portofolio. */
  name: string;
  /** Peran atau jabatan profesional, misalnya 'Full Stack Developer'. */
  role: string;
  /** Label/badge tambahan (optional), misalnya 'Open to Work'. */
  badge?: string;
  /** Biografi singkat untuk ditampilkan di bagian Hero. */
  bio: string;
  /** Biografi lengkap (optional) berupa array paragraf untuk halaman About. */
  fullBio?: string[];
  /** URL foto profil (optional). */
  photoUrl?: string;
  /** URL dokumen CV/Resume (optional). */
  cvUrl?: string;
  /** Alamat email untuk dihubungi. */
  email: string;
  /** Tautan ke akun GitHub. */
  github: string;
  /** Tautan ke akun LinkedIn. */
  linkedin: string;
  /** Lokasi tempat tinggal saat ini (optional), misalnya 'Bandung, Indonesia'. */
  location?: string;
  /** Informasi pendidikan terakhir (optional). */
  education?: {
    /** Gelar akademik yang ditempuh. */
    degree: string;
    /** Bidang studi atau fakultas. */
    faculty: string;
    /** Nama universitas/institusi. */
    university: string;
    /** Periode menempuh pendidikan. */
    period: string;
  };
  /** Daftar minat/hobi (optional). */
  interests?: string[];
  /** Poin-poin sorotan/prestasi utama (optional). */
  highlights?: { label: string; desc: string }[];
}

/**
 * Struktur data lengkap portofolio yang dibaca dari file JSON.
 */
export interface PortfolioData {
  /** Informasi profil pemilik portofolio. */
  profile: ProfileData;
  /** Daftar keahlian yang terkelompokkan. */
  skills: SkillCategoryGroup[];
  /** Daftar riwayat pengalaman. */
  experience: Experience[];
  /** Daftar proyek portofolio. */
  projects: Project[];
  /** Daftar sertifikat yang diraih. */
  certificates: Certificate[];
}

/**
 * Custom hook untuk mengakses data portofolio.
 * Saat ini mengembalikan data statis yang diimpor dari file JSON,
 * beserta state loading, saving, dan error untuk kebutuhan di masa mendatang.
 * 
 * @returns Objek yang berisi data portofolio, status loading, status saving, dan error.
 */
export function usePortfolioData() {
  return {
    data: initialPortfolioData as unknown as PortfolioData,
    loading: false,
    saving: false,
    error: null,
  };
}

