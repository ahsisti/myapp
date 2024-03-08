FROM nginx:1.21-alpine

WORKDIR /

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "index.js"]
