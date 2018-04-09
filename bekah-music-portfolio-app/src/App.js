import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router.js';
import Header from './components/Header.js';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Header />
        
      </div>
      
        {router}
      </div>
    );
  }
}

export default App;
