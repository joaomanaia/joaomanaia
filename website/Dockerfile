FROM oven/bun:1-alpine AS base
WORKDIR /app

COPY package.json bun.lock ./

FROM base AS build-deps
RUN bun install

FROM build-deps AS build
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80