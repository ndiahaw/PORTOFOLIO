"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * AuroraBackground - Komponen background dengan animasi gradien warna-warni yang estetik ala Vercel/Linear.
 */
export function AuroraBackground({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-background ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-[40%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 blur-[120px] animate-aurora opacity-70"
        />
        <div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-accent/25 via-primary/20 to-secondary/25 blur-[140px] animate-aurora opacity-60"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] w-[700px] h-[400px] rounded-full bg-gradient-to-r from-secondary/25 via-accent/15 to-primary/25 blur-[130px] animate-aurora opacity-50"
          style={{ animationDelay: "-10s" }}
        />
      </div>
      {children}
    </div>
  );
}

/**
 * BlurText - Komponen teks dengan efek animasi memudar dan memfokus (blur reveal) untuk judul.
 */
export function BlurText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-2.5 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.12,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * SpotlightCard - Kartu interaktif dengan efek sorot cahaya (radial glow) yang mengikuti pergerakan kursor mouse.
 */
export function SpotlightCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Spotlight Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.08), transparent 40%)`,
        }}
      />
      {/* Border Highlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.4), transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

/**
 * ShinyButton - Tombol interaktif dengan efek kilauan cahaya (shimmer sweep) saat kursor diarahkan ke tombol.
 */
export function ShinyButton({
  children,
  onClick,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group ${
        variant === "primary"
          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
          : "border border-border/80 bg-card/60 text-foreground hover:bg-muted/80 hover:border-primary/50 hover:-translate-y-0.5"
      } ${className}`}
    >
      {/* Shimmer overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/**
 * SpotlightCursor - Komponen efek sorot cahaya (spotlight) global di layar yang mengikuti pergerakan kursor mouse.
 */
export function SpotlightCursor() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(0, { damping: 25, stiffness: 150 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 150 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent blur-[100px] z-50 opacity-60 hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    />
  );
}

/**
 * FadeIn - Komponen wrapper untuk memberikan animasi scroll-reveal (efek memudar masuk) saat elemen terlihat di layar.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "left":
        return { opacity: 0, x: -30 };
      case "right":
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
