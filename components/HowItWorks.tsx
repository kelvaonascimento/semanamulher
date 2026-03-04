"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Cadastre-se grátis",
    description:
      "Sem cartão de crédito. Basta seu nome e email. Acesso imediato ao Hub Premium Completo.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    number: "02",
    title: "Acesse 12 cursos de IA",
    description:
      "Cursos práticos de IA e no-code. Do zero ao app publicado, no seu ritmo. Brother AI te guia 24/7.",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </>
    ),
  },
  {
    number: "03",
    title: "Construa seu primeiro app",
    description:
      "Use IA para te guiar. Sem programar. Publique algo real em dias e transforme sua carreira.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            Sua transformação em{" "}
            <span className="text-gradient-purple">3 passos simples</span>
          </h2>
          <p className="text-white/50 text-lg">
            Zero complicação. Do cadastro ao primeiro app.
          </p>
        </motion.div>

        {/* Steps - inspired by Missão ELA numbered steps with connector */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[72px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-purple-dark via-purple-light/30 to-purple-dark" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="relative text-center group"
              >
                {/* Number circle with icon */}
                <div className="relative inline-flex items-center justify-center w-[88px] h-[88px] rounded-full bg-gradient-to-br from-purple-dark/80 to-purple-dark border-2 border-purple-light/20 group-hover:border-purple-light/50 transition-all duration-500 mb-8 mx-auto">
                  <svg
                    className="w-8 h-8 text-purple-glow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {step.icon}
                  </svg>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple-light text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-purple-light/30">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-3 group-hover:text-purple-glow transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto group-hover:text-white/60 transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#trial"
            className="inline-flex items-center gap-3 border-2 border-purple-light/30 hover:border-purple-light hover:bg-purple-light/10 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] group"
          >
            QUERO FAZER PARTE
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
