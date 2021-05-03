FROM node:14.16.0-alpine3.13

WORKDIR /usr/src/app

COPY package.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]