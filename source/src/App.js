import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Vehicle, Homepage, Navbar, Newrequest } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/vehicle">
              <Vehicle />
            </Route>
            <Route exact path="/newrequest">
              <Newrequest />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  </div>
);

export default App;
