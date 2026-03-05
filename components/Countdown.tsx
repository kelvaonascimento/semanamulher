"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-03-08T23:59:59-03:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  if (compact) {
    const cBlocks = [
      { value: timeLeft.days, label: "d" },
      { value: timeLeft.hours, label: "h" },
      { value: timeLeft.minutes, label: "m" },
      { value: timeLeft.seconds, label: "s" },
    ];

    return (
      <div className="flex items-center gap-1.5">
        {cBlocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-1.5">
            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-purple-glow font-medium">
                {block.label}
              </span>
            </div>
            {i < cBlocks.length - 1 && (
              <span className="text-purple-light/40 text-xs">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className="flex gap-3">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[70px]"
        >
          <span className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white tabular-nums">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-white/50 uppercase tracking-wider mt-1">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
