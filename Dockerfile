# --- Этап 1: сборка фронта ---
FROM node:22 AS build

WORKDIR /app

# Установим зависимости
COPY package.json package-lock.json* ./
RUN npm install

# Скопируем исходники
COPY  . .


# Соберём фронт
RUN npm run build

# --- Этап 2: сервер + готовый фронт ---
FROM node:22

WORKDIR /app

RUN npm install -g serve


# Скопируем собранный фронт
COPY --from=build /app/dist ./dist


# Запускаем сервер
CMD ["serve", "-s", "dist", "-l", "3000"]

EXPOSE 3000
