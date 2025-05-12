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
    collections: i.entity({
      name: i.string().unique().indexed(),
      json: i.json().optional(),
    }),
    profile: i.entity({
      created_at: i.number().optional(),
      writing_system: i.string().optional(),
      progress_khmer: i.json().optional(),
      progress_phonetic: i.json().optional(),
      updated_progress_at: i.number().optional(),
      user_words: i.json().optional(),
    }),
    test: i.entity({}),
  },
  links: {
    collections$users: {
      forward: {
        on: "collections",
        has: "many",
        label: "$users"
      },
      reverse: {
        on: "$users",
        has: "many",
        label: "collections",
      }
    },
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
