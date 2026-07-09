FROM ubuntu:latest

#MAKE APP FOLDER IN ROOT FOLDER
WORKDIR /app

#Mapping folder from container to host machine
#docker run -v ./mapping:/app -it my-linux bash

#mkdir tao folder
#rmdir remove folder
#touch tao file
#rm -r <folder_name> remove folder and all files in it
#rm -rf <folder_name> force remove folder and all files in it

#ls -l check folder and file permissions
#chdmod u+rwx <folder_name> add folder permissions
#chdmod u-rwx <folder_name> remove folder permissions
# u(user) g(group) o(other) a(all)
# r(read) w(write) x(execute)
# -rw-rx-rwx (read write) - (read execute) - (read write execute)


RUN apt-get update && apt-get install -y nano

