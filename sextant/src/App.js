// cisco-starter-repo/sextant/src/App.js
import React from 'react';
import './App.css';
import Exhibit from './Exhibit';
import IpAddress from './IpAddress';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div className="App">
      <Exhibit title="Your IP Addresses">
        <IpAddress version="v4" />
        <IpAddress version="v6" />
      </Exhibit>
      <Exhibit title="Packet Latency">
        <PacketLatency />
      </Exhibit>
    </div>
  );
}

export default App;