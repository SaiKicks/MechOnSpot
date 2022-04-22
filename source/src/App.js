import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Vehicle, Homepage, Navbar, Newrequest, About, Tips } from './components';
import './App.css';

const App = () => (
  <div className="app" >
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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Tips">
              <Tips />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  </div>
);

export default App;
