import { fetchSocialWallImages } from "@/lib/queries/social-wall-queries";
import { ErrorText } from "../texts/error-text";
import { SocialWallImagesClient } from "./social-wall-images-client";
import { Heading } from "../texts/heading";

export const SocialWallCards = async () => {
  const socialWall = (await fetchSocialWallImages()) || [];

  if (socialWall === "error")
    return <ErrorText className="text-center">Network Error!</ErrorText>;

  if (!socialWall || socialWall.length === 0)
    return (
      <ErrorText className="text-center">No Social Wall Images!</ErrorText>
    );

  const socialWallImages = socialWall[0]?.images ?? [];

  return (
    <div className="relative mt-12">
      <Heading
        className="
          absolute left-1/2 -translate-x-[42%]
          -top-14
          bg-[#d79900] text-white 
         rounded-md shadow-md
        z-10 text-[32px] font-bold
        "
      >
        Social wall
      </Heading>
      <SocialWallImagesClient images={socialWallImages} />
    </div>
  );
};
