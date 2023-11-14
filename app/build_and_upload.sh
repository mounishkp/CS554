docker network create new-network --subnet 172.18.0.0/16
docker pull mongodb/mongodb-community-server
docker stop mongo
docker rm mongo
docker run --name mongo --network new-network -p 7777:27017 -e MONGODB_CONTAINER_NAME=mongo -d mongodb/mongodb-community-server:latest

docker buildx build -t vehicle .
docker stop vehicle
docker rm vehicle
docker run --name vehicle -p 8000:8000 --network new-network --env MONGODB_CONTAINER_NAME=mongo -d vehicle