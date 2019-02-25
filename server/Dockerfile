FROM node:10.15.1

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --no-optional

#After installing dependencies copy root dir to container's root
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]