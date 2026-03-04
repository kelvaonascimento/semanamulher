"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "O seu primeiro APP",
    description: "Do zero ao app publicado. Para iniciantes completos que nunca programaram.",
    tag: "Iniciante",
    span: "col-span-1",
    icon: "🚀",
  },
  {
    title: "Evolução do APP",
    description: "Leve seu app ao próximo nível com funcionalidades intermediárias e integrações.",
    tag: "Intermediário",
    span: "col-span-1",
    icon: "⚡",
  },
  {
    title: "Avançado + Negócio",
    description: "Transforme seu projeto em produto. Monetização, escala e modelo de negócio.",
    tag: "Avançado",
    span: "col-span-1",
    icon: "💎",
  },
  {
    title: "Claude Code + IA",
    description: "Domine o Claude Code e ferramentas de IA para construir mais rápido. Engenharia de contexto e prompts avançados.",
    tag: "Destaque",
    span: "md:col-span-2",
    icon: "🤖",
  },
  {
    title: "Criação de Imagem e Vídeo com IA",
    description: "Gere assets visuais profissionais para seus projetos usando IA generativa.",
    tag: "Criativo",
    span: "col-span-1",
    icon: "🎨",
  },
  {
    title: "Brother AI",
    description: "Seu assistente pessoal de IA dentro do Hub. Tira dúvidas, sugere soluções e acelera seus projetos 24/7.",
    tag: "Assistente",
    span: "col-span-1",
    icon: "🧠",
  },
  {
    title: "AI Brasil Workshops + Lives",
    description: "Workshops exclusivos e lives ao vivo com especialistas do mercado de IA brasileiro.",
    tag: "Comunidade",
    span: "col-span-1",
    icon: "📡",
  },
  {
    title: "Github Exclusivo + Fórum",
    description: "Acesso ao repositório privado com código fonte, templates e projetos. Fórum de discussão com a comunidade.",
    tag: "Recursos",
    span: "md:col-span-2",
    icon: "💻",
  },
  {
    title: "+R$ 20k em Créditos AWS/NVIDIA",
    description: "Infraestrutura cloud e GPU para rodar seus projetos de IA sem se preocupar com custos.",
    tag: "Infraestrutura",
    span: "col-span-1",
    icon: "☁️",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-dark/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            O que está incluso no{" "}
            <span className="text-gradient-purple">Hub</span>
          </h2>
          <p className="text-white/50 text-lg">
            Módulos, ferramentas e recursos para você construir com IA
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className={`card-shine glass glass-hover rounded-2xl p-6 transition-all duration-500 group cursor-default ${feature.span}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-dark/30 border border-purple-light/10 flex items-center justify-center text-xl group-hover:bg-purple-dark/50 group-hover:border-purple-light/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500">
                  {feature.icon}
                </div>
                <span className="text-[10px] text-purple-light/60 uppercase tracking-wider font-medium bg-purple-light/5 px-2 py-1 rounded-full">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-purple-glow transition-colors duration-300 text-[15px]">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra tools mention */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-white/30 text-sm">
            + Tool de Engenharia de Contexto &middot; Boost AI Project Generator &middot; Dicas Extras &middot; Conteúdo grátis &middot; Certificação
          </p>
        </motion.div>
      </div>
    </section>
  );
}
