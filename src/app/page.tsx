import { Footer, Navbar } from "@/components";
import { Events } from "@/components/events";
import { Faq } from "@/components/faq/faq";
import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { SocialWall } from "@/components/social-wall";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 w-full min-h-dvh">
      <Navbar />
      <Hero />
      <Events />
      <SocialWall />
      <Faq />
      <News />
      <Footer />
    </main>
  );
}
