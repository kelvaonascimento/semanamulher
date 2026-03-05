"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-2xl border-b border-purple-light/10 shadow-[0_4px_30px_rgba(107,33,168,0.1)]"
          : "bg-gradient-to-b from-dark/70 via-dark/40 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        <a href="https://culturabuilder.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logos/cb-logo.svg"
            alt="Cultura Builder"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </a>
      </div>
    </motion.nav>
  );
}
