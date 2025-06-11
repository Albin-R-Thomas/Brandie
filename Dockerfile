FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Install OpenSSL
RUN apk add --no-cache openssl

# Bundle app source
COPY . .

RUN npm run build
RUN npx prisma generate
EXPOSE 8080
CMD ["node", "dist/server.js"]