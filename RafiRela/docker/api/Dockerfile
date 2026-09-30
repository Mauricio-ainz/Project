FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY apps/api ./apps/api
COPY apps/web ./apps/web
RUN npm install --prefix apps/api
RUN npm install --prefix apps/web
EXPOSE 3001
CMD ["npm", "--prefix", "apps/api", "run", "start:prod"]
