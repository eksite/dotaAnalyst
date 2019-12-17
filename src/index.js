import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainpage from './components/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Fetch from './components/fetch';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Mainpage} />
      <Route path="/fetch" component={Fetch} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Fetch />, document.getElementById('root'));
