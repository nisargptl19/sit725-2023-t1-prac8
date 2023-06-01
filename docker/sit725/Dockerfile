FROM node
WORKDIR /sit-725-2023-t1-prac8
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "server.js"]