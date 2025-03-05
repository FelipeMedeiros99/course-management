FROM node:20

WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]

