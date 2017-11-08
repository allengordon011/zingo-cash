import React, { Component } from 'react';
import './App.css';
import sprite from './img/Zingo-Cash-sprite.png';
import facebook from './img/FB-f-Logo__blue_72.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="top-header">
          <nav className="top-nav">
            <a href="" className="nav-login">LOGIN</a>
            <p className="nav-phone">CALL US  1-888-ZINGO-55</p>
            <a href=""><img src={facebook} className="nav-facebook" alt="facebook"/></a>
          </nav>
          <img src={sprite} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <h1 className="title">We offer Loans for Bad Credit</h1>
          <p className="sub-title">We specialize in loans for people with bad credit. Get a loan with Zingo Cash's quick loan process.</p>
          <button className="enroll">ENROLL TODAY</button>
        </div>
      </div>
    );
  }
}

export default App;
