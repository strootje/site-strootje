import { Database as Sqlite } from "@jsr/db__sqlite";
import { DenoSqlite3Dialect } from "@jsr/soapbox__kysely-deno-sqlite";
import { makeDatabase } from "@jsr/strootje__better-kysely";
import type { Dialect } from "kysely";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { m001_initial_blog } from "./server.migrations/m001-initial-blog.ts";
import type { ServerDatabase } from "./server.schema.ts";
export * from "./server.schema.ts";

let sqlite: Sqlite;
const getSqlite = (path: string) => {
  mkdirSync(path, { recursive: true });
  return sqlite ??= new Sqlite(join(path, "server.db"));
};

let dialect: Dialect;
const getDialect = () => {
  return dialect ??= new DenoSqlite3Dialect({
    database: getSqlite(".data/database"),
  }) as unknown as Dialect;
};

export const {
  migrateToLatest,
  useDatabase,
} = makeDatabase<ServerDatabase>(getDialect(), () => {
  return Promise.resolve({
    m001_initial_blog,
  });
});
