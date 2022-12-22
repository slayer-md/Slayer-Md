FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
  
  RUN npm install
  
git clone https://github.com/slayer-md/Slayer-Md

cd Slayer-Md

COPY package.json .

COPY . .

CMD ["node", "."]
