"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    num: "1",
    title: "Preencha o formulário",
    desc: "Conte sua história: quem é você, sua área de atuação e por que quer aprender IA. Seja autêntica — não existe resposta errada.",
  },
  {
    num: "2",
    title: "Avaliação pela equipe",
    desc: "Jess e Ju da equipe CB vão ler cada história pessoalmente, com aprovação final da Diana. Buscamos mulheres com vontade real de construir.",
  },
  {
    num: "3",
    title: "Resultado no Dia da Mulher",
    desc: "As 5 bolsistas serão anunciadas no domingo 08/03 (Dia da Mulher) nas redes da Cultura Builder e notificadas por WhatsApp.",
  },
];

export default function Scholarship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section ref={ref} id="bolsas" className="relative py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            Concorra agora
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            5 Bolsas Integrais
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            1 ano completo no Hub Premium Cultura Builder (valor: R$ 2.998).
            <br />
            Para mulheres que querem aprender IA e construir sem programar.
          </p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-5 mb-14"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative glass rounded-2xl p-6 text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-yellow-500/30" />
              )}
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold text-sm mx-auto mb-4">
                {step.num}
              </div>
              <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/[0.03] border border-yellow-500/20 rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-5">
            {/* Left - Info */}
            <div className="md:col-span-2 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-8 md:p-10">
              <h3 className="font-bold text-xl mb-6 text-yellow-400 font-[family-name:var(--font-space-grotesk)]">
                O que a bolsista ganha
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Hub Premium Completo por 1 ano",
                  "Todos os módulos (iniciante ao avançado)",
                  "Claude Code + Brother AI",
                  "Workshops, Lives e AI Brasil",
                  "Github exclusivo + Fórum",
                  "+R$ 20k em créditos AWS/NVIDIA",
                  "Certificação incluída",
                  "Comunidade Mulheres Builders",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/70 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-yellow-400 shrink-0"
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
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 space-y-2">
                <p className="text-white/70 text-xs leading-relaxed">
                  <span className="text-yellow-400 font-bold">Quem pode participar:</span>{" "}
                  Qualquer mulher, de qualquer idade, área ou nível de experiência. Não precisa saber nada de tecnologia.
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  <span className="text-yellow-400 font-bold">Critério de seleção:</span>{" "}
                  Vontade genuína de aprender e construir. Histórias autênticas e motivação real.
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  <span className="text-yellow-400 font-bold">Prazo:</span>{" "}
                  Inscrições até sábado 07/03 às 23h59. Resultado domingo 08/03.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:col-span-3 p-8 md:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-cta/20 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-green-cta"
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
                  </div>
                  <h3 className="font-bold text-xl mb-2 font-[family-name:var(--font-space-grotesk)]">
                    História enviada!
                  </h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Sua inscrição foi recebida. O resultado será anunciado no dia
                    08 de março (Dia da Mulher) nas redes da Cultura Builder e
                    você será notificada pelo WhatsApp.
                  </p>
                  <p className="text-yellow-400 text-sm font-medium mt-4">
                    Boa sorte, builder!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-xl mb-1 font-[family-name:var(--font-space-grotesk)]">
                    Conte sua história
                  </h3>
                  <p className="text-white/40 text-sm mb-6">
                    Preencha todos os campos para concorrer a uma das 5 bolsas.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Seu nome"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="seu@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">
                          WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5">
                          Sua área de atuação *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Marketing, Direito, Design..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5">
                        Por que você quer aprender IA? Conte sua história. *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="O que te motivou a querer aprender? O que você sonha construir? Qual transformação busca na sua vida ou carreira? Quanto mais autêntica, melhor — não existe resposta errada."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              className="opacity-25"
                            />
                            <path
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              fill="currentColor"
                              className="opacity-75"
                            />
                          </svg>
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          ENVIAR MINHA HISTÓRIA
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
                        </>
                      )}
                    </button>

                    <p className="text-white/20 text-xs text-center">
                      Inscrições encerram sábado 07/03 às 23h59 &middot; Resultado
                      domingo 08/03
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
