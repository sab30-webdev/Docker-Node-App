FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#Below line sets the env variable for our node app container (defaulted to 3000 and overridden from docker-compose)
ENV PORT 3000
#Below line is just a for docummentation
EXPOSE $PORT

CMD ["node","index.js"]
