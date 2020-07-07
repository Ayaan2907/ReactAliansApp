import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import App from './App.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>  <App />  </React.StrictMode>,
 document.getElementById('root')
);


serviceWorker.register();
