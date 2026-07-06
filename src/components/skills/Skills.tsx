"use client";

import * as React from "react";
import { useState } from "react";
import {
  Code2,
  FileCode,
  Coffee,
  Terminal,
  Cpu,
  Database,
  Globe,
  Atom,
  Palette,
  Layout,
  Sparkles,
  Server,
  Layers,
  HardDrive,
  GitBranch,
  Box,
  Code,
  CheckCircle2,
} from "lucide-react";
import { Github, Figma, TimeManagement, Leadership, PublicSpeaking, Teamwork } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard, FadeIn } from "@/components/ui/effects";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Pemetaan string nama ikon ke elemen ikon React (Lucide atau ikon kustom).
 */
const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-6 w-6 text-amber-500" />,
  FileCode: <FileCode className="h-6 w-6 text-orange-400" />,
  Coffee: <Coffee className="h-6 w-6 text-amber-600" />,
  Terminal: <Terminal className="h-6 w-6 text-stone-400" />,
  Cpu: <Cpu className="h-6 w-6 text-yellow-500" />,
  Database: <Database className="h-6 w-6 text-amber-500" />,
  Globe: <Globe className="h-6 w-6 text-foreground" />,
  Atom: <Atom className="h-6 w-6 text-orange-400" />,
  Palette: <Palette className="h-6 w-6 text-amber-400" />,
  Layout: <Layout className="h-6 w-6 text-orange-500" />,
  Sparkles: <Sparkles className="h-6 w-6 text-yellow-400" />,
  Server: <Server className="h-6 w-6 text-stone-400" />,
  Layers: <Layers className="h-6 w-6 text-amber-500" />,
  HardDrive: <HardDrive className="h-6 w-6 text-stone-500" />,
  GitBranch: <GitBranch className="h-6 w-6 text-orange-500" />,
  Github: <Github className="h-6 w-6 text-foreground" />,
  Box: <Box className="h-6 w-6 text-amber-600" />,
  Figma: <Figma className="h-6 w-6 text-orange-400" />,
  Code: <Code className="h-6 w-6 text-amber-500" />,
  TimeManagement: <TimeManagement className="h-6 w-6 text-emerald-500" />,
  Leadership: <Leadership className="h-6 w-6 text-amber-400" />,
  PublicSpeaking: <PublicSpeaking className="h-6 w-6 text-orange-400" />,
  Teamwork: <Teamwork className="h-6 w-6 text-yellow-500" />,
};

/**
 * Komponen utama Skills Section.
 * Menampilkan daftar keahlian (skills) teknis dan non-teknis yang dikelompokkan berdasarkan kategori.
 * Dilengkapi dengan filter tab kategori yang interaktif.
 * 
 * @returns Struktur section Skills portofolio.
 */
export function Skills() {
  const { data } = usePortfolioData();
  const SKILL_CATEGORIES = data.skills;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories =
    activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-secondary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Hover over the interactive dock items below to explore the languages, libraries, and engineering tools in my active arsenal.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105 border border-primary/40"
                    : "bg-card/80 text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border/80 backdrop-blur-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Dock Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredCategories.map((group, groupIdx) => (
            <FadeIn
              key={group.title}
              direction="up"
              delay={0.15 * groupIdx}
              className="h-full"
            >
              <SpotlightCard className="h-full border-border/80 bg-card/70 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-6">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                      {group.title}
                    </h3>
                    <Badge variant="outline" className="text-[11px] uppercase font-mono px-2.5 py-0.5 border-border/80 bg-background/50">
                      {group.skills.length} Items
                    </Badge>
                  </div>

                  {/* Interactive Dock Bar */}
                  <div className="p-4 rounded-2xl bg-background/60 border border-border/80 backdrop-blur-xl shadow-inner flex flex-wrap items-center justify-center gap-3 min-h-[140px]">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/icon relative flex flex-col items-center justify-center p-3 rounded-xl bg-card/90 border border-border/80 hover:border-primary hover:bg-primary/15 transition-all duration-300 hover:scale-125 hover:-translate-y-2 cursor-pointer shadow-md hover:shadow-primary/30 hover:z-20"
                      >
                        {/* Hover Tooltip */}
                        <span className="absolute -top-9 opacity-0 group-hover/icon:opacity-100 transition-all duration-200 bg-foreground text-background text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-30 transform -translate-y-1 group-hover/icon:translate-y-0">
                          {skill.name}
                        </span>

                        <div className="p-1.5 transition-transform">
                          {skill.iconName && ICON_MAP[skill.iconName] ? (
                            ICON_MAP[skill.iconName]
                          ) : (
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className="text-xs font-mono text-muted-foreground bg-muted/60 px-2 py-1 rounded-md border border-border/40"
                    >
                      #{s.name.toLowerCase().replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
