FROM node:11.6-alpine

WORKDIR /app
COPY . .

RUN apk add g++ make python git
RUN npm i

EXPOSE 3000
ENTRYPOINT npm start
