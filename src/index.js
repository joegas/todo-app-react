import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import logo from './logo.svg';

ReactDOM.render(
  <div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Welcome to React</h4>
      </div>
      <p className="App-intro">
        Entwicklung von Web-Anwendungen - SS2017
      </p>
    </div>
    <App />
  </div>,
  document.getElementById('root')
);
