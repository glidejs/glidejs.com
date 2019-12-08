FROM node:11-alpine as builder
RUN apk add --no-cache git
WORKDIR /app
COPY . /app
RUN npm install && npm run build && rm -rf node_modules/

FROM nginx:1.15-alpine
COPY --from=builder /app/config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html

CMD sed -i "s/80/$PORT/g" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
