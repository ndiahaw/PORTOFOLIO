"use client";

import * as React from "react";
import { useState } from "react";
import { Mail, Send, MapPin, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SpotlightCard, FadeIn, ShinyButton } from "@/components/ui/effects";

/**
 * Komponen Contact Section.
 * Menampilkan saluran kontak langsung (Email, LinkedIn, Lokasi) dan sebuah formulir kontak interaktif.
 * Formulir memiliki penanganan simulasi pengiriman pesan dengan state loading dan sukses.
 * 
 * @returns Struktur section Contact portofolio.
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  /**
   * Menangani pengiriman data formulir kontak secara asinkron (simulasi).
   * 
   * @param e - Event submit formulir HTML.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Whether you have an internship opportunity, a challenging full-stack project, or simply want to discuss modern SaaS architectures, my inbox is open.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" delay={0.2} className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Direct Channels</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal">
                Reach out immediately via professional networks or send a direct message through the integrated form.
              </p>
            </FadeIn>

            <div className="space-y-4 pt-2">
              <FadeIn direction="right" delay={0.3}>
                <a
                  href="mailto:ajengwidjayanti@gmail.com"
                  className="block"
                >
                  <SpotlightCard className="p-5 border-border/80 bg-card/80 flex items-center gap-4 group">
                    <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-widest block">
                        Email Address
                      </span>
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors text-base sm:text-lg">
                        ajengwidjayanti@gmail.com
                      </p>
                    </div>
                  </SpotlightCard>
                </a>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <a
                  href="https://www.linkedin.com/in/nadiahajengwidjayanti?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <SpotlightCard className="p-5 border-border/80 bg-card/80 flex items-center gap-4 group">
                    <div className="p-3.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-widest block">
                        LinkedIn Network
                      </span>
                      <p className="font-bold text-foreground group-hover:text-secondary transition-colors text-base sm:text-lg">
                        Nadiah Ajeng Widjayanti
                      </p>
                    </div>
                  </SpotlightCard>
                </a>
              </FadeIn>

              <FadeIn direction="right" delay={0.5}>
                <a
                  href="https://github.com/ndiahaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <SpotlightCard className="p-5 border-border/80 bg-card/80 flex items-center gap-4 group">
                    <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-widest block">
                        GitHub Profile
                      </span>
                      <p className="font-bold text-foreground group-hover:text-accent transition-colors text-base sm:text-lg">
                        github.com/ndiahaw
                      </p>
                    </div>
                  </SpotlightCard>
                </a>
              </FadeIn>

              <FadeIn direction="right" delay={0.6}>
                <SpotlightCard className="p-5 border-border/60 bg-muted/40 flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 text-muted-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-widest block">
                      Base Location
                    </span>
                    <p className="font-bold text-foreground text-base">
                      Bandung, Indonesia (Open for Remote &amp; Hybrid)
                    </p>
                  </div>
                </SpotlightCard>
              </FadeIn>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.3}>
              <SpotlightCard className="border-border/80 bg-card/90 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-16 text-center space-y-5 animate-in fade-in-50 zoom-in-95">
                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto text-base font-normal">
                      Thank you for reaching out. I will review your message and respond directly to your email as soon as possible.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        className="rounded-xl px-7 py-3 border-border/80 font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 border-b border-border/60 pb-5">
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2.5">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        <span>Send a Message</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-normal">
                        Fill out the details below and I will get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 rounded-xl bg-background/60 border-border/80 focus:border-primary font-medium"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12 rounded-xl bg-background/60 border-border/80 focus:border-primary font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about the project, team, or opportunity..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[160px] rounded-xl bg-background/60 border-border/80 focus:border-primary font-medium p-4 leading-relaxed"
                      />
                    </div>

                    <ShinyButton
                      variant="primary"
                      className="w-full rounded-xl font-bold text-base h-14 gap-2.5 shadow-xl shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Message...</span>
                        </div>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </ShinyButton>
                  </form>
                )}
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
