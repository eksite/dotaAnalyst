import React from 'react';
import Header from './header';
import Match from './Match';
import { Route, Switch } from 'react-router-dom';
import Fetch from './fetch';
const links = { home: '/home', heroes: '/heroes', match: '/match' };

const App = () => (
  <>
    <Header items={links} />
    <Switch>
      <Route path="/heroes">
        <Fetch></Fetch>
      </Route>
      <Route path="/match">lala</Route>
      <Route path="/match:number">
        <Match></Match>
      </Route>
    </Switch>
  </>
);
export default App;
