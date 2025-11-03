import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export default defineType({
  name: "event",
  title: "Livewell Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "name",
      title: "Event Name",
      type: "string",
      description: "The name of the event (e.g., Free Medical Screenings).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the event.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      description: "Image of the event.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "image",
      title: "name",

      subtitle: "description",
    },
  },
});
