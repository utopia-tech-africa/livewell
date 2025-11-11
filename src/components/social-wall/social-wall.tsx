import { ComponentLayout } from "../component-layout";
import { SocialWallCards } from "./social-wall-cards";

export const SocialWall = () => {
  return (
    <section id="media" className="mt-[90px] md:mt-[100px] lg:mt-[120px]">
      <ComponentLayout>
        <SocialWallCards />
      </ComponentLayout>
    </section>
  );
};
