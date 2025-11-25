"use client";

import { useState } from "react";
import { FooterLogo } from "@/assets/svg";
import { Button } from "../ui/button";
import { MailIcon, PhoneCallIcon, Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { BluePatternLeft, BluePatternRight } from "@/assets/img";
import Link from "next/link";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubscribe() {
    if (!email.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email",
      });
      return;
    }

    try {
      setLoading(true);
      setSubmitMessage(null);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        setSubmitMessage({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitMessage({
        type: "success",
        text: "You're subscribed! Please check your email for confirmation.",
      });
      setEmail("");
    } catch (err) {
      console.error(err);
      setSubmitMessage({
        type: "error",
        text: "Unable to subscribe at the moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="relative bg-primary-600 text-neutral-100 w-full rounded-t-[12px] px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-25 overflow-hidden">
      <Image
        src={BluePatternLeft}
        alt="background pattern left"
        className="absolute left-0 bottom-0 h-[150px] w-[120px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[280px] lg:h-[309.96px] lg:w-[350px] object-cover opacity-90"
      />
      <Image
        src={BluePatternRight}
        alt="background pattern right"
        className="absolute right-0 top-0 h-[150px] w-[120px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[280px] lg:h-[309.96px] lg:w-[350px] object-cover opacity-90"
      />

      <div className="relative flex flex-col lg:flex-row gap-10 md:gap-20 justify-between">
        <div className="flex flex-col gap-4">
          <FooterLogo />
          <p className="text-sm font-font-general">
            Copyright © {new Date().getFullYear()} Livewell Festival
          </p>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="flex flex-col gap-3">
          <p className="font-general font-bold text-lg text-neutral-100">
            Subscribe to Newsletter
          </p>

          <input
            placeholder="example@gmail.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="border p-3 w-full sm:w-[287px] placeholder:text-neutral-300 placeholder:text-sm placeholder:leading-[21px] border-neutral-200 rounded-[100px] focus:outline-none disabled:opacity-50"
          />

          {submitMessage && (
            <div
              className={`p-3 rounded-full text-sm font-medium ${
                submitMessage.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <Button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-primary-500 shadow-[2px_4px_2px_0px_rgba(255,255,255,0.15)] hover:shadow-[2px_4px_2px_0px_rgba(255,255,255,0.25)] w-full sm:w-[287px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Get updates"}
          </Button>
        </div>

        <div className="order-3 md:order-4 flex flex-col gap-2 font-general text-neutral-100 text-base md:text-lg">
          <span className="font-bold">Site Map</span>
          <Link href="/reserve-seat" className="hover:text-blue-200">
            <span>Buy tickets</span>
          </Link>
          <Link href="/" className="hover:text-blue-200">
            <span>Schedule</span>
          </Link>
          <Link className="hover:text-blue-200" href="/">
            <span>Media</span>
          </Link>
          <Link className="hover:text-blue-200" href="/">
            <span>Blog</span>
          </Link>
        </div>

        <div className="order-4 md:order-3 flex flex-col gap-5 text-neutral-100 font-general">
          <span className="text-lg font-bold">Connect with us</span>

          <div className="flex items-center gap-2">
            <PhoneCallIcon className="w-5 h-5" />
            <span>+233 54 945 3049</span>
          </div>

          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5" />
            <span>info@livewellfestival.life</span>
          </div>

          <div className="flex items-center gap-4">
            <Instagram className="w-6 h-6" />
            <FaFacebook className="w-6 h-6" />
            <FaXTwitter className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
