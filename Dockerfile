FROM node:12.8-alpine

COPY index.js package*.json /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "/app/index.js"]
