// cisco-starter-repo/sextant/src/PacketLatency.js
import React, { useState, useEffect } from 'react';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5001/ws');
    
    ws.onmessage = (event) => {
      const packet = JSON.parse(event.data);
      const packetTimestamp = packet.data;
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    ws.onerror = (err) => {
      setError('WebSocket error');
    };

    ws.onclose = () => {
      setError('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Packet Latency</h3>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p style={{ color: 'red' }}>Error: {error}</p>
      )}
    </div>
  );
};

export default PacketLatency;