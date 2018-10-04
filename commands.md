COMANDO PARA INICIAR EL DOCKER LOCAL
docker run --rm -it -v /home/diego-asus/docker/MEAN/my-app:/host/ -p 9000:3000 -w /host/ ubuntu-node:0.1 npm start