import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Afin d'activer le service worker, il suffit d'appeler 
// la fonction register() au lieu de unregister().

// serviceWorker.unregister();
serviceWorker.register();
