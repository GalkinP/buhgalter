# --- Этап 1: сборка фронта ---
FROM node:22-alpine


# 2. Рабочая директория внутри контейнера
WORKDIR /app

# 3. Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --production

# 4. Копируем весь проект
COPY . .

# 5. Указываем порт
EXPOSE 3000

# 6. Запуск сервера
CMD ["node", "server.js"]
