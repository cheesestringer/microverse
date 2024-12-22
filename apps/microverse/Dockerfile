# Stage 1: Build the app
FROM node:22-alpine AS build
WORKDIR /app

# Copy the package files
COPY package*.json ./

# Install packages
RUN npm ci

# Copy the rest of the app
COPY . .

# Build microverse
RUN npm run microverse:build

# Stage 2: Serve files with NGINX
FROM nginx:1.27.3-alpine

# Copy the static files and nginx config
COPY --from=build /app/dist/apps/microverse/ /usr/share/nginx/html
COPY apps/microverse/nginx.conf /etc/nginx/conf.d/default.conf