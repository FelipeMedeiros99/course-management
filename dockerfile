FROM node:20 AS build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3001

CMD ["npm", "start", "--", "-p", "3001"]

