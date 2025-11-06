import { Footer, Navbar } from "@/components";
import { Events } from "@/components/events";
import { SocialWall } from "@/components/social-wall";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 w-full min-h-dvh">
      <Navbar />
      <Events />
      <SocialWall />
      <Footer />
    </main>
  );
}
