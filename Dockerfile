FROM node:14.17.5

WORKDIR /app/wikinotes

ENV PATH /app/wikinotes/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

COPY . /app/wikinotes

CMD npm start