import event from "./event";
import news from "./news";
import socialWall from "./social-wall";
import faqs from "./faqs";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, news, socialWall, faqs],
};
