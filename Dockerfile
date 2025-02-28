# Use the official Node.js 18 LTS image as the base image.  Use a specific version.
FROM node:18-alpine AS base

# Set the working directory inside the container.
WORKDIR /app

# Install system-level dependencies.  Crucially, install openssl for Prisma.
# This is often missed, and causes cryptic errors on Alpine.
RUN apk add --no-cache openssl

# --- Builder Stage ---
FROM base AS builder

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies, including devDependencies (needed for building).
RUN npm install 

COPY . .

RUN npx prisma generate
# Build the Next.js application.
RUN npm run build

# Run Prisma generate.  Important to do this *after* building.

# --- Runner Stage ---
FROM base AS runner

# Copy only the necessary files from the builder stage.  This makes the final image smaller.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma

# Set environment variables.  These can be overridden by Cloud Run.
ENV NODE_ENV production
ENV PORT 8080

# Expose the port the app will listen on.
EXPOSE 8080

# Start the Next.js server.
CMD ["npm", "start"]
