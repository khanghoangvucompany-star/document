FROM node:25-alpine3.22

#mỗi lần sửa bất kỳ file nào phải build lại image và chạy lại container
WORKDIR /app/web
#-p là port mapping từ container sang host machine với cú pháp -p <host_port>:<container_port>

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]