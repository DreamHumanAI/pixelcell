export default function handler(req, res) {
  const { id } = req.query;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const timestamp = new Date().toISOString();

  // In-memory logging (could swap with DB or file later)
  if (!global.viewLogs) global.viewLogs = [];
  global.viewLogs.push({ pixelId: id, timestamp, ip, userAgent });

  const pixel = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");
  res.setHeader("Content-Type", "image/gif");
  res.send(pixel);
}
