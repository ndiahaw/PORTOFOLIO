import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

/**
 * Inisialisasi font Geist Sans dari Google Fonts.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Inisialisasi font Geist Mono dari Google Fonts.
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Inisialisasi font Inter dari Google Fonts.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/**
 * Metadata halaman utama untuk kebutuhan SEO portofolio.
 */
export const metadata: Metadata = {
  title: "Nadiah Ajeng Widjayanti | Informatics Student & Frontend Developer",
  description:
    "Personal portfolio website of Nadiah Ajeng Widjayanti, an Informatics student and Full Stack developer specializing in React, Laravel, and modern web architecture.",
  keywords: [
    "Nadiah Ajeng Widjayanti",
    "Portfolio",
    "Full Stack Developer",
    "Laravel",
    "React",
    "Informatics Student",
  ],
  authors: [{ name: "Nadiah Ajeng Widjayanti" }],
};

/**
 * Komponen layout utama (Root Layout) untuk seluruh aplikasi Next.js.
 * Memuat font global, styling dasar, dan konfigurasi ThemeProvider (tema gelap/terang).
 * 
 * @param props - Properti komponen.
 * @param props.children - Konten halaman anak yang akan dirender di dalam layout.
 * @returns Elemen HTML root (`<html>` dan `<body>`) dengan konfigurasi tema dan font.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
