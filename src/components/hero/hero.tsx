import Image from "next/image";
import { HeroImg } from "@/assets/img";
import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ScrollIndicator } from "../scroll-indicator";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HeroImg}
          alt="LiveWell event"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Left Countdown */}
      <div className="absolute left-6 top-[50%] -translate-y-1/2 flex flex-col items-center gap-2 text-center">
        <span className="text-sm md:text-base font-semibold tracking-widest uppercase">
          Countdown
        </span>
        <div className="flex flex-row md:flex-col gap-2 font-extrabold font-satoshi text-4xl md:text-5xl leading-none">
          <span>50</span>
          <span>:</span>
          <span>12</span>
          <span>:</span>
          <span>35</span>
          <span>:</span>
          <span>12</span>
        </div>
      </div>

      {/* Hero text center */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-extrabold tracking-tight italic">
            LIVEWELL FOR LIFE
          </h1>
          <p className="text-base sm:text-lg max-w-xl opacity-90">
            A movement to inspire healthier living and build stronger
            communities.
          </p>
          <Button className="bg-primary-500">Join the movement</Button>
        </div>
      </div>

      {/* Right social icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <a href="#" className="hover:opacity-80">
          <FaFacebookF size={18} />
        </a>
        <a href="#" className="hover:opacity-80">
          <FaInstagram size={18} />
        </a>
        <a href="#" className="hover:opacity-80">
          <FaLinkedinIn size={18} />
        </a>
      </div>

      <ScrollIndicator />
    </section>
  );
};
