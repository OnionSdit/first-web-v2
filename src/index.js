import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const el = document.createElement('main');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  el,
);
document.body.appendChild(el);
