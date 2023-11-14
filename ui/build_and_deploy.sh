#!/bin/bash

# Build Docker image
docker buildx build -t vehicle-ui .

docker stop vehicle-ui
docker rm vehicle-ui

# Run Docker container
docker run --name ui -it -d -p 3000:3000 vehicle-ui