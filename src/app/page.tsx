import { Events } from "@/components/events";
import { SocialWall } from "@/components/social-wall";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 w-full min-h-dvh py-20 ">
      <Events />
      <SocialWall />
    </main>
  );
}
