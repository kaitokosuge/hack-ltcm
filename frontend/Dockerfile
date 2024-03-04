FROM node:18-alpine

WORKDIR /app/frontend

ENV LANG=C.UTF-8 \
  TZ=Asia/Tokyo

# COPY package.json yarn.lock ./

RUN yarn install
RUN docker run --rm -v ${PWD}:/app -w /app node:18-alpine yarn install
