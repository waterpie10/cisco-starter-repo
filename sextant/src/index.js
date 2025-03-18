import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './Banner';
import Exhibit from './Exhibit';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Banner />
    <Exhibit heading="Example Exhibit">
      <p>This is an example child component inside the exhibit.</p>
    </Exhibit>
    <App />
  </React.StrictMode>
);

reportWebVitals();