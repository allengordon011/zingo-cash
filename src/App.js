import React, { Component } from 'react';
import './App.css';
import sprite from './img/Zingo-Cash-sprite.png';
import facebook from './img/FB-f-Logo__blue_72.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="top-header">
            <ul id="top-header-list">
              <li>
                <a href="" className="login">LOGIN</a>
              </li>
              <li>
                <p className="phone">CALL US  1-888-ZINGO-55</p>
              </li>
              <li>
                <a href=""><img src={facebook} className="facebook" alt="facebook"/></a>
              </li>
            </ul>
          </div>
          <div className="logo-top" alt="logo" />
          <nav className="main-nav">
            <ul id="nav-list">
              <li>
                <a href="" className="second">INSTRUCTIONS</a>
              </li>
              <li>
                <a href="" className="second">RATES & TERMS</a>
              </li>
              <li>
                <a href="" className="second">LEARN MORE</a>
              </li>
              <li>
                <a href="" className="second">CONTACT US</a>
              </li>
              <li>
                <a href="" className="second">FAQ</a>
              </li>
              <li>
                <button className="second">APPLY TODAY</button>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <h1 className="title">We offer Loans for Bad Credit</h1>
          <p className="sub-title">We specialize in loans for people with bad credit. Get a loan with Zingo Cash's quick loan process.</p>
          <button className="enroll">ENROLL TODAY</button>
        </div>
      </div>
    );
  }
}

export default App;
