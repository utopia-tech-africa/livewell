import { Clock } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "countdown",
  title: "Countdown",
  type: "document",
  icon: Clock,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of event",
    }),
    defineField({
      name: "eventDate",
      title: "Event Date & Time",
      type: "datetime",
      description: "Target date and time for the event.",
    }),
  ],
});
