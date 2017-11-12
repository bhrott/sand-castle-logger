FROM keymetrics/pm2:latest

EXPOSE 3000:3000

RUN mkdir -p /node-app
RUN mkdir -p /node-app/logs
WORKDIR /node-app

COPY . /node-app
#RUN rm /node-app/.env
RUN rm -rf /node-app/node_modules

RUN npm install

CMD [ "pm2-docker", "start", "bin/www" ]