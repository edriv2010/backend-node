const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.json({message:"ESDM Backend LIVE ✅", status:"READY", commit:"0a16903-fixed"});
});

app.get('/api/health', (req,res)=>res.json({ok:true}));
app.get('/api/gangguan', (req,res)=>res.json({ok:true,data:[STRIPPED]

module.exports = app;