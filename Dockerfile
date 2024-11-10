FROM node:18-alpine

WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose the default Nuxt.js port (3000)
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
