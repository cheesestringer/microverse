# Stage 1: Build the app
FROM node:22-alpine AS build
WORKDIR /app

# Copy the package files
COPY package*.json ./

# Install packages
RUN npm ci

# Copy the rest of the app
COPY . .

# Build home
RUN npm run home:build

# Stage 2: Serve files with NGINX
FROM nginx:1.27.3-alpine

# Copy the static files and nginx config
COPY --from=build /app/dist/apps/home/ /usr/share/nginx/html
COPY apps/home/nginx.conf /etc/nginx/conf.d/default.conf