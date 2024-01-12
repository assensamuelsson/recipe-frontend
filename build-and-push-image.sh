# Usage: bash build-and-push-image.sh 1.0.6
docker build --tag recipe-frontend --platform=linux/amd64 .

docker tag recipe-frontend:latest assensam/recipe-frontend:$1
docker tag recipe-frontend:latest assensam/recipe-frontend:latest
docker push assensam/recipe-frontend:$1
docker push assensam/recipe-frontend:latest