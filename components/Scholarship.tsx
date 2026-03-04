"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const TOTAL_STEPS = 4;

export default function Scholarship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    area: "",
    historia: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canAdvance = () => {
    if (step === 0) return true;
    if (step === 1) return form.nome && form.email && form.whatsapp;
    if (step === 2) return form.area && form.historia;
    if (step === 3) return true;
    return false;
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.07] transition-all duration-300";

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

        {/* How it works - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14"
        >
          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                num: "1",
                title: "Conte sua história",
                desc: "Preencha o formulário abaixo com seus dados e grave um vídeo curto (até 2 min) contando por que você quer aprender IA. Seja autêntica — não existe resposta errada.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                ),
              },
              {
                num: "2",
                title: "Avaliação pela equipe",
                desc: "Jess e Ju da equipe Cultura Builder vão assistir cada vídeo e ler cada história pessoalmente, com aprovação final da Diana. Buscamos vontade real de construir.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                ),
              },
              {
                num: "3",
                title: "Resultado 08/03",
                desc: "As 5 bolsistas serão anunciadas no Dia da Mulher (domingo 08/03) nas redes da Cultura Builder e notificadas por WhatsApp.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0"
                  />
                ),
              },
            ].map((item, i) => (
              <div key={item.num} className="relative flex flex-col items-center text-center px-6 py-8">
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-[52px] -right-0 w-full h-[1px] bg-gradient-to-r from-yellow-500/30 to-yellow-500/10 z-0" />
                )}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <span className="text-yellow-500/60 text-xs font-bold uppercase tracking-widest mb-2">
                  Passo {item.num}
                </span>
                <h4 className="font-bold text-white text-base mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wizard Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-white/[0.03] border border-yellow-500/20 rounded-3xl overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            {/* Progress bar */}
            <div className="h-1 bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                initial={{ width: "0%" }}
                animate={{ width: submitted ? "100%" : `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-cta/20 border border-green-cta/30 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-2xl mb-3 font-[family-name:var(--font-space-grotesk)]">
                      História enviada com sucesso!
                    </h3>
                    <p className="text-white/60 text-sm max-w-md mb-2">
                      Sua inscrição foi recebida. Jess, Ju e Diana vão analisar sua história pessoalmente.
                    </p>
                    <p className="text-white/40 text-sm max-w-md">
                      O resultado será anunciado no dia <strong className="text-yellow-400">08 de março (Dia da Mulher)</strong> nas
                      redes da Cultura Builder e você será notificada pelo WhatsApp.
                    </p>
                    <div className="mt-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-6 py-3">
                      <p className="text-yellow-400 text-sm font-bold">
                        Boa sorte, builder! ✨
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step indicators */}
                    <div className="flex items-center gap-2 mb-8">
                      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => i < step && setStep(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === step
                              ? "w-8 bg-yellow-500"
                              : i < step
                              ? "w-2 bg-yellow-500/50 cursor-pointer hover:bg-yellow-500/70"
                              : "w-2 bg-white/10"
                          }`}
                        />
                      ))}
                      <span className="ml-auto text-xs text-white/30">
                        {step + 1} de {TOTAL_STEPS}
                      </span>
                    </div>

                    {/* STEP 0 - Welcome */}
                    {step === 0 && (
                      <div className="text-center py-4">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mx-auto mb-6">
                          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-2xl mb-3 font-[family-name:var(--font-space-grotesk)]">
                          Concorra a 1 ano de Hub Premium
                        </h3>
                        <p className="text-white/50 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                          Estamos oferecendo <strong className="text-yellow-400">5 bolsas integrais</strong> (valor: R$ 2.998 cada) para mulheres
                          que querem aprender IA e construir sem programar. Conte sua história em poucos passos.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-2">
                          {[
                            { icon: "👩", label: "Qualquer mulher" },
                            { icon: "🌎", label: "Qualquer área" },
                            { icon: "💡", label: "Qualquer nível" },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="bg-white/5 rounded-xl py-3 px-4 text-center"
                            >
                              <span className="text-lg block mb-1">{item.icon}</span>
                              <span className="text-white/50 text-xs">{item.label}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-white/30 text-xs mt-4">
                          Não precisa saber nada de tecnologia. Buscamos histórias autênticas.
                        </p>
                      </div>
                    )}

                    {/* STEP 1 - Dados pessoais */}
                    {step === 1 && (
                      <div>
                        <h3 className="font-bold text-xl mb-1 font-[family-name:var(--font-space-grotesk)]">
                          Seus dados
                        </h3>
                        <p className="text-white/40 text-sm mb-6">
                          Como podemos entrar em contato com você.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-white/50 text-xs font-medium mb-1.5">
                              Nome completo *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.nome}
                              onChange={(e) => update("nome", e.target.value)}
                              placeholder="Seu nome completo"
                              className={inputClass}
                            />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-white/50 text-xs font-medium mb-1.5">
                                Email *
                              </label>
                              <input
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => update("email", e.target.value)}
                                placeholder="seu@email.com"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="block text-white/50 text-xs font-medium mb-1.5">
                                WhatsApp *
                              </label>
                              <input
                                type="tel"
                                required
                                value={form.whatsapp}
                                onChange={(e) => update("whatsapp", e.target.value)}
                                placeholder="(11) 99999-9999"
                                className={inputClass}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 - História */}
                    {step === 2 && (
                      <div>
                        <h3 className="font-bold text-xl mb-1 font-[family-name:var(--font-space-grotesk)]">
                          Sua história
                        </h3>
                        <p className="text-white/40 text-sm mb-6">
                          Quanto mais autêntica, melhor — não existe resposta errada.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-white/50 text-xs font-medium mb-1.5">
                              Sua área de atuação *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.area}
                              onChange={(e) => update("area", e.target.value)}
                              placeholder="Ex: Marketing, Direito, Design, Saúde..."
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className="block text-white/50 text-xs font-medium mb-1.5">
                              Por que você quer aprender IA? *
                            </label>
                            <textarea
                              required
                              rows={5}
                              value={form.historia}
                              onChange={(e) => update("historia", e.target.value)}
                              placeholder="O que te motivou a querer aprender? O que você sonha construir? Qual transformação busca na sua vida ou carreira?"
                              className={`${inputClass} resize-none`}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 - Vídeo + Revisão */}
                    {step === 3 && (
                      <div>
                        <h3 className="font-bold text-xl mb-1 font-[family-name:var(--font-space-grotesk)]">
                          Envie seu vídeo
                        </h3>
                        <p className="text-white/40 text-sm mb-6">
                          Grave um vídeo curto (até 2 min) contando sua história. Pode ser pelo celular, sem edição — o que importa é a autenticidade.
                        </p>

                        {/* Video upload area */}
                        <div
                          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={handleDrop}
                          className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 mb-6 ${
                            dragOver
                              ? "border-yellow-500 bg-yellow-500/10"
                              : videoFile
                              ? "border-green-cta/50 bg-green-cta/5"
                              : "border-white/10 hover:border-yellow-500/30 hover:bg-white/[0.02]"
                          }`}
                        >
                          {videoFile ? (
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-green-cta/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white text-sm font-medium">{videoFile.name}</p>
                                <p className="text-white/40 text-xs mt-1">
                                  {(videoFile.size / 1024 / 1024).toFixed(1)} MB
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => setVideoFile(null)}
                                className="text-white/30 hover:text-white/60 text-xs underline transition-colors"
                              >
                                Remover e escolher outro
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white/60 text-sm">
                                  Arraste seu vídeo aqui ou{" "}
                                  <label className="text-yellow-400 hover:text-yellow-300 cursor-pointer underline transition-colors">
                                    clique para selecionar
                                    <input
                                      type="file"
                                      accept="video/*"
                                      onChange={handleFileSelect}
                                      className="hidden"
                                    />
                                  </label>
                                </p>
                                <p className="text-white/30 text-xs mt-2">
                                  MP4, MOV ou WebM • Até 2 minutos • Máx 100MB
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-2">
                          <p className="text-white/30 text-xs mb-3 uppercase tracking-wider font-medium">Dicas para o vídeo:</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {[
                              "Fale quem é você e o que faz",
                              "Por que quer aprender IA",
                              "O que sonha construir",
                              "Não precisa ser profissional",
                            ].map((tip) => (
                              <div key={tip} className="flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-yellow-500/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white/40 text-xs">{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <p className="text-white/20 text-xs text-center">
                          O vídeo é opcional mas aumenta muito suas chances.
                        </p>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Voltar
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < TOTAL_STEPS - 1 ? (
                        <button
                          type="button"
                          onClick={() => canAdvance() && setStep(step + 1)}
                          disabled={!canAdvance()}
                          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed text-black font-bold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
                        >
                          {step === 0 ? "Começar inscrição" : "Próximo"}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={loading}
                          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
                        >
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                                <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" />
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar minha história
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <p className="text-white/20 text-xs text-center mt-4">
                      Inscrições encerram sábado 07/03 às 23h59 · Resultado domingo 08/03
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* What you get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: "🎓", label: "Hub Premium 1 ano" },
            { icon: "🤖", label: "Claude Code + Brother AI" },
            { icon: "☁️", label: "+R$ 20k créditos AWS/NVIDIA" },
            { icon: "👩‍💻", label: "Comunidade Mulheres Builders" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl p-4 text-center"
            >
              <span className="text-lg block mb-2">{item.icon}</span>
              <span className="text-white/50 text-xs">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
