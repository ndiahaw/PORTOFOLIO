"use client";

import * as React from "react";
import { Briefcase, Calendar, MapPin, Sparkles, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard, FadeIn } from "@/components/ui/effects";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Komponen Experience Section.
 * Menampilkan linimasa vertikal riwayat karir, magang, asisten laboratorium, dan kepemimpinan organisasi.
 * Menggunakan komponen visual Timeline dan SpotlightCard untuk setiap entri pengalaman.
 * 
 * @returns Struktur section Experience portofolio.
 */
export function Experience() {
  const { data } = usePortfolioData();
  const EXPERIENCES = data.experience;

  return (
    <section id="experience" className="py-28 bg-muted/10 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Career &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Experience &amp; Track Record
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            A vertical timeline showcasing practical frontend engineering internships, teaching laboratory mentorships, and student organization leadership.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-36 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isLatest = idx === 0;
            return (
              <FadeIn
                key={exp.id}
                direction="up"
                delay={idx * 0.15}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[11px] top-6 h-5 w-5 rounded-full border-4 border-background transition-all duration-300 ${
                    isLatest
                      ? "bg-primary shadow-lg shadow-primary/50 scale-125 animate-pulse"
                      : "bg-secondary group-hover:scale-125 group-hover:bg-primary"
                  }`}
                />

                {/* Left Side Date for Tablet & Desktop */}
                <div className="hidden sm:block absolute -left-36 top-5 text-right w-28">
                  <span className="text-sm font-bold font-mono text-primary block">
                    {exp.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center justify-end gap-1 mt-1 font-mono">
                    <MapPin className="h-3 w-3" />
                    {exp.location || "Indonesia"}
                  </span>
                </div>

                {/* Card Content with SpotlightCard */}
                <SpotlightCard className="border-border/80 bg-card/80 p-6 sm:p-8 space-y-5">
                  {/* Mobile Date Badge */}
                  <div className="flex sm:hidden items-center justify-between text-xs font-mono text-primary pb-3 border-b border-border/60">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.date}
                    </span>
                    <span className="text-muted-foreground">{exp.location}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-base font-semibold text-secondary flex items-center gap-2 mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.organization}</span>
                      </p>
                    </div>

                    {exp.type && (
                      <Badge
                        variant={
                          exp.type === "work"
                            ? "default"
                            : exp.type === "organization"
                            ? "secondary"
                            : "outline"
                        }
                        className="w-fit text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 shadow-sm"
                      >
                        {exp.type === "work" ? "Intern / Work" : exp.type === "organization" ? "Leadership" : "Education"}
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
