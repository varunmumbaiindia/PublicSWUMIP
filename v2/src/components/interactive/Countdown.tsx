"use client";
import { useEffect, useMemo, useState } from "react";

type T = { label: string; value: string };

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  // Target: 2026-01-01 00:00:00 IST (+05:30)
  const target = useMemo(() => new Date("2026-01-01T00:00:00+05:30").getTime(), []);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: T[] = [
    { label: "Days", value: String(days) },
    { label: "Hours", value: pad(hours) },
    { label: "Minutes", value: pad(minutes) },
    { label: "Seconds", value: pad(seconds) },
  ];

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {parts.map((p) => (
        <div
          key={p.label}
          className="glass rounded-2xl px-6 py-4 min-w-[110px] text-center shadow-soft border border-white/60"
          style={{ background: "rgba(255,255,255,0.7)" }}
          aria-label={`${p.label} remaining`}
        >
          <div className="text-3xl font-semibold text-[#2B2F33]">{p.value}</div>
          <div className="text-xs tracking-wide text-[#6A6E73]">{p.label}</div>
        </div>
      ))}
    </div>
  );
}
