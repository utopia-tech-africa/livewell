import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the blog. Keep it concise and clear.",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      description: "Full content of the blog. Supports rich text formatting.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Unique URL identifier, auto-generated from title",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Main image that represents the article",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      description: "Date when the article is published.",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "publishedDate",
      media: "mainImage",
    },

    prepare({ title, date, media }) {
      let subtitle = "No date";

      if (date) {
        const d = new Date(date);
        const day = d.getDate();
        const month = d.toLocaleString("en-US", { month: "long" });
        const year = d.getFullYear();
        subtitle = `Published: ${day}. ${month} ${year}`;
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
