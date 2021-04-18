FROM node:14.10.0-stretch
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
#RUN npm i -g serve

ARG REACT_APP_SERVER_HOST
ENV REACT_APP_SERVER_HOST $REACT_APP_SERVER_HOST

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
#CMD ["serve", "-s", "build"]