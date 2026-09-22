# -----------------------------
# Build stage
# -----------------------------

FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files first for Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Generate Prisma client
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npm run db:generate

# Build TypeScript application
RUN npm run build


# -----------------------------
# Production stage
# -----------------------------

FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy compiled application
COPY --from=builder /app/dist ./dist

# Copy Prisma configuration and schema
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

# Copy generated Prisma client
COPY --from=builder /app/src/generated ./src/generated

EXPOSE 3001

# Apply migrations before starting the application
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]