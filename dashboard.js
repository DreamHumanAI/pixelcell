export default function handler(req, res) {
  if (!global.viewLogs) global.viewLogs = [];
  res.status(200).json(global.viewLogs);
}
