# Stage 1: Build Stage
FROM node:20 AS build

# Set working directory
WORKDIR /var/www/html/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the application (if necessary for static files or other assets)
# RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine

# Install PM2 globally
RUN npm install -g pm2

# Set working directory
WORKDIR /var/www/html/

# Copy built application and node_modules from the build stage
COPY --from=build /var/www/html/ /var/www/html/

# Expose the port the app runs on
EXPOSE 3000

# Run the deploy:prod script and start the app with PM2
# CMD ["pm2-runtime", "startOrRestart", "ecosystem.config.js", "--env", "production"]
# CMD pm2-runtime startOrRestart ecosystem.config.js --env production
CMD ["sh", "-c", "pm2-runtime startOrRestart ecosystem.config.js --env production"]
