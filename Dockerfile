FROM node:6.9.2
EXPOSE 5000
COPY server.js .
CMD node server.js