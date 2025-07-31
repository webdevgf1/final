export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    websocketUrl: process.env.WEBSOCKET_URL || 'ws://localhost:8080'
  });
}
