import React from 'react';
import './App.css';
import Exhibit from './Exhibit';
import IpAddress from './IpAddress';

function App() {
  return (
    <div className="App">
      <Exhibit title="Your IP Addresses">
        <IpAddress version="v4" />
        <IpAddress version="v6" />
      </Exhibit>
    </div>
  );
}

export default App;