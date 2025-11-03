import event from "./event";
import news from "./news";
import socialWall from "./social-wall";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, news, socialWall],
};
