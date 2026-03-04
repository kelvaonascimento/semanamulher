"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const forYou = [
  { num: "01", text: "Quer aprender IA mas não sabe por onde começar" },
  { num: "02", text: "Deseja criar apps e automações sem programar" },
  { num: "03", text: "Quer fazer parte de uma comunidade de mulheres que constroem" },
  { num: "04", text: "Busca uma transformação real na sua carreira com tecnologia" },
  { num: "05", text: "Quer acesso a ferramentas profissionais de IA gratuitamente" },
  { num: "06", text: "Deseja se inspirar e celebrar cada conquista junto com outras mulheres" },
];

export default function CampaignConcept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Section 1: Hero visual + "Para quem é" - Inspired by Missão ELA hero */}
      <section
        ref={ref}
        className="relative py-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1a1020 0%, #0F0F0F 100%)" }}
      >
        {/* Full-width hero image with overlay - like Missão ELA */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/women-collab.png"
            alt="Mulheres construindo com tecnologia"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1020] via-[#1a1020]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1020]/80 to-transparent" />

          {/* Content over image */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-4 pb-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="max-w-lg"
              >
                <span className="inline-block bg-purple-light/20 backdrop-blur-sm border border-purple-light/30 text-purple-glow text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  Mulheres que Constroem
                </span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  O lugar onde mulheres
                  <br />
                  aprendem IA e{" "}
                  <span className="text-purple-glow">constroem</span>
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                  Aqui, você será acolhida, inspirada e guiada para criar projetos
                  reais com inteligência artificial. Sem precisar programar.
                </p>
                <a
                  href="#trial"
                  className="inline-flex items-center gap-3 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm group"
                >
                  QUERO FAZER PARTE
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* "Para quem é" numbered grid */}
        <div className="max-w-5xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-purple-light/10 border border-purple-light/20 text-purple-glow text-xs uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6 font-medium">
              Para quem é
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
              Essa campanha é para você que:
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {forYou.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative border border-white/10 hover:border-purple-light/40 rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.03]"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-purple-light/15 group-hover:text-purple-light/30 transition-colors duration-500 block mb-3">
                  {item.num}
                </span>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
              Esteja pronta para viver sua nova fase com{" "}
              <strong className="text-white">clareza</strong>,{" "}
              <strong className="text-white">ferramentas</strong> e{" "}
              <strong className="text-white">comunidade</strong>.
            </p>
            <a
              href="#trial"
              className="inline-flex items-center gap-3 border-2 border-purple-light/40 hover:border-purple-light hover:bg-purple-light/10 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] group"
            >
              QUERO FAZER PARTE
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 2: White concept - like Clínica Aura's "Descubra" section */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-[family-name:var(--font-space-grotesk)] text-[180px] md:text-[280px] font-bold text-purple-dark/[0.03] leading-none select-none pointer-events-none">
          CB
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Image like Clínica Aura hero image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/campaign-woman.png"
                  alt="Mulher tech construindo com IA"
                  fill
                  className="object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/40 to-transparent" />
              </div>

              {/* Floating badges over image */}
              <div className="absolute -bottom-4 -right-4 md:right-4 bg-green-cta text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-lg shadow-green-cta/20">
                100% GRÁTIS
              </div>
              <div className="absolute top-6 -left-2 md:-left-4 bg-white text-purple-dark text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-cta animate-pulse" />
                Vagas abertas
              </div>
            </motion.div>

            {/* Right - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block text-purple-dark/50 text-xs uppercase tracking-[0.25em] mb-4 font-medium">
                Conheça
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                O que é a campanha
                <br />
                <span className="bg-gradient-to-r from-purple-dark to-purple-light bg-clip-text text-transparent">
                  Mulheres que Constroem?
                </span>
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-gray-500 leading-relaxed">
                  A Cultura Builder é a <strong className="text-gray-700">maior comunidade de builders da América Latina</strong>.
                  Mas apenas 9% do nosso público é feminino. Enquanto mulheres representam 47% do crescimento
                  em cursos de IA, nossa comunidade — e toda a concorrência — continua dominada por homens.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Na Semana da Mulher 2026, decidimos agir: <strong className="text-gray-700">7 dias grátis no Hub Premium</strong>,{" "}
                  <strong className="text-gray-700">5 bolsas integrais</strong> de 1 ano e{" "}
                  <strong className="text-gray-700">30% OFF exclusivo</strong>.
                  Três caminhos concretos para mulheres que querem aprender IA e construir sem programar.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "✦", label: "12 cursos de IA", sub: "do zero ao avançado" },
                  { icon: "✦", label: "Brother AI", sub: "assistente pessoal 24/7" },
                  { icon: "✦", label: "+R$ 20k em créditos", sub: "AWS e NVIDIA inclusos" },
                  { icon: "✦", label: "Sem programar", sub: "no-code + IA generativa" },
                ].map((feat) => (
                  <div key={feat.label} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-purple-light text-sm mt-0.5">{feat.icon}</span>
                    <div>
                      <p className="text-gray-800 text-sm font-medium">{feat.label}</p>
                      <p className="text-gray-400 text-xs">{feat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#trial"
                  className="inline-flex items-center gap-2 bg-purple-dark hover:bg-purple-light text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
                >
                  QUERO FAZER PARTE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
                <span className="text-gray-400 text-xs">02 — 08 de Março</span>
              </div>
            </motion.div>
          </div>

          {/* Laptop mockup section below - like Missão ELA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-20 relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1020] to-purple-dark rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-light rounded-full blur-[120px]" />
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Laptop image */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src="/images/laptop-cb.png"
                    alt="Hub Cultura Builder - Plataforma"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <span className="inline-block bg-white/10 text-white/60 text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4 font-medium border border-white/10">
                    Hub Premium
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    No Hub, você vai construir:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Seu primeiro app com IA — do zero",
                      "Automações profissionais sem código",
                      "Projetos reais para seu portfólio",
                      "Soluções com Claude Code e Brother AI",
                      "Imagens e vídeos com IA generativa",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-green-cta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
