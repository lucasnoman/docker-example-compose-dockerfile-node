FROM node:20.13.1-slim

WORKDIR /app

COPY ./ /app/

RUN npm i

EXPOSE 5173

CMD ["npm", "run", "dev"]
