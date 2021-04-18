FROM node:14.10.0-stretch
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
#RUN npm i -g serve

ARG SERVER_HOST
ENV SERVER_HOST $SERVER_HOST

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]
#CMD ["serve", "-s", "build"]