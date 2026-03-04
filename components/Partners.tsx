"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "AWS",
    logo: "/logos/aws.png",
    value: "+R$ 25k",
    desc: "em créditos AWS",
    width: 80,
    height: 48,
  },
  {
    name: "NVIDIA",
    logo: "/logos/nvidia.jpg",
    value: "+R$ 255k",
    desc: "em recursos NVIDIA",
    width: 100,
    height: 48,
  },
];

const companyLogos = [
  { name: "Samsung", src: "/logos/samsung.svg", w: 100, h: 20 },
  { name: "Microsoft", src: "/logos/microsoft.png", w: 90, h: 20 },
  { name: "MIT", src: "/logos/mit.svg", w: 50, h: 24 },
  { name: "Wired", src: "/logos/wired.svg", w: 70, h: 18 },
  { name: "Nestlé", src: "/logos/nestle.svg", w: 50, h: 50 },
  { name: "L'Oréal", src: "/logos/loreal.png", w: 70, h: 30 },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicate logos for seamless infinite scroll
  const marqueeLogos = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <section ref={ref} className="relative py-20 px-4">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-dark/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white/30 text-xs uppercase tracking-[0.25em] mb-12"
        >
          Infraestrutura e parceiros exclusivos
        </motion.p>

        {/* Main partner cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="card-shine glass glass-hover rounded-2xl p-8 flex items-center gap-6 transition-all duration-500"
            >
              <div className="shrink-0 w-24 h-16 bg-white rounded-xl flex items-center justify-center p-3">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  className="w-auto h-full object-contain"
                />
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  {p.value}
                </p>
                <p className="text-white/50 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-center text-white/20 text-xs uppercase tracking-[0.2em] mb-8">
            Mentores com experiência em empresas como
          </p>

          {/* Marquee container */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="flex items-center gap-16 animate-marquee w-max">
              {marqueeLogos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.w}
                    height={logo.h}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
