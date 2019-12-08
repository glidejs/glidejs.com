FROM node:11-alpine as builder
RUN apk add --no-cache git
WORKDIR /web
COPY . /web
RUN yarn install && yarn export
RUN rm -rf node_modules/

FROM nginx:1.15-alpine
COPY --from=builder /web/config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /web/public /usr/share/nginx/html

CMD sed -i "s/80/$PORT/g" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
