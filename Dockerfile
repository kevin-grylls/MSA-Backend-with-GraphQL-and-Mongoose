FROM node:10-slim

MAINTAINER Kevin You

## Add & Modify parameters following your environment for stable operation

# Create directory and set working directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install Global Dependencies
RUN npm install -g yarn

# Install Local Dependencies
COPY package*.json ./
RUN npm install

# Build App
COPY . .
RUN npm run build
EXPOSE 8083 8083 
ENV NODE_ENV production

CMD ["yarn", "prod"]