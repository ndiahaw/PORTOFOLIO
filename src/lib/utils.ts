import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan beberapa nama kelas Tailwind CSS dan menyelesaikannya secara kondisional.
 * Fungsi ini menggunakan `clsx` untuk menangani logika kelas kondisional dan `tailwind-merge`
 * untuk memastikan kelas-kelas Tailwind yang bertentangan digabungkan dengan benar (kelas terakhir menang).
 * 
 * @param inputs - Kumpulan kelas CSS atau ekspresi kondisional kelas.
 * @returns String kelas CSS gabungan yang bersih dari konflik Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
