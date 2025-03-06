# Use the official Node.js 18 LTS image as the base image.  Use a specific version.
FROM node:22-alpine AS base

RUN corepack enable

# Set the working directory inside the container.
WORKDIR /app

# Install system-level dependencies.  Crucially, install openssl for Prisma.
# This is often missed, and causes cryptic errors on Alpine.
RUN apk add --no-cache openssl

# --- Builder Stage ---
FROM base AS builder

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json yarn.lock ./

COPY . .

# Install dependencies, including devDependencies (needed for building).
RUN yarn install

RUN yarn nx client:generate db
# Build the Next.js application.
RUN yarn nx build web

# Run Prisma generate.  Important to do this *after* building.

# --- Runner Stage ---
FROM base AS runner

# Copy only the necessary files from the builder stage.  This makes the final image smaller.
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./package.json
# Copy Prisma schema
COPY --from=builder /app/packages/db ./packages/db

# Set environment variables.  These can be overridden by Cloud Run.
ENV NODE_ENV production
ENV PORT 8080

# Expose the port the app will listen on.
EXPOSE 8080

# Start the Next.js server.
CMD ["sh", "-c", "yarn start"]
