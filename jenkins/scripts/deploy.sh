#!/usr/bin/env sh

echo "Removing api container if it exists..."
docker container rm -f api || true
echo "Removing network test-net if it exists..."
docker network rm test3-net || true

echo "Deploying app ($registry:$BUILD_NUMBER)..."
docker network create test3-net

docker container run -d \
    --name api \
    --net test3-net \
    $registry:$BUILD_NUMBER

# Logic to wait for the api component to be ready on port 3000

read -r -d '' CURL_COMMAND <<'EOF'
curl -s -o /dev/null -w "%{http_code}" http://api:3000
EOF

docker container run --rm \
    --net test3-net \
    node:alpine sh -c "$wait_for"

echo "Smoke tests..."
docker container run --name tester \
    --rm \
    --net test3-net \
    mmiotkug/node-curl sh -c "curl api:3000"