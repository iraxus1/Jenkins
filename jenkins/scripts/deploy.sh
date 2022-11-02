#!/usr/bin/env sh

echo "Removing api container if it exists..."
docker container rm -f api || true
echo "Removing network test-net if it exists..."
docker network rm test-net || true

echo "Deploying app ($registry:$BUILD_NUMBER)..."
docker network create test-net

docker container run -d \
    --name api \
    --net test-net \
    $registry:$BUILD_NUMBER

# Logic to wait for the api component to be ready on port 3000

read -r -d '' CURL_COMMAND <<'EOF'
curl --fail --silent --show-error \
    --connect-timeout 1 \
    --max-time 1 \
    http://api:3000
EOF

docker container run --rm \
    --net test-net \
    node:alpine sh -c "$wait_for"

echo "Smoke tests..."
docker container run --name tester \
    --rm \
    --net test-net \
    mmiotkug/node-curl sh -c "curl api:3000"