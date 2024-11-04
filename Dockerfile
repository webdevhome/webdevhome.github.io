FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27.2-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html

FROM node:lts AS dev
ARG ls_improvement=false
ARG rm_cp_mv_interactive=false
ARG warp=false
WORKDIR /app
EXPOSE 5173
RUN if [ "$ls_improvement" = "true" ]; then \
  sed -i '/^# export LS_OPTIONS=\|^# alias ls=\|^# alias ll=\|^# alias l=/s/^# //g' ~/.bashrc; \
fi
RUN if [ "$rm_cp_mv_interactive" = "true" ]; then \
  sed -i '/^# alias rm=\|^#alias cp=\|^# alias mv=/s/^# //g' ~/.bashrc; \
fi
RUN if [ "$warp" = "true" ]; then \
  echo "printf '\eP\$f{\"hook\": \"SourcedRcFileForWarp\", \"value\": { \"shell\": \"bash\" }}\x9c'" >> ~/.bashrc; \
fi
