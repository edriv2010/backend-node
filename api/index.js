module.exports = (req, res) => {
  res.status(200).json({
    message: "ESDM Backend LIVE ✅ FINAL",
    status: "READY - NO CRASH",
    time: new Date().toISOString(),
    url: req.url
  });
};