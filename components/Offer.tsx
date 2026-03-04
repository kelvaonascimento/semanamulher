"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CHECKOUT_URL =
  "https://hub.culturabuilder.com/hub/subscription?couponCode=OFF100SDMCB&planId=3";

const CHECKOUT_30_URL =
  "https://hub.culturabuilder.com/hub/subscription?couponCode=OFF30SDMCB&planId=3";

const offers = [
  {
    tag: "OFERTA PRINCIPAL",
    tagColor: "bg-green-cta",
    tagText: "text-white",
    title: "7 dias GRÁTIS",
    subtitle: "Premium Completo — acesso total",
    price: "R$ 0",
    priceNote: "R$ 2.998/ano",
    features: [
      "Acesso completo ao Hub Premium",
      "Todos os módulos e cursos inclusos",
      "Brother AI + Tool Engenharia de Contexto",
      "Claude Code, Workshops e Lives",
      "+R$ 20k em créditos AWS/NVIDIA",
      "Github exclusivo + Fórum",
      "Sem cartão, sem compromisso",
    ],
    cta: "COMEÇAR TRIAL GRÁTIS",
    ctaStyle: "bg-green-cta hover:bg-green-cta-hover text-white pulse-cta",
    href: CHECKOUT_URL,
    highlighted: true,
    note: "100% grátis — cupom já aplicado",
  },
  {
    tag: "5 BOLSAS INTEGRAIS",
    tagColor: "bg-yellow-500",
    tagText: "text-black",
    title: "1 ano Premium",
    subtitle: "Conte sua história e concorra",
    price: "R$ 0",
    priceNote: "Valor: R$ 2.998",
    features: [
      "1 ano no Hub Premium Completo",
      "Todos os cursos + certificação",
      "Brother AI + mentoria da equipe",
      "Comunidade Mulheres Builders",
      "Créditos AWS/NVIDIA inclusos",
      "Resultado dia 08/03",
    ],
    cta: "CONCORRER À BOLSA",
    ctaStyle: "bg-yellow-500 hover:bg-yellow-400 text-black",
    href: "#bolsas",
    highlighted: false,
    note: "Inscrições até 07/03",
  },
  {
    tag: "30% OFF",
    tagColor: "bg-purple-light",
    tagText: "text-white",
    title: "Premium Completo",
    subtitle: "Para quem já fez o trial",
    price: "12x R$ 174",
    priceNote: "12x R$ 249,83",
    features: [
      "Hub Premium por 1 ano completo",
      "Todos os módulos desbloqueados",
      "Atualizações e novos conteúdos",
      "+R$ 20k em créditos inclusos",
      "Certificação Blockchain",
      "7 dias de garantia total",
    ],
    cta: "GARANTIR 30% OFF",
    ctaStyle: "bg-purple-light hover:bg-purple-glow text-white",
    href: CHECKOUT_30_URL,
    highlighted: false,
    note: "Válido sábado e domingo apenas",
  },
];

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="trial" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            Escolha como{" "}
            <span className="text-gradient-purple">começar</span>
          </h2>
          <p className="text-white/60 text-lg">
            Três caminhos. Um objetivo: você construindo com IA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.tag}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-3xl p-[1px] ${
                offer.highlighted
                  ? "bg-gradient-to-b from-green-cta/60 to-green-cta/10"
                  : "bg-gradient-to-b from-white/15 to-white/5"
              }`}
            >
              {offer.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-cta text-white text-xs font-bold px-4 py-1 rounded-full z-10">
                  MAIS POPULAR
                </div>
              )}

              <div className="h-full rounded-3xl bg-dark-card p-8 flex flex-col">
                <span
                  className={`inline-block self-start ${offer.tagColor} ${offer.tagText} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5`}
                >
                  {offer.tag}
                </span>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-1">
                  {offer.title}
                </h3>
                <p className="text-white/40 text-sm mb-5">{offer.subtitle}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-cta">
                    {offer.price}
                  </span>
                  {offer.priceNote && (
                    <span className="text-sm text-white/30 ml-2 line-through">
                      {offer.priceNote}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {offer.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-green-cta shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={offer.href}
                  target={offer.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    offer.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`block w-full text-center font-bold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] ${offer.ctaStyle}`}
                >
                  {offer.cta}
                </a>

                <p className="text-white/30 text-xs text-center mt-3">
                  {offer.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
