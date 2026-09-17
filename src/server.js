const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const SHEET_ID = process.env.SHEET_ID;
const GID = process.env.GID;
const API_KEY = process.env.GOOGLE_API_KEY;

// ROOT - ini yang bikin gak 404 lagi
app.get('/', (req, res) => {
  res.json({
    message: "ESDM Backend LIVE ✅",
    status: "READY",
    commit: "ff8cf1d",
    endpoints: ["/api/health", "/api/gangguan"],
    security: "SHEET_ID HIDDEN"
  });
});

app.get('/api/health', (req,res)=>{
  res.json({ok:true, env: !!SHEET_ID, gid: GID ? "set" : "not set"});
});

app.get('/api/gangguan', async (req,res)=>{
  // contoh fetch sheet kamu yang lama, tempel di sini
  try {
    // ... kode fetch google sheet kamu ...
    res.json({ok:true, data:[STRIPPED] 
  } catch(e){ res.status(500).json({ok:false, error:e.message}) }
});

// PENTING BUAT VERCEL - JANGAN PAKAI app.listen!
module.exports = app;