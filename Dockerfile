FROM node:14.10.0-alpine

COPY index.js package*.json /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "--unhandled-rejections=strict", "/app/index.js"]
