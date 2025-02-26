FROM docker.io/denoland/deno:alpine-2.1.10 AS builder
ENV LD_LIBRARY_PATH /usr/lib:/usr/local/lib
RUN apk add --no-cache nodejs

COPY . /build
WORKDIR /build

RUN deno i
RUN deno task build

FROM docker.io/denoland/deno:alpine-2.1.10
USER 1000

COPY --from=builder /build/.output /app
CMD ["run", "--allow-sys", "--allow-env", "--allow-read", "--allow-net", "/app/server/index.mjs"]
