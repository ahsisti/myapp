FROM nginx:1.21-alpine

WORKDIR /

RUN apk add --update nodejs npm

COPY . .

EXPOSE 80

CMD ["node", "index.js"]
