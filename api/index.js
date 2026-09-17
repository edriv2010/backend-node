import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.json({message:"ESDM Backend LIVE ✅ ESM FIXED", status:"READY", fix:"esm"});
});
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.get('/api/gangguan',(req,res)=>res.json({ok:true,data:[STRIPPED]

export default app;