import express from 'express';
import bodyParser from 'body-parser';
import { franc } from 'franc';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import askGPT from './gptService.js';
import searchKnowledgeBase from './dbService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: ['https://centroentrenadores.com', 'http://localhost', 'http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001', 'https://entrenador-personal.netlify.app', 'https://cieptis-docker.onrender.com/'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));

app.post('/ask', async (req, res) => {
    try {
        const { query, language } = req.body;
        console.log("Received query:", query);
        console.log("Detected language:", language);

        if (!query) return res.status(400).json({ error: 'No query provided' });

        // Определение языка
        const langCode = franc(query);
        const lang = langCode === 'und' ? 'unknown' : langCode;

        // Попытка найти ответ в базе знаний
        const localAnswer = await searchKnowledgeBase(query);
        if (localAnswer) {
            return res.json({ answer: localAnswer, source: 'local', language: lang });
        }

        // GPT-ответ
        const gptAnswer = await askGPT(query, lang);
        res.json({ answer: gptAnswer, source: 'gpt', language: lang });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
