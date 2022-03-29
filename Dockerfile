FROM node:14-buster-slim
WORKDIR /app
# COPY package.json .
COPY . .
RUN yarn

CMD ["yarn", "start"]
