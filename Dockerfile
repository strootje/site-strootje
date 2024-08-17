FROM docker.io/node:20-slim AS builder
RUN npm i -g pnpm

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i

COPY public ./public
COPY src ./src
COPY *.json .
COPY *.ts .
ENV NITRO_PRESET=deno-server
RUN pnpm build

# ----------------------------------------
FROM docker.io/denoland/deno:1.45.5

EXPOSE 3000
WORKDIR /var/lib/app

ENV DENO_FUTURE=1

COPY --from=builder /app/.vinxi ./.vinxi
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json .

CMD ["run", "--allow-sys", "--allow-env", "--allow-read", "--allow-net", "./.output/server/index.mjs"]
