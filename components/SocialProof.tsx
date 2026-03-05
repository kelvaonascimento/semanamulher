"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ana Souza",
    age: 32,
    role: "Ex-contadora",
    app: "App de Gestão Financeira",
    quote:
      "Eu achava que precisava saber programar pra criar algo. Em 3 dias no Hub, eu já tinha um app funcionando. Meu gerente não acreditou quando eu mostrei.",
    result: "App publicado em 3 dias",
    icon: "📊",
    size: "large",
  },
  {
    name: "Mariana Costa",
    age: 28,
    role: "Social Media",
    app: "Chatbot de Atendimento",
    quote:
      "Automatizei o atendimento de 3 clientes meus com IA. Eles me pagam mais agora porque entrego mais.",
    result: "3 clientes automatizados",
    icon: "💬",
    size: "medium",
  },
  {
    name: "Carla Mendes",
    age: 41,
    role: "Professora",
    app: "Plataforma de Cursos",
    quote:
      "Com 41 anos, eu tinha medo de tecnologia. Hoje tenho uma plataforma de cursos pra minha escola.",
    result: "Plataforma ativa",
    icon: "🎓",
    size: "medium",
  },
  {
    name: "Juliana Reis",
    age: 35,
    role: "Empreendedora",
    app: "Dashboard de Marketing",
    quote:
      "Eu gastava R$2.000/mês em ferramentas separadas. Criei um dashboard que integra tudo. Cortei custos pela metade.",
    result: "R$2k/mês economizados",
    icon: "📈",
    size: "medium",
  },
  {
    name: "Fernanda Lima",
    age: 29,
    role: "Autônoma",
    app: "Sistema de Agendamento",
    quote:
      "Perdia clientes porque esquecia horários. Criei meu próprio app de agendamento com lembretes automáticos. Zero código.",
    result: "Zero clientes perdidos",
    icon: "📅",
    size: "large",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3.5 h-3.5 text-purple-light" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  delay,
  className = "",
}: {
  t: (typeof testimonials)[0];
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`card-shine glass glass-hover rounded-3xl p-7 transition-all duration-500 flex flex-col ${className}`}
    >
      {/* Top: icon + stars */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-purple-dark/30 border border-purple-light/10 flex items-center justify-center text-2xl">
          {t.icon}
        </div>
        <StarRating />
      </div>

      {/* Quote */}
      <blockquote className="text-white/70 leading-relaxed flex-1 mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Bottom: person + result */}
      <div className="flex items-end justify-between gap-3 pt-5 border-t border-white/5">
        <div>
          <p className="font-semibold text-white text-sm">{t.name}</p>
          <p className="text-white/30 text-xs">
            {t.age} anos &middot; {t.role}
          </p>
        </div>
        <div className="text-right">
          <p className="text-green-cta text-xs font-bold flex items-center gap-1 justify-end">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t.result}
          </p>
          <p className="text-white/20 text-[10px] mt-0.5">{t.app}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-14 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-dark/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-light/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs text-purple-glow font-medium uppercase tracking-wider mb-6">
            Histórias Reais
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            5 mulheres. 5 apps.{" "}
            <span className="text-gradient-purple">Zero código.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Elas não sabiam programar. Hoje constroem com IA.
          </p>
        </motion.div>

        {/* Stats mini bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-14"
        >
          {[
            { value: "70%", label: "áreas não-tech" },
            { value: "5 dias", label: "média 1o app" },
            { value: "4.9/5", label: "avaliação" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">{stat.value}</span>
              <span className="text-white/30 text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Row 1: Large (4 cols) + Medium (2 cols) */}
          <div className="md:col-span-4">
            <TestimonialCard t={testimonials[0]} delay={0.2} className="h-full" />
          </div>
          <div className="md:col-span-2">
            <TestimonialCard t={testimonials[1]} delay={0.3} className="h-full" />
          </div>

          {/* Row 2: Medium (2 cols) + Medium (2 cols) + Medium (2 cols) */}
          <div className="md:col-span-2">
            <TestimonialCard t={testimonials[2]} delay={0.35} className="h-full" />
          </div>
          <div className="md:col-span-2">
            <TestimonialCard t={testimonials[3]} delay={0.4} className="h-full" />
          </div>

          {/* Stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="md:col-span-2 glass rounded-3xl p-7 flex flex-col items-center justify-center text-center border-glow-anim"
          >
            <div className="text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-gradient-purple mb-2">
              100+
            </div>
            <p className="text-white/40 text-sm">
              mulheres se inscreveram
              <br />
              <span className="text-white/20">nesta semana</span>
            </p>
            <a
              href="https://hub.culturabuilder.com/hub/subscription?couponCode=OFF100SDMCB&planId=3"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-green-cta hover:text-white text-xs font-bold transition-colors flex items-center gap-1"
            >
              Fazer parte
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          {/* Row 3: Full width last testimonial */}
          <div className="md:col-span-6">
            <TestimonialCard t={testimonials[4]} delay={0.5} />
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-6">
            Tudo usando IA. Tudo sem programar. Tudo dentro do{" "}
            <span className="text-white font-semibold">Hub Cultura Builder</span>.
          </p>
          <a
            href="https://hub.culturabuilder.com/hub/subscription?couponCode=OFF100SDMCB&planId=3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-cta hover:text-white font-bold transition-colors"
          >
            Quero começar minha história
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
