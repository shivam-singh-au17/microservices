# Specify a base image
FROM node:alpine

WORKDIR /usr/app

#  Insall some depenendencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
