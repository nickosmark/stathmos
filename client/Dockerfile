FROM node:10.15.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]