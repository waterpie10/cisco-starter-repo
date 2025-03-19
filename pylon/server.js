const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
const PORT = 5001;

app.use(cors());

// Proxy for IPv4
app.get('/api/ip4', async (req, res) => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch IPv4' });
  }
});

// Proxy for IPv6
app.get('/api/ip6', async (req, res) => {
  try {
    const response = await fetch('https://api6.ipify.org?format=json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch IPv6' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server, path: '/ws' });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  // Send a timestamp every second
  const interval = setInterval(() => {
    ws.send(JSON.stringify({ data: Date.now() }));
  }, 1000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('WebSocket connection closed');
  });
});