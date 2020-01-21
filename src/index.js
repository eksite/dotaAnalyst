import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Fetch from './components/fetch';
import Match from './components/Match';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
