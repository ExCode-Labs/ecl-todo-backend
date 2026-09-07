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
  DATABASE_URL: z.string().url(),

  // pgAdmin
  PGADMIN_DEFAULT_EMAIL: z.string().email(),
  PGADMIN_DEFAULT_PASSWORD: z.string().min(1),
  PGADMIN_PORT: z.coerce.number().default(5050),

  // Frontend
  GATEWAY_URL_DEV: z.string().url(),
  GATEWAY_URL_UAT: z.string().url(),
  GATEWAY_URL_PROD: z.string().url(),
});

export const env = envSchema.parse(process.env);
