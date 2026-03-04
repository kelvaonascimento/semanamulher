"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./Countdown";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-dark/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/50 truncate">Encerra em:</p>
              <Countdown compact />
            </div>
            <a
              href="https://hub.culturabuilder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-sm px-5 py-3 rounded-full transition-all"
            >
              COMEÇAR GRÁTIS
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
