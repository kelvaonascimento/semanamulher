"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não! O Hub Cultura Builder é feito para quem não sabe programar. Nossos cursos usam ferramentas de IA e no-code — você cria apps reais sem escrever uma linha de código.",
  },
  {
    q: "Preciso de cartão de crédito?",
    a: "Não. O trial de 7 dias é 100% gratuito. Sem cartão, sem compromisso, sem pegadinha.",
  },
  {
    q: "O que é o Brother AI?",
    a: "É o seu assistente pessoal de IA dentro do Hub. Ele tira dúvidas, sugere soluções e te ajuda a avançar nos projetos mais rápido.",
  },
  {
    q: "Como funciona o trial de 7 dias?",
    a: "Você se cadastra e ganha acesso completo ao Hub: 12 cursos, Brother AI, comunidade e todos os recursos. Depois de 7 dias, você decide se quer continuar.",
  },
  {
    q: "Como concorro à bolsa de estudo?",
    a: "Clique no botão 'Concorrer à Bolsa' na seção acima, preencha o formulário e conte sua história. As 5 bolsistas serão anunciadas no domingo, 08 de março (Dia da Mulher).",
  },
  {
    q: "Até quando posso me inscrever?",
    a: "O trial gratuito está disponível até domingo, 08/03. As inscrições para bolsas encerram no sábado, 07/03. A oferta de 30% OFF é válida apenas no sábado e domingo.",
  },
  {
    q: "Posso participar mesmo sem experiência em tecnologia?",
    a: "Com certeza! Essa campanha foi feita justamente para mulheres que querem começar. Não importa sua formação — se você tem vontade de aprender, esse é o seu lugar.",
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-white group-hover:text-purple-light transition-colors pr-4">
          {faq.q}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-purple-light shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-sm leading-relaxed pb-5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
