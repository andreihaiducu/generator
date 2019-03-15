FROM node:10-alpine
WORKDIR /app
COPY ./index.js /app/index.js
COPY ./node_modules /app/node_modules 
CMD node /app/index.js