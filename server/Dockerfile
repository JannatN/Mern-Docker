FROM node:14-slim

WORKDIR /Mern-Docker/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "index.js" ]