// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/core";

const _schema = i.schema({
  // We inferred 7 attributes!
  // Take a look at this schema, and if everything looks good,
  // run `push schema` again to enforce the types.
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed().optional(),
      url: i.any().optional(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed().optional(),
    }),
    profile: i.entity({
      active_word: i.string().optional(),
      createdAt: i.number().optional(),
      khmer_writing: i.boolean().optional(),
      progress: i.json().optional(),
      rt: i.json().optional(),
      updated_at: i.number().optional(),
      user_learned: i.json().optional(),
    }),
    test: i.entity({}),
  },
  links: {
    profile$users: {
      forward: {
        on: "profile",
        has: "one",
        label: "$users",
        onDelete: "cascade",
      },
      reverse: {
        on: "$users",
        has: "one",
        label: "profile",
      },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
