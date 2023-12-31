FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port that the development server will run on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
