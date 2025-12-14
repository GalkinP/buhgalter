require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- API для Telegram ---
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || "ТОКЕН_БОТА";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "ID_МОДЕРАТОРА";

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Проверьте поля формы" });
  }

  const text =
    `📩 Новый вопрос\n` +
    `👤 Имя: ${name}\n` +
    `📧 Email: ${email}\n` +
    `💬 Сообщение: ${message}`;

  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      { chat_id: CHAT_ID, text }
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("Telegram error:", err?.response?.data || err.message);
    res
      .status(500)
      .json({ ok: false, error: "Не удалось отправить сообщение" });
  }
});

// --- Отдаём фронтенд ---
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// Любой неизвестный маршрут → index.html (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// --- Запуск ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
