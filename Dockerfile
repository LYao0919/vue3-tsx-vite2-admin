FROM hub.intra.doublefs.com/sys/baseimage/node:14 as deps
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i

FROM deps as build
COPY . .
ARG ENV
RUN npm run build:$ENV

FROM hub.intra.doublefs.com/sys/baseimage/nginx:1.21
WORKDIR /app
COPY --from=build /app/dist /app/m-dmm/dist
COPY nginx.conf /etc/nginx/conf.d/default.conf