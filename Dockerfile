FROM node:6.14.2
COPY server.js .
COPY package*.json ./
RUN npm install
CMD node server.js
