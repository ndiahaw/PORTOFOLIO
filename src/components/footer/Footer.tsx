"use client";

import * as React from "react";
import { Mail, ArrowUp, Code2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

/**
 * Komponen Footer (kaki halaman).
 * Menampilkan nama brand, info hak cipta, detail teknologi pembuatan website,
 * tautan ke media sosial, serta tombol interaktif untuk kembali ke atas halaman (Back to Top).
 * 
 * @returns Struktur footer portofolio.
 */
export function Footer() {
  /**
   * Menggulirkan (scroll) jendela browser kembali ke atas halaman dengan efek mulus (smooth).
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-background py-14 text-muted-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-primary to-secondary text-white shadow-sm">
                <Code2 className="h-4 w-4" />
              </div>
              <span>
                Nadiah<span className="text-primary font-extrabold">.dev</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-center md:text-left max-w-md font-normal text-muted-foreground leading-relaxed">
              Designed &amp; engineered with Next.js 15 App Router, Tailwind CSS v4.
            </p>
            <p className="text-xs font-mono text-muted-foreground/80 pt-1">
              &copy; {new Date().getFullYear()} Nadiah Ajeng Widjayanti. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col items-center md:items-end space-y-5">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ndiahaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-foreground hover:text-background transition-all duration-300 shadow-sm hover:scale-110 hover:-translate-y-1"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nadiahajengwidjayanti?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto: ajengwidjayanti@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-muted-foreground/70">100% Recruiter Ready</span>
              <span>•</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="h-8 px-3 text-xs rounded-lg flex items-center gap-1.5 hover:bg-primary/10 hover:text-primary transition-all duration-200 group font-mono"
              >
                <span>TOP</span>
                <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
