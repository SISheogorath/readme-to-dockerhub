FROM node:14.4.0-alpine

COPY index.js package*.json /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "/app/index.js"]
