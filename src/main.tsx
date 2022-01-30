import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerSW();
