build:; podman build -t strootje/website -f Dockerfile .
start:; podman run --rm -p3000:3000 strootje/website:latest
apply/prd:; kubectl apply -k .deployment/overlays/prd