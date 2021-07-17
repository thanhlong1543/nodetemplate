FROM node:16-alpine
WORKDIR /user/src/app
COPY package.json package.json
RUN npm install yarn && yarn install 
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]

