FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 7000

EXPOSE 27017

CMD [ "npm", "start" ]

