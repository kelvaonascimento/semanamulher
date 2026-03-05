"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Countdown from "./Countdown";

const CHECKOUT_URL =
  "https://hub.culturabuilder.com/hub/subscription?couponCode=OFF100SDMCB&planId=3";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="checkout"
      className="relative py-16 sm:py-24 md:py-28 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-dark/20 to-purple-dark/30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-dark/20 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-light/5 rounded-full blur-[150px]" />
      </div>

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-space-grotesk)] text-[120px] md:text-[200px] font-bold text-white/[0.015] leading-none select-none pointer-events-none whitespace-nowrap">
        MULHERES QUE CONSTROEM
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Countdown */}
          <div className="flex justify-center mb-8">
            <Countdown />
          </div>

          <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-8">
            A porta fecha em breve
          </p>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Além das flores:
            <br />
            <span className="text-gradient-purple">
              Incentivo real.
            </span>
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            Mulheres ocupando espaços na tecnologia com{" "}
            <strong className="text-white">ferramentas</strong>,{" "}
            <strong className="text-white">comunidade</strong> e{" "}
            <strong className="text-white">oportunidade</strong>.
          </p>

          <p className="text-white/30 text-sm mb-12">
            7 dias grátis · 12 cursos · Brother AI · +R$ 20k em créditos
            AWS/NVIDIA · Sem cartão
          </p>

          {/* CTA */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 pulse-cta hover:scale-105"
          >
            COMEÇAR AGORA — É GRÁTIS
            <svg
              className="w-5 h-5"
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

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="inline-block">
              <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-gradient-purple mb-3">
                Mulheres que Constroem.
              </p>
              <div className="h-[2px] w-16 bg-gradient-to-r from-purple-light to-transparent mx-auto mb-3" />
              <p className="text-white/25 text-sm">
                Cultura Builder · Semana da Mulher 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
