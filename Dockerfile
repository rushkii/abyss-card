FROM node:18.12-bullseye

WORKDIR /app
COPY . .
RUN npm ci && npm run build && rm -rf node_modules && npm ci --production

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]
