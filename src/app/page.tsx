import { Footer, Navbar } from "@/components";
import { Events } from "@/components/events";
import { News } from "@/components/news";
import { SocialWall } from "@/components/social-wall";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 w-full min-h-dvh">
      <Navbar />
      <Events />
      <SocialWall />
      <News />
      <Footer />
    </main>
  );
}
