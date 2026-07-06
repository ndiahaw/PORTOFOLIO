"use client";

import * as React from "react";
import { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Github } from "@/components/ui/icons";
import { Project } from "@/types";
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
 * Komponen Projects Section.
 * Menampilkan portofolio proyek-proyek unggulan yang pernah dikerjakan.
 * Dilengkapi dengan pratinjau thumbnail, tag teknologi yang digunakan, serta modal detail kasus studi (Case Study Dialog)
 * saat proyek diklik untuk melihat penjelasan masalah, solusi, dan fitur.
 * 
 * @returns Struktur section Projects portofolio.
 */
export function Projects() {
  const { data } = usePortfolioData();
  const PROJECTS = data.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-accent text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            A curated showcase of full-stack platforms and responsive web applications. Hover over cards to see the spotlight effect or click to explore deep architectural case studies.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={idx * 0.15} className="h-full">
              <SpotlightCard className="h-full border-border/80 bg-card/80 flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* Thumbnail Preview */}
                  <div
                    className="relative h-60 w-full overflow-hidden bg-muted cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.thumbnail || project.banner}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent opacity-60" />
                    {project.featured && (
                      <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-primary text-white text-[11px] font-bold shadow-md tracking-wider uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-7 pb-4 space-y-3">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer line-clamp-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono font-medium px-2.5 py-0.5 bg-muted/80 border border-border/60">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border/60 bg-muted/10 p-7">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="text-primary hover:text-primary hover:bg-primary/10 font-semibold gap-1.5 pl-0 text-sm"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-2.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-border/80 bg-card hover:bg-foreground hover:text-background transition-colors shadow-2xs"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity shadow-sm"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Project Detail Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border/80 shadow-2xl">
            {/* Banner */}
            <div className="relative h-72 w-full bg-muted overflow-hidden">
              <img
                src={selectedProject.banner || selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge variant="default" className="mb-2 shadow-sm uppercase font-mono text-[10px] tracking-wider">
                  Deep Dive Case Study
                </Badge>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-md">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto font-normal">
              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <AlertCircle className="h-4 w-4" /> The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.problem || "Legacy interfaces and sluggish data fetching workflows hindering user productivity."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Lightbulb className="h-4 w-4" /> Engineering Solution
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.solution || "Architected a responsive SPA with Next.js App Router, optimized state management, and Tailwind CSS."}
                  </p>
                </div>
              </div>

              {/* Main Features */}
              {selectedProject.features && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Key Features &amp; Capabilities</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3 pt-2 border-t border-border/60">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                  Technologies &amp; Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1 bg-background text-foreground font-mono font-semibold">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-border/60">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-xl gap-2 font-semibold border-border/80">
                      <Github className="h-4 w-4" />
                      <span>View Source Code</span>
                    </Button>
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ShinyButton className="rounded-xl gap-2 shadow-md shadow-primary/20">
                      <ExternalLink className="h-4 w-4" />
                      <span>Launch Live Demo</span>
                    </ShinyButton>
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
