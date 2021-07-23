FROM node:14-buster-slim
EXPOSE 3000
WORKDIR /app
# COPY package.json .
# RUN yarn

COPY . .
CMD ["yarn", "start"]
