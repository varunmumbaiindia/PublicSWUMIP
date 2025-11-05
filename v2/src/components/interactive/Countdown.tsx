"use client";

import { useEffect, useState } from "react";

type TimePart = {
  label: string;
  value: string;
  aria: string;
};

const TARGET_TIMESTAMP = new Date("2026-01-01T00:00:00+05:30").getTime();

const pad = (value: number) => value.toString().padStart(2, "0");

const getRemaining = () => Math.max(TARGET_TIMESTAMP - Date.now(), 0);

const splitTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export default function Countdown() {
  const [remaining, setRemaining] = useState<number>(getRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = splitTime(remaining);

  const parts: TimePart[] = [
    {
      label: "Days",
      value: days.toString(),
      aria: `${days} day${days === 1 ? "" : "s"} remaining`,
    },
    {
      label: "Hours",
      value: pad(hours),
      aria: `${hours} hour${hours === 1 ? "" : "s"} remaining`,
    },
    {
      label: "Minutes",
      value: pad(minutes),
      aria: `${minutes} minute${minutes === 1 ? "" : "s"} remaining`,
    },
    {
      label: "Seconds",
      value: pad(seconds),
      aria: `${seconds} second${seconds === 1 ? "" : "s"} remaining`,
    },
  ];

  return (
    <div className="w-full px-4">
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {parts.map(({ label, value, aria }) => (
          <div
            key={label}
            aria-label={aria}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/20 p-6 text-center shadow-lg backdrop-blur-lg backdrop-saturate-150 dark:border-white/10 dark:bg-white/10"
          >
            <span className="text-3xl font-semibold tracking-tight text-slate-900 drop-shadow-sm dark:text-white sm:text-4xl">
              {value}
            </span>
            <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
