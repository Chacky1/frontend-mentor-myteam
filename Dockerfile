# Build stage
FROM node:20-slim as build-stage

RUN npm install -g pnpm@8.15.3
WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

ENV NODE_ENV=development

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Production stage
FROM node:20-slim as production-stage

ENV NODE_ENV=production

RUN npm install -g pnpm@8.15.3

WORKDIR /app

COPY --from=build-stage /app ./

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["node", "build/index.js"]