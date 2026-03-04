"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 9,
    suffix: "%",
    label: "Mulheres na base do Instagram",
    detail: "De 7.600 seguidores, apenas ~684 são mulheres",
  },
  {
    value: 800,
    prefix: "~",
    suffix: "",
    label: "Mulheres cadastradas no Cultura Builder",
    detail: "Base feminina total registrada no Intercom",
  },
  {
    value: 20,
    suffix: "%",
    label: "Mulheres em tech no mercado",
    detail: "Nossa base está abaixo da média do mercado",
  },
  {
    value: 47,
    prefix: "+",
    suffix: "%",
    label: "Crescimento mulheres + IA",
    detail: "Mulheres em cursos de IA cresceram 47% em 2025",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      {/* AI-generated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg-section-1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-purple-light/60 text-xs uppercase tracking-[0.25em] mb-4">
            O problema
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            Dados reais da Cultura Builder
          </h2>
        </motion.div>

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-14"
        >
          <AnimatedCounter
            target={9}
            suffix="%"
            className="font-[family-name:var(--font-space-grotesk)] text-8xl md:text-[10rem] font-bold text-gradient-purple"
          />
          <p className="text-xl md:text-2xl text-white/60 mt-4">
            do nosso público no Instagram é feminino.
          </p>
          <p className="text-lg text-white/40 mt-2">
            Isso não é uma estatística.{" "}
            <span className="text-white font-semibold">É um problema.</span>
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card-shine glass glass-hover rounded-2xl p-6 text-center transition-all duration-500 group"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                className="text-3xl md:text-4xl font-bold text-purple-light font-[family-name:var(--font-space-grotesk)]"
              />
              <p className="text-xs text-white/40 uppercase tracking-wider mt-2 mb-2">
                {stat.label}
              </p>
              <p className="text-[11px] text-white/20 leading-relaxed hidden group-hover:block transition-all">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-white/50">
            Nossa base é 91% masculina — o mercado de tech é 80%.
          </p>
          <p className="text-white/40 text-sm mt-1 mb-3">
            Toda a concorrência também é dominada por homens.
          </p>
          <p className="text-xl md:text-2xl font-bold text-gradient-purple">
            Essa semana, a porta está aberta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
