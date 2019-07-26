FROM node:12.7-alpine

COPY index.js package*.json /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "/app/index.js"]
