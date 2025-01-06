FROM node:22-alpine3.19 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27.3-alpine
COPY --from=builder /app/dist /usr/share/nginx/html