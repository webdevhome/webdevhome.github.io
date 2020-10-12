FROM node:14
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=0 ./build /usr/share/nginx/html
