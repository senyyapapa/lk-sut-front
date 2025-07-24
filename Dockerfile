# Stage 1: Install dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm uninstall eslint @next/eslint-plugin-next
RUN rm eslint.config.mjs
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
# TODO: добавлять .env файл иначе
COPY .env ./
# ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "start"]
