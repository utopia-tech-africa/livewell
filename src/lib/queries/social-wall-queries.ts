import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// fetch social wall images //
export const fetchSocialWallImages = async () => {
  const SOCIAL_WALL_QUERY = defineQuery(`*[_type == "socialWall"]{
  images[]{
    asset->{
      url
    }
  }
}
`);

  try {
    return await client.fetch(SOCIAL_WALL_QUERY);
  } catch (error) {
    console.log("Fetching Social Wall Media Failed :", error);
    return "error";
  }
};
