import React from 'react';
import Header from './Header';
import Match from './Match';
import { Route, Switch } from 'react-router-dom';
import Fetch from './Fetch';
const links = { home: '/home', heroes: '/heroes', match: '/match' };

const App = () => (
  <>
    <Header items={links} />
    <Switch>
      <Route path="/heroes">
        <Fetch></Fetch>
      </Route>
      <Route exact path="/match">
        heh
      </Route>
      <Route path="/match/:siteID">
        <Match />
      </Route>
    </Switch>
  </>
);
export default App;
