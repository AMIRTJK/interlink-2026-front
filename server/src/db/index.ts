import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: Database;

export const initDb = async () => {
  db = await open({
    filename: path.join(__dirname, "../../database.sqlite"),
    driver: sqlite3.Database,
  });

  await db.exec("PRAGMA journal_mode = WAL;");
  await db.exec("PRAGMA synchronous = NORMAL;");
};

export const getDb = () => {
  if (!db) throw new Error("Database not initialized.");
  return db;
};

export const closeDb = async () => {
  if (db) {
    await db.close();
    console.log("БД connection closed.");
  }
};
