"use client";

import * as React from "react";
import { ArrowRight, Download, Sparkles, Terminal, Code, Mail, User } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  AuroraBackground,
  BlurText,
  SpotlightCard,
  ShinyButton,
  FadeIn,
} from "@/components/ui/effects";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Komponen kartu ID (Lanyard Card) dengan efek kemiringan 3D interaktif.
 * Kartu ini merespons gerakan kursor mouse untuk mensimulasikan efek gantung tali lanyard fisik.
 * 
 * @param props - Properti komponen.
 * @param props.profile - Data profil pemilik portofolio yang berisi foto, nama, dll.
 * @returns Kartu ID lanyard visual 3D yang interaktif.
 */
function LanyardCard({ profile }: { profile: any }) {
  const [rotation, setRotation] = React.useState({ x: 0, y: 0, z: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt & pendulum swing calculation
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    const rotateZ = ((x - centerX) / centerX) * 8; // Pendulum swing

    setRotation({ x: rotateX, y: rotateY, z: rotateZ });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0, z: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="relative mx-auto max-w-xs sm:max-w-sm flex flex-col items-center select-none pt-2 pb-8 animate-float">
      {/* Tali Lanyard (V-Shape Ribbon/Strap SVG) */}
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        fill="none" 
        className="w-24 sm:w-28 h-24 sm:h-28 -mb-1.5 drop-shadow-[0_5px_8px_rgba(0,0,0,0.2)] relative z-10"
      >
        <defs>
          <linearGradient id="lanyardStrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="60%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <linearGradient id="lanyardStrapShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
          </linearGradient>
        </defs>
        
        {/* Left Strap Band */}
        <path 
          d="M 25 0 C 25 40, 53 90, 57 120" 
          stroke="url(#lanyardStrapGrad)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <path 
          d="M 25 0 C 25 40, 53 90, 57 120" 
          stroke="url(#lanyardStrapShade)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <path 
          d="M 25 0 C 25 40, 53 90, 57 120" 
          stroke="rgba(255,255,255,0.25)" 
          strokeWidth="1.5" 
          strokeDasharray="4 4"
        />

        {/* Right Strap Band */}
        <path 
          d="M 95 0 C 95 40, 67 90, 63 120" 
          stroke="url(#lanyardStrapGrad)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <path 
          d="M 95 0 C 95 40, 67 90, 63 120" 
          stroke="url(#lanyardStrapShade)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
        <path 
          d="M 95 0 C 95 40, 67 90, 63 120" 
          stroke="rgba(255,255,255,0.25)" 
          strokeWidth="1.5" 
          strokeDasharray="4 4"
        />

        {/* Joint Ring at bottom of strap */}
        <circle cx="60" cy="115" r="5.5" fill="var(--primary)" className="brightness-75" />
      </svg>

      {/* 3D Wrapper (Clasp + Ring + Card) */}
      <div 
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          transformOrigin: "top center",
          transition: isHovered 
            ? "transform 0.1s ease-out" 
            : "transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)" // smooth, organic spring-back ease
        }}
        className="relative flex flex-col items-center group"
      >
        {/* Klip / Metal Clasp */}
        <div className="w-10 h-6 bg-gradient-to-b from-stone-200 via-stone-400 to-stone-600 rounded-sm shadow-md border border-stone-500/80 z-20 flex flex-col items-center justify-center relative">
          <div className="absolute inset-x-0 top-0.5 h-0.5 bg-white/40" />
          <div className="w-4 h-1.5 bg-stone-700/60 rounded-sm mb-0.5 shadow-inner" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-500 border border-stone-400 shadow-sm" />
        </div>

        {/* Gantungan Ring Metal (Connecting Ring) */}
        {/* Overlaps exactly into the card's slot (18px from card top) */}
        <div className="w-4 h-7 border-[3px] border-stone-300 rounded-full -mt-1.5 -mb-[18px] z-15 bg-transparent shadow-sm relative flex items-center justify-center">
          <div className="w-full h-full border border-stone-500/30 rounded-full" />
        </div>

        {/* Card and Glow Container */}
        <div className="relative">
          {/* Ambient Glow Ring behind card */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-primary via-accent/50 to-secondary/80 opacity-30 blur-2xl rounded-[2.5rem] pointer-events-none group-hover:opacity-65 transition-opacity duration-500 z-0" />
          
          {/* Kartu Nama (ID Card) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-64 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-card cursor-grab active:cursor-grabbing z-10"
          >
            {/* Lubang Pengait Kartu (Slot / Punch Hole) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-black/70 rounded-full border border-white/30 z-30 shadow-inner flex items-center justify-center">
              <div className="w-6 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Full Photo */}
            <div className="absolute inset-0 w-full h-full z-10 bg-stone-900">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-card to-secondary/20 p-6 text-center">
                  <User className="w-24 h-24 text-primary/60 mb-4 animate-pulse" />
                </div>
              )}
            </div>

            {/* Subtle glass reflection effect across card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 z-20 pointer-events-none" />

            {/* Sleek Name Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-16 pb-6 px-4 flex flex-col items-center justify-end text-center z-30">
              <div className="w-10 h-1 bg-primary rounded-full mb-3 shadow-sm" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-sans drop-shadow-md leading-tight">
                {profile.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-amber-300/90 mt-1.5 font-semibold">
                Informatics Student
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Petunjuk Interaktif */}
      <div className="mt-5 flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80 bg-card/60 px-3.5 py-1.5 rounded-full border border-border/50 shadow-sm animate-pulse">
        <Sparkles className="w-3.5 h-3.5 text-primary" />
        <span>Hover / Geser Kartu ID</span>
      </div>
    </div>
  );
}

/**
 * Komponen utama Hero Section (pembuka halaman website).
 * Menampilkan salam pembuka, nama, peran profesional, bio singkat, CTA download CV,
 * tautan ke media sosial, serta komponen visual kartu ID interaktif (LanyardCard).
 * 
 * @returns Struktur section Hero portofolio.
 */
export function Hero() {
  const { data } = usePortfolioData();
  const profile = data.profile;

  return (
    <section id="about" className="relative">
      <AuroraBackground className="min-h-[95vh] flex items-center justify-center pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <FadeIn direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
                  <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: "4s" }} />
                  <span>{profile.role}</span>
                </div>
              </FadeIn>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Hi, I&apos;m{" "}
                  <BlurText
                    text={profile.name}
                    className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block font-extrabold"
                    delay={0.2}
                  />
                </h1>
              </div>

              <FadeIn direction="up" delay={0.4}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  {profile.bio}
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <a href={profile.cvUrl || "/uploads/1783169867284-nadiah_ajeng_widjayanti_cv.pdf"} target="_blank" rel="noopener noreferrer">
                    <ShinyButton variant="primary" className="rounded-xl gap-2 font-semibold px-7 py-3.5 shadow-lg shadow-primary/25">
                      <Download className="h-5 w-5" />
                      <span>Download CV</span>
                    </ShinyButton>
                  </a>

                  <a href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl gap-2 font-semibold px-7 py-6 border-border/80 bg-card/50 hover:bg-muted/80 backdrop-blur-md transition-all"
                    >
                      <span>Contact Me</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </FadeIn>

              {/* Social Icons (GitHub, LinkedIn, Email) */}
              <FadeIn direction="up" delay={0.6}>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 text-muted-foreground">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Connect:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={profile.github || "https://github.com/ndiahaw"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm hover:-translate-y-1 backdrop-blur-md"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={profile.linkedin || "https://www.linkedin.com/in/nadiahajengwidjayanti?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-secondary hover:border-secondary hover:text-white transition-all shadow-sm hover:-translate-y-1 backdrop-blur-md"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${profile.email || "nadiahaw@gmail.com"}`}
                      className="p-3 rounded-xl border border-border/80 bg-card/80 hover:bg-accent hover:border-accent hover:text-slate-950 transition-all shadow-sm hover:-translate-y-1 backdrop-blur-md"
                      aria-label="Email Profile"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual / Lanyard Card */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn direction="left" delay={0.3} className="w-full">
                <LanyardCard profile={profile} />
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
