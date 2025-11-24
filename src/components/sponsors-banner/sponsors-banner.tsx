import {
  BallGbeeLogo,
  BeyondLogo,
  BouquetLogo,
  GlassHouseLogo,
  PluginLogo,
  SocialGoodLogo,
  SponsoredBy,
} from "@/assets/img";
import { InfiniteSlider } from "../../../components/motion-primitives/infinite-slider";
import Image from "next/image";

const bannerItems = [
  SponsoredBy,
  GlassHouseLogo,
  BallGbeeLogo,
  PluginLogo,
  BouquetLogo,
  SocialGoodLogo,
  BeyondLogo,
];

export const SponsorsBanner = () => {
  return (
    <div className="w-full max-w-full bg-primary-600 py-4 md:py-6 overflow-hidden">
      <InfiniteSlider gap={24} className="w-full">
        {bannerItems.map((item, index) => (
          <div
            className="flex items-center justify-center h-12 sm:h-16 w-32 sm:w-40 md:w-48 px-2"
            key={index}
          >
            <Image
              height={48}
              width={120}
              src={item}
              alt={"Sponsor Logo"}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};
