FROM docker.io/oven/bun:alpine AS builder

RUN apk add --no-cache nodejs

WORKDIR /app

COPY . /app/

RUN bun i

RUN bun run build

RUN mv /app/build/404.html /app/build/index.html

FROM docker.io/oven/bun:alpine AS runner

RUN bun i -g serve

WORKDIR /app

COPY --from=builder /app/build /app/

CMD ["bun", "x", "serve", "-l", "80", "--no-port-switching", "-s", "/app"]

EXPOSE 80
