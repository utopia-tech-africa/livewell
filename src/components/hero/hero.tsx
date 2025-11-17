import Image from "next/image";
import { HeroImg } from "@/assets/img";
import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ScrollIndicator } from "../scroll-indicator";
import { FaXTwitter } from "react-icons/fa6";
import { Countdown } from "../countdown";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-between items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImg}
          alt="LiveWell event"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Desktop Countdown */}
      <Countdown />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 flex-1 py-8 sm:py-12">
        <div className="max-w-3xl lg:max-w-4xl flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <h1 className="text-4xl sm:text-[55px] md:text-[60px] lg:text-[65px] xl:text-[70px] font-extrabold tracking-tight italic leading-tight sm:leading-tight md:leading-tight">
            LIVEWELL FOR LIFE
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-xl md:max-w-2xl opacity-90 leading-relaxed sm:leading-relaxed md:leading-relaxed px-2 sm:px-0">
            A movement to inspire healthier living and build stronger
            communities.
          </p>
          <a href="#volunteer">
            <Button className="bg-primary-500 text-sm sm:text-base md:text-lg mt-2 sm:mt-4 md:mt-6">
              Join the movement
            </Button>
          </a>
        </div>
      </div>

      {/* Social Links with Full Height Vertical Line */}
      <div className="hidden sm:flex absolute right-4 md:right-6 lg:right-8 top-0 bottom-0 items-center">
        <div className="flex items-center h-full">
          <div className="h-full w-px bg-white/40 mr-1"></div>
          <div className="flex flex-col gap-4 md:gap-5">
            {[
              { icon: <FaFacebookF size={20} />, href: "#" },
              { icon: <FaInstagram size={20} />, href: "#" },
              { icon: <FaLinkedinIn size={20} />, href: "#" },
              { icon: <FaXTwitter size={20} />, href: "#" },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="hover:opacity-80 transition-opacity duration-200 p-2 hover:bg-black/50 hover:rounded-full"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <ScrollIndicator />
      </div>
    </section>
  );
};
