import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialWall",
  title: "Social Wall",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "Upload images for the social wall.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(8).warning("Please upload at least one image."),
    }),
  ],

  preview: {
    select: {
      media: "images.0",
    },
    prepare({ media }) {
      return {
        title: "Social Wall",
        media,
      };
    },
  },
});
