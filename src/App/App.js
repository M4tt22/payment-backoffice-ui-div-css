import './App.css';
import { Assignment, Home, SyncAlt } from '@material-ui/icons';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Graph from '../Graph';
import Header from '../Header';
import LeftMenu from '../LeftMenu';

const menu = [
  { label: 'Home', handle: null, link: '/graph', imgCompoment: Home, id: 0 },
  { label: 'Transaction', handle: null, link: '/transaction', imgCompoment: Assignment, id: 1 },
  { label: 'Fraude', handle: null, link: '/fraud', imgCompoment: SyncAlt, id: 2 },
];
export default class App extends Component {
  render = () => (
    <div class='App'>
      <Router>
        <div className='LeftMenu'>
          <LeftMenu menuItems={menu} />
        </div>
        <div className='Content'>
          <div className='Header'>
            <Header />
          </div>
          <Switch>
            <Route path="/" component={Graph} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
