FROM node:26-alpine3.23

#mỗi lần sửa bất kỳ file nào phải build lại image và chạy lại container
#-p là port mapping từ container sang host machine với cú pháp -p <host_port>:<container_port>

#mapping project folder from container to host machine
WORKDIR /app

EXPOSE 5173

CMD ["npm", "run", "dev"]