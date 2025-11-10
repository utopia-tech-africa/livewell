import { FooterLogo } from "@/assets/svg";
import { Button } from "../ui/button";
import { MailIcon, PhoneCallIcon, Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-primary-600 text-neutral-100 w-full rounded-t-[12px] px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 justify">
        <div className="flex flex-col gap-4">
          <FooterLogo />
          <p className="text-sm md:text-base font-font-general">
            Copyright © {new Date().getFullYear()} Livewell Festival
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-general font-bold text-lg text-neutral-100">
            Subscribe to Newsletter
          </p>
          <input
            placeholder="example@gmail.com"
            type="text"
            className="border p-3 w-full sm:w-[287px] placeholder:text-neutral-300 placeholder:text-sm placeholder:leading-[21px] border-neutral-200 rounded-[100px] focus:outline-none"
          />
          <Button className="bg-primary-500 shadow-[2px_4px_2px_0px_rgba(255,255,255,0.15)] hover:shadow-[2px_4px_2px_0px_rgba(255,255,255,0.25)] w-full sm:w-[287px]">
            Get updates
          </Button>
        </div>

        <div className="order-3 md:order-4 flex flex-col gap-2 font-general text-neutral-100 text-base md:text-lg">
          <span className="font-bold">Site Map</span>
          <span>Buy tickets</span>
          <span>Schedule</span>
          <span>Speakers</span>
          <span>Media</span>
          <span>Blog</span>
        </div>

        <div className="order-4 md:order-3 flex flex-col gap-5 text-neutral-100 font-general">
          <span className="text-lg font-bold">Connect with us</span>
          <div className="flex items-center gap-2">
            <PhoneCallIcon className="w-5 h-5" />
            <span>+31 687 062 84</span>
          </div>

          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5" />
            <span>livewelllifefestival@gmail.com</span>
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
