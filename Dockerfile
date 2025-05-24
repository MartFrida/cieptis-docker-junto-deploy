# ==== FRONTEND ====


FROM node:20 AS frontend
WORKDIR /client

# Передаём build-аргумент для frontend
ARG VITE_BACKEND_PATH

COPY client/package*.json ./
RUN npm install
COPY client .

# Устанавливаем переменную окружения для сборки фронтенда
ENV VITE_BACKEND_PATH=$VITE_BACKEND_PATH

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