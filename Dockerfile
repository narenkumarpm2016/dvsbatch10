FROM node:10

WORKDIR /app

COPY . .

RUN npm install \
    && npm run-script build

EXPOSE 3000

CMD ["npm","start"]
