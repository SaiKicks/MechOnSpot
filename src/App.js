import React, { Component } from "react";
import "./App.css";
import RequestInfo from './components/requestInfo';
import Login from "./components/login";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Routes>
          <Route exact path='/home' element={< Login />}></Route>
          <Route exact path='/user' element={< RequestInfo />}></Route>
          </Routes>
      </div>
      </Router>
    );
  }
}

export default App;