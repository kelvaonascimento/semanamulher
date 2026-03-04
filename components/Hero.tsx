"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute w-[800px] h-[800px] -top-[200px] -left-[200px] rounded-full"
            style={{
              background: "radial-gradient(circle, #6B21A8 0%, transparent 70%)",
              animation: "float1 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] top-[20%] right-[-100px] rounded-full"
            style={{
              background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
              animation: "float2 18s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] bottom-[-100px] left-[30%] rounded-full"
            style={{
              background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
              animation: "float3 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[300px] h-[300px] top-[60%] left-[10%] rounded-full"
            style={{
              background: "radial-gradient(circle, #C084FC 0%, transparent 70%)",
              animation: "float4 12s ease-in-out infinite",
            }}
          />
        </div>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] font-mono text-sm text-purple-light"
        >
          {"const app = await buildWithAI()"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[25%] right-[8%] font-mono text-xs text-purple-light"
        >
          {"import { future } from 'cultura-builder'"}
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[35%] left-[8%] font-mono text-xs text-purple-glow"
        >
          {"// mulheres que constroem ✨"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] right-[12%] font-mono text-sm text-purple-light"
        >
          {"deploy(dream) => reality"}
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[50%] left-[50%] font-mono text-xs text-purple-glow"
        >
          {"function createFuture() { }"}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-purple-dark/40 border border-purple-light/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-light opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-light" />
          </span>
          <span className="text-sm text-purple-glow font-medium">
            Semana da Mulher 2026 — 02 a 08 de Março
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-6"
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
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
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
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#trial"
            className="group inline-flex items-center gap-3 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 pulse-cta hover:scale-105"
          >
            COMEÇAR AGORA — É GRÁTIS
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          <span className="text-sm text-white/30">
            +100 mulheres já se inscreveram esta semana
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
            A porta fecha em
          </p>
          <Countdown />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
