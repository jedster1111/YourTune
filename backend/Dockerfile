FROM node:8.11.2 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:8.11.2
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY package.json yarn.lock ./
COPY --from=build-deps /usr/src/app/dist /usr/src/app/dist
RUN yarn
EXPOSE 8000
CMD [ "yarn", "start:prod"]