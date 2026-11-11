# Builder
FROM node:20-alpine3.22 AS builder

WORKDIR /app

COPY package*.json .

RUN ["npm", "ci"]

COPY . .

RUN ["npm", "run", "build"]

# Nginx
FROM nginx:alpine

# Copia das configurações customizadas
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia da pagina estática
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]