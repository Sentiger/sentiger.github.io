FROM node:16.15.1-alpine3.16 as builder
ADD . /blog
WORKDIR /blog
RUN npm install --registry=https://registry.npmmirror.com && npm run docs:build


FROM nginx:1.22.0-alpine
COPY --from=builder /blog/blog/.vuepress/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf