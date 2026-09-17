module.exports = (req, res) => {
  res.status(200).json({
    message: "ESDM Backend LIVE ✅ FINAL FIX",
    status: "READY",
    path: req.url,
    timestamp: new Date().toISOString(),
    endpoints: ["/", "/api/health", "/api/gangguan"],
    fix: "no-express-dependency"
  });
};