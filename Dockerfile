FROM node:13.1.0-alpine

COPY index.js package*.json /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "/app/index.js"]
