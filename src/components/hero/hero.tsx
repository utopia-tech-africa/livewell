import Image from "next/image";
import { HeroImg } from "@/assets/img";
import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ScrollIndicator } from "../scroll-indicator";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-between overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImg}
          alt="LiveWell event"
          fill
          priority
          className="object-cover h-[651px]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* mobile */}
      <div className="sm:hidden w-full pt-40">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-sm font-semibold tracking-widest italic">
            Countdown
          </span>
          <div className="flex gap-2 font-extrabold font-satoshi text-[24px] md:text-[26px] lg:text-[38px] leading-none">
            <span>50</span>
            <span>:</span>
            <span>12</span>
            <span>:</span>
            <span>35</span>
            <span>:</span>
            <span>12</span>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex absolute left-4 md:left-8 top-[60%] -translate-y-1/2 flex-col items-center gap-2 text-center">
        <span className="text-xs sm:text-sm md:text-base font-semibold tracking-widest italic">
          Countdown
        </span>
        <div className="flex flex-col gap-1 md:gap-2 font-extrabold font-satoshi text-3xl md:text-[41px] leading-none">
          <span>50</span>
          <span>:</span>
          <span>12</span>
          <span>:</span>
          <span>35</span>
          <span>:</span>
          <span>12</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-12 flex-1">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h1 className="text-[34px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-extrabold tracking-tight italic leading-tight">
            LIVEWELL FOR LIFE
          </h1>
          <p className="text-sm hidden md:block sm:text-base md:text-lg max-w-xl opacity-90 leading-relaxed">
            A movement to inspire healthier living and build stronger
            communities.
          </p>
          <Button className="bg-primary-500 hidden sm:inline-flex text-sm sm:text-base px-5 sm:px-8 py-2 sm:py-3 mt-2">
            Join the movement
          </Button>
        </div>
      </div>

      <div className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
        {[
          { icon: <FaFacebookF size={18} />, href: "#" },
          { icon: <FaInstagram size={18} />, href: "#" },
          { icon: <FaLinkedinIn size={18} />, href: "#" },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="flex justify-center mb-6 sm:mb-10">
        <ScrollIndicator />
      </div>
    </section>
  );
};
