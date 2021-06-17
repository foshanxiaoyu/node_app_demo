//Create mongo-network(default bridge)
docker network create mongo-network

// mongo
docker run -d --network mongo-network \
-p 27017:27017  --name mgdb \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo


//mongo-express
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mgdb \
--net mongo-network \
--name mongo \
mongo-express



//docker-compose
docker-compose -f node_mongo.yaml up