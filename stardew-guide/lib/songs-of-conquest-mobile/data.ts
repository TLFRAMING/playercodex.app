import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { SongsOfConquestMobileSource } from "./types";

const dataDirectory = path.resolve(process.cwd(), "data", "songs-of-conquest-mobile");

function readJsonArray<T>(fileName: string): T[] {
  const filePath = path.join(dataDirectory, fileName);

  if (!existsSync(filePath)) {
    return [];
  }

  try {
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    return Array.isArray(data) ? (data as T[]) : [];
  } catch {
    return [];
  }
}

export function getAllSongsOfConquestMobileSources(): SongsOfConquestMobileSource[] {
  return readJsonArray<SongsOfConquestMobileSource>("sources.json");
}
