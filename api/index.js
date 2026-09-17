const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "ESDM Backend LIVE ✅ CJS FIX", status: "READY", id: "final" });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, live: true });
});

app.get('/api/gangguan', (req, res) => {
  res.json({ ok: true, data: [] });
});

module.exports = app;