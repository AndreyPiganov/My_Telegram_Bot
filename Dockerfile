FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

RUN mkdir -p var/log

EXPOSE 5015

CMD ["npm", "run", "start:build"]

