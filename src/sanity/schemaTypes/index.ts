import event from "./event";
import news from "./news";
import socialWall from "./social-wall";
import faqs from "./faqs";
import countdown from "./countdown";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, news, socialWall, faqs, countdown],
};
