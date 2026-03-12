"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  brand: string;
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  brandColor?: string;
  ctaColor?: string;
}

export function FloatingNav({ brand, items, ctaLabel, ctaHref, brandColor = "#2563eb", ctaColor = "#25D366" }: FloatingNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-100"
          : "bg-white/80 backdrop-blur-xl border-b border-neutral-100/50"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold" style={{ color: brandColor }}>
          {brand}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: ctaColor }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
