
# BUILDER:
FROM node:20-alpine AS builder
WORKDIR /app
  
# Enable PNPM:
RUN corepack enable

# Install dependencies and build NextJS:
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run inspector:build

# RUNNER:
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only necessary files from the build stage:
COPY --from=builder /app/.eslint-config-inspector ./

# Run the server:
CMD npx serve .