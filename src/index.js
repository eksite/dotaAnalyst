import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fetch from './components/fetch.js';
import Header from './components/header';
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Fetch />, document.getElementById('root'));
