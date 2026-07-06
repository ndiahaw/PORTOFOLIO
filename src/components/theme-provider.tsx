"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Komponen ThemeProvider untuk memfasilitasi tema gelap (dark) dan terang (light).
 * Membungkus penyedia tema dari `next-themes` untuk integrasi yang mulus dengan Next.js App Router.
 * 
 * @param props - Properti komponen yang diteruskan ke NextThemesProvider.
 * @param props.children - Elemen React anak yang akan mendapatkan konteks tema.
 * @returns Komponen provider tema NextThemesProvider.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
