import { WhitePattern } from "@/assets/img";
import {
  About,
  Blogs,
  SeatReservationBanner,
  SponsorsBanner,
  Volunteer,
} from "@/components";
import { Events } from "@/components/events";
import { Faq } from "@/components/faq/faq";
import { Hero } from "@/components/hero";
// import { News } from "@/components/news";
import { SocialWall } from "@/components/social-wall";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-dvh">
      <Hero />
      <SponsorsBanner />
      <About />
      <Events />
      <div className="relative">
        <Image
          src={WhitePattern}
          alt={"white background pattern"}
          className="absolute right-0 top-22 w-full hidden md:block md:h-[400px] lg:h-[800px]"
        />
        <SocialWall />
        <Volunteer />
      </div>
      <SeatReservationBanner />
      <Faq />

      {/* uncomment when client starts using sanity */}
      {/* <News /> */}
      <Blogs />
    </div>
  );
}
