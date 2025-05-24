# ==== FRONTEND ====
FROM node:20 AS frontend
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

# ==== BACKEND ====
FROM node:20 AS backend
WORKDIR /app

# install backend deps
COPY server/package*.json ./
RUN npm install

# copy backend files
COPY server .

# copy built frontend
COPY --from=frontend /client/dist ./public

# ENV & expose
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "app.js"]