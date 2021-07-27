import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App defaultCenter={{lat: 45.523064, lng: -122.676483}} />
  </React.StrictMode>,
  document.getElementById('root')
);

