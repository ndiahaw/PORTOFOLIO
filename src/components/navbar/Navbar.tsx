"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/effects";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

/**
 * Daftar menu navigasi utama pada navbar.
 */
const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

/**
 * Komponen Navbar navigasi utama.
 * Memiliki fitur scroll spy untuk menandai section yang aktif,
 * sticky navbar saat di-scroll, responsif untuk perangkat mobile,
 * serta tombol toggle tema gelap/terang.
 * 
 * @returns Header navigasi dengan menu desktop dan menu dropdown mobile.
 */
export function Navbar() {
  const { data } = usePortfolioData();
  const resumeUrl = data.profile?.cvUrl || "/uploads/1783169867284-nadiah_ajeng_widjayanti_cv.pdf";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Mengganti tema aplikasi antara gelap (dark) dan terang (light).
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-md py-3.5"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md shadow-primary/20">
            <Code2 className="h-5 w-5" />
          </div>
          <span>
            Nadiah<span className="text-primary font-extrabold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 font-mono ${isActive
                  ? "text-primary bg-primary/10 font-bold border border-primary/20 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Theme Toggle & Resume CTA & Mobile Hamburger) */}
        <div className="flex items-center gap-2.5">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl border-border/80 bg-card/60 hover:bg-muted/80"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-400 transition-all" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 transition-all" />
              )}
            </Button>
          )}

          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
            <ShinyButton className="px-5 py-2 rounded-xl font-semibold text-xs shadow-md shadow-primary/20">
              Resume
            </ShinyButton>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-primary" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full rounded-xl font-semibold justify-center">
                Download Resume PDF
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
