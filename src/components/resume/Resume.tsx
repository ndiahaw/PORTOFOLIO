"use client";

import * as React from "react";
import { Download, FileText, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Komponen Resume Section.
 * Menampilkan kartu CTA (Call to Action) khusus untuk mengunduh Curriculum Vitae (CV) atau resume format PDF terbaru.
 * Dilengkapi dengan poin-poin highlight ringkasan kualifikasi profesional.
 * 
 * @returns Struktur section Resume portofolio.
 */
export function Resume() {
  const { data } = usePortfolioData();
  const resumeUrl = data.profile?.cvUrl || "/uploads/1783169867284-nadiah_ajeng_widjayanti_cv.pdf";

  return (
    <section id="resume" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border bg-gradient-to-br from-card via-card/90 to-muted/50 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          <CardContent className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Curriculum Vitae</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                    Siap Berkolaborasi & Memulai Karir Profesional
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Lihat ringkasan kualifikasi, riwayat akademik, dan rekam jejak proyek saya secara lengkap dalam dokumen Curriculum Vitae (CV) resmi.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-foreground/90 font-medium">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>S1 Informatika</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Spesialis React & Laravel</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Pengalaman Asisten Dosen & Leadership HIMA IF</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Desain Responsif & Optimasi SEO</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-xl gap-2 font-semibold shadow-lg shadow-primary/25">
                      <Download className="h-5 w-5" />
                      <span>Download CV PDF</span>
                    </Button>
                  </a>

                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="rounded-xl gap-2 font-semibold">
                      <span>Preview Dokumen</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Visual Icon / Badge */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-8 rounded-3xl bg-gradient-to-tr from-primary/15 via-secondary/10 to-accent/15 border border-border/80 flex flex-col items-center justify-center text-center space-y-4 shadow-inner">
                  <div className="p-5 rounded-2xl bg-gradient-to-tr from-primary to-secondary text-white shadow-xl shadow-primary/30">
                    <FileText className="h-12 w-12" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg block">CV Resmi v1.0</span>
                    <span className="text-xs text-muted-foreground">Format PDF Terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Updated 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
