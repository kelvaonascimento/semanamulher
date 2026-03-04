"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CampaignConcept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-purple-dark/60 text-xs uppercase tracking-[0.25em] mb-4 font-medium">
            Sobre a campanha
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Mulheres que{" "}
            <span className="bg-gradient-to-r from-purple-dark to-purple-light bg-clip-text text-transparent">
              Constroem
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A Cultura Builder é a maior comunidade de builders da América Latina.
            E na Semana da Mulher 2026, estamos abrindo as portas para quem quer
            construir com IA — sem precisar programar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gray-900 mb-4">
              Por que essa campanha existe?
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Apenas <strong className="text-purple-dark">9% do nosso público é feminino</strong>.
              Enquanto mulheres representam 47% do crescimento em cursos de IA,
              a nossa comunidade — e toda a concorrência — continua dominada por homens.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Isso não é uma estatística. É um problema. E a gente decidiu fazer
              algo sobre isso. Esta semana, a porta está aberta: trial gratuito,
              bolsas integrais e desconto exclusivo para mulheres que querem aprender
              IA e construir projetos reais.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <p className="text-purple-dark font-[family-name:var(--font-space-grotesk)] font-bold text-sm whitespace-nowrap">
                02 a 08 de Março de 2026
              </p>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                num: "01",
                title: "Não é sobre flores",
                desc: "É sobre oportunidade real. Acesso a ferramentas, conhecimento e comunidade que transforma carreiras.",
              },
              {
                num: "02",
                title: "Não precisa saber programar",
                desc: "Com IA e no-code, qualquer mulher pode criar apps, automações e projetos profissionais do zero.",
              },
              {
                num: "03",
                title: "Não é parabéns, é ação",
                desc: "7 dias grátis, 5 bolsas integrais e 30% OFF. Três caminhos concretos para começar agora.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-purple-light/30 hover:shadow-lg hover:shadow-purple-dark/5 transition-all duration-300 group"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-purple-light/30 group-hover:text-purple-light transition-colors shrink-0">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-dark transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-dark to-purple-light rounded-2xl px-10 py-6">
            <p className="font-[family-name:var(--font-space-grotesk)] text-white text-xl md:text-2xl font-bold">
              &ldquo;Não é sobre flores. É sobre código.&rdquo;
            </p>
            <p className="text-white/60 text-sm mt-2">
              Cultura Builder — Semana da Mulher 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
