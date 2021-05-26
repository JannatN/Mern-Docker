# MERN-Docker Pets system
## Introduction
This project is simple MERN stack app that allows the user to add, update, and delete a pet plus the ability to list all the pets in the system. This project aims to containerize the api server and react client and create docker-compose to connect them.

## To run the project:

```
$ git clone https://github.com/JannatN/Mern-Docker.git
```
## Configuring App

```
$ cd Mern-Docker
$ cd server
$ npm install
$ nodemon index.js
```

```
$ cd Mern-Docker
$ cd client
$ npm install
$ npm start 
```
## Containerization 
 Install docker and run the following in the terminal:

```
$ cd Mern-Docker
$ docker build -t 'api-server' ./server/
$ docker build -t 'react-app' ./client/
$ docker-compose up
```
## Sources
I followed this [tutorial](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66) to get the basics.

## Screenshots
![HOME](https://imgur.com/N2tKJr5.png)
![LIST](https://imgur.com/TS5auIJ.png)
![INSERT](https://imgur.com/mUh8pMG.png)
![UPDATE](https://imgur.com/n22vcXm.png)
