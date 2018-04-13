import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

import Wizard from './components/Wizard/Wizard'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Header/>
        <Wizard/>
      </div>
    );
  }
}

export default App;
