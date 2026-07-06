"use client";

import * as React from "react";
import { useState } from "react";
import { Award, Calendar, ExternalLink, Sparkles, ZoomIn, CheckCircle2 } from "lucide-react";
import { Certificate } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SpotlightCard, FadeIn, ShinyButton } from "@/components/ui/effects";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Komponen Certificates Section.
 * Menampilkan galeri grid sertifikat profesional dan penghargaan kustom.
 * Dilengkapi dengan fitur dialog pratinjau zoom modal (`Dialog` dari Radix UI) untuk detail sertifikat
 * dan verifikasi keaslian kredensial secara online jika tautan tersedia.
 * 
 * @returns Struktur section Certificates portofolio.
 */
export function Certificates() {
  const { data } = usePortfolioData();
  const CERTIFICATES = data.certificates;
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-28 bg-muted/10 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-secondary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Certificates &amp; Awards
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Professional certifications and intensive engineering training achievements in frontend architecture, responsive design, and data processing.
          </p>
        </FadeIn>

        {/* Certificates Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <FadeIn key={cert.id} direction="up" delay={idx * 0.12} className="h-full">
              <SpotlightCard
                className="h-full border-border/80 bg-card/80 overflow-hidden group cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  {/* Certificate Thumbnail with Hover Zoom Effect */}
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white backdrop-blur-[2px]">
                      <div className="p-3.5 rounded-full bg-primary/90 text-white shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-primary font-bold">
                      <span className="flex items-center gap-1.5 truncate">
                        <Award className="h-3.5 w-3.5 shrink-0" />
                        {cert.issuer}
                      </span>
                      <span className="text-muted-foreground flex items-center gap-1 shrink-0">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>
                    {cert.description && (
                      <p className="text-xs text-muted-foreground line-clamp-2 pt-1 leading-relaxed font-normal">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border/40 flex items-center justify-between text-xs font-mono font-bold text-secondary">
                  <span>CLICK TO PREVIEW</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Certificate Detail Zoom Modal */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        {selectedCert && (
          <DialogContent className="max-w-3xl p-6 sm:p-8 bg-card border-border/80 shadow-2xl">
            <DialogHeader className="space-y-3 pb-4 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1 font-mono uppercase text-[10px] tracking-wider px-2.5 py-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Verified Credential
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">
                  Issued: {selectedCert.date}
                </span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {selectedCert.title}
              </DialogTitle>
              <DialogDescription className="text-base font-semibold text-primary font-mono">
                Issued by: {selectedCert.issuer}
              </DialogDescription>
            </DialogHeader>

            {/* Full Image Display */}
            <div className="my-6 rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-muted max-h-[55vh] flex items-center justify-center p-2 bg-slate-950/40">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[50vh] object-contain rounded-xl"
              />
            </div>

            {selectedCert.description && (
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed bg-muted/40 p-5 rounded-2xl border border-border/60 font-normal">
                {selectedCert.description}
              </p>
            )}

            <div className="pt-4 flex flex-wrap justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedCert(null)} className="rounded-xl font-semibold px-6">
                Close Preview
              </Button>
              {selectedCert.credentialUrl && (
                <a href={selectedCert.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <ShinyButton className="rounded-xl gap-2 shadow-md shadow-primary/20">
                    <ExternalLink className="h-4 w-4" />
                    <span>Verify Authenticity</span>
                  </ShinyButton>
                </a>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
