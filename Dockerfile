FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

pkg install bash

pkg install libwebp

pkg install git -y

pkg install nodejs -y 

pkg install ffmpeg -y 

pkg install wget

pkg install imagemagick -y

COPY . .

CMD ["node", "."]
