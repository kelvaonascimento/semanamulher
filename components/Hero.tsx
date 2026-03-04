"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden">
      {/* Background: Same mobile image on both desktop and mobile */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_20%] bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg-mobile.png')" }}
        />
        {/* Desktop overlay - darken left for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/30 hidden md:block" />
        {/* Mobile overlay - only bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark to-transparent md:hidden" />
        {/* Desktop bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent hidden md:block" />
        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Mobile spacer: push content down so woman is visible at top */}
      <div className="relative w-full h-[50vh] md:hidden shrink-0">
        {/* Badge floating over image on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-purple-dark/50 border border-purple-light/20 rounded-full px-4 py-2 backdrop-blur-sm md:hidden"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-light opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-light" />
          </span>
          <span className="text-xs text-purple-glow font-medium">
            Semana da Mulher 2026
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pb-16 -mt-10 md:mt-0 md:pt-40 md:pb-28">
        <div className="max-w-xl md:max-w-xl mx-auto md:mx-0 text-center md:text-left">
          {/* Badge - desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:inline-flex items-center gap-2 bg-purple-dark/50 border border-purple-light/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-light opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-light" />
            </span>
            <span className="text-sm text-purple-glow font-medium">
              Semana da Mulher 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          >
            Não é sobre flores.
            <br />
            <span className="text-gradient-purple">É sobre código.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/70 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            7 dias <strong className="text-white">GRÁTIS</strong> no Hub Cultura
            Builder. 12 cursos de IA e no-code. Brother AI incluso.{" "}
            <strong className="text-white">Sem cartão. Sem compromisso.</strong>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
          >
            <a
              href="#trial"
              className="group inline-flex items-center gap-3 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 rounded-full transition-all duration-300 pulse-cta hover:scale-105 whitespace-nowrap"
            >
              COMEÇAR AGORA — É GRÁTIS
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#bolsas"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-purple-light/50 text-white/80 hover:text-white font-medium text-sm px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
            >
              Concorrer à bolsa
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Social proof + Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center md:items-start sm:items-center gap-6"
          >
            <div>
              <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-2">
                A porta fecha em
              </p>
              <Countdown />
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <p className="text-sm text-white/30">
              +100 mulheres já se inscreveram
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
