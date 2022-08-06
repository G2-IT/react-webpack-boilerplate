FROM node:16.15.0-buster-slim

RUN chmod -R 777 /root/.cache/yarn

EXPOSE 3000