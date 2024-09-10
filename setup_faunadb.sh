#!/bin/bash

set -euo pipefail

DB_NAME="${1:-developement_db}"

# Check that dependencies are installed
DOCKER_VERSION=$(docker --version)
echo "Docker: ${DOCKER_VERSION}"

FAUNA_SHELL_VERSION=$(fauna --version)
echo "Fauna Shell: ${FAUNA_SHELL_VERSION}"

# Run FaunaDB
docker run -d --name faunadb -p 8443:8443 -p 8084:8084 fauna/faunadb

# Function to retry commands with delay
retry() {
  local n=0
  local max=5
  local delay=5
  local cmd="$@"
  until [ $n -ge $max ]; do
    $cmd && break
    n=$[$n+1]
    echo "Retry $n/$max: $cmd"
    sleep $delay
  done
}

# Wait for FaunaDB container to be healthy
echo "Waiting for FaunaDB container to become healthy..."
until [ "$(docker inspect -f '{{.State.Health.Status}}' faunadb)" == "healthy" ]; do
  sleep 5
done

echo "FaunaDB container is healthy."

# Configure database
retry fauna endpoint add localhost --url http://localhost:8443/ --secret secret

# Create the database
retry fauna create-database ${DB_NAME} --endpoint=localhost

# Create an API key and save it in .env
touch .env

if ! grep -q "FAUNADB_KEY" .env; then
  echo "Creating FaunaDB key..."
  FAUNADB_KEY="$(fauna create-key ${DB_NAME} server --endpoint=localhost | grep secret: | cut -d " " -f 4)"
  if [ -z "${FAUNADB_KEY}" ]; then
    echo "Failed to retrieve FaunaDB key"
    exit 1
  fi
  echo "FAUNADB_KEY=${FAUNADB_KEY}" >> .env
  echo "FaunaDB key for ${DB_NAME} is ${FAUNADB_KEY}"
else
  echo "FAUNADB_KEY already exists in .env"
fi
