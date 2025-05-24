# ==== FRONTEND ====


FROM node:20 AS frontend
WORKDIR /client

# Определим ARG — значения подаёт Render из "Environment" автоматически
ARG VITE_BACKEND_PATH
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY

COPY client/package*.json ./
RUN npm install

COPY client ./

# Устанавливаем переменную окружения для сборки фронтенда
# ВАЖНО: не нужно ENV — Vite берёт только то, что явно задано на этапе build
RUN VITE_BACKEND_PATH=$VITE_BACKEND_PATH \
    VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID \
    VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID \
    VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY \
    npm run build

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