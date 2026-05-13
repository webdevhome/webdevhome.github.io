FROM node:26.1-slim AS build
ARG use_dynamic_config=true

ENV VITE_USE_DYNAMIC_CONFIG=${use_dynamic_config}

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.30.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
