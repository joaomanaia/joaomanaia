FROM oven/bun:1-alpine AS base

# 1. Install dependencies only when needed 
FROM base AS deps

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx
COPY ./nginx/nginx.conf /etc/nginx/templates/nginx.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
