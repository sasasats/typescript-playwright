import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, '../..', '.env') });

export type AppEnv = {
  BASE_URL: string;
  API_URL: string;
};

function required(name: keyof AppEnv, fallback: string): string {
  const v = process.env[name];
  return v && v.length > 0 ? v : fallback;
}

/** Central env for Playwright (load from project root `.env`; see `.env.example`). */
export const env: AppEnv = {
  BASE_URL: required('BASE_URL', 'insert from .env file'),
  API_URL: required('API_URL', 'insert from .env file'),
};
