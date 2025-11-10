import { About, Footer, Navbar, SponsorsBanner } from "@/components";
import { Events } from "@/components/events";
import { Faq } from "@/components/faq/faq";
import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { SeatReservation } from "@/components/seat-reservation";
import { SocialWall } from "@/components/social-wall";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-dvh">
      <Navbar />
      <Hero />
      <SponsorsBanner />
      <About />
      <Events />
      <SocialWall />
      <SeatReservation />
      <Faq />
      <News />
      <Footer />
    </main>
  );
}
