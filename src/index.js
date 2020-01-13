import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainpage from './components/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Fetch from './components/fetch';
import Match from './components/Match';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Mainpage} />
      <Route path="/fetch" component={Fetch} />
      <Route path="/match/:number" component={Match} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
