"use client";

import { useEffect, useState } from "react";
import { fetchCountdown } from "@/lib/queries/countdown-queries";

// timer type
type TimeLeft = {
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [eventDate, setEventDate] = useState<string | null>(null);

  const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) return { day: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      day: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // fetch
  useEffect(() => {
    const fetchDate = async () => {
      const data = (await fetchCountdown()) as { eventDate: string }[];
      if (data && data.length > 0 && data[0].eventDate) {
        setEventDate(data[0].eventDate);
      }
    };
    fetchDate();
  }, []);

  // update every second
  useEffect(() => {
    if (!eventDate) return;
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft(eventDate)),
      1000
    );
    return () => clearInterval(interval);
  }, [eventDate]);

  if (!eventDate || !timeLeft) return <p className="text-white">Loading...</p>;

  // format to get leading zeros
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="schedule">
      {/* mobile */}
      <div className="sm:hidden flex flex-col items-center gap-3 text-center py-8 mt-20">
        <span className="text-sm font-semibold tracking-widest italic text-white">
          Countdown
        </span>
        <div className="flex gap-2 font-extrabold text-2xl leading-none text-white">
          <span>{format(timeLeft.day)}</span>
          <span>:</span>
          <span>{format(timeLeft.hours)}</span>
          <span>:</span>
          <span>{format(timeLeft.minutes)}</span>
          <span>:</span>
          <span>{format(timeLeft.seconds)}</span>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center text-white">
        <span className="text-sm md:text-base font-semibold tracking-widest italic">
          Countdown
        </span>
        <div className="flex flex-col gap-2 font-extrabold text-2xl md:text-3xl lg:text-[41px] leading-none">
          <span>{format(timeLeft.day)}</span>
          <span>:</span>
          <span>{format(timeLeft.hours)}</span>
          <span>:</span>
          <span>{format(timeLeft.minutes)}</span>
          <span>:</span>
          <span>{format(timeLeft.seconds)}</span>
        </div>
      </div>
    </section>
  );
};
