FROM node:16.1.0-buster-slim

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . . 

RUN npm run build


FROM nginx:1.19.10

EXPOSE 3000

COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/build /usr/share/nginx/html


