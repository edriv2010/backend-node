module.exports = (req, res) => {
  res.status(200).json({ 
    message: "ESDM Backend LIVE ✅ ULTRA FIX", 
    status: "READY",
    time: new Date().toISOString(),
    path: req.url
  });
};