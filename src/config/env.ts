import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  // Application
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  PORT: z.coerce.number().default(3001),

  // PostgreSQL
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  POSTGRES_DB: z.string().min(1),
  POSTGRES_PORT: z.coerce.number().default(5432),

  // Prisma
  DATABASE_URL: z.url(),

  // Gateway
  GATEWAY_URL: z.url(),
});

export const env = envSchema.parse(process.env);
