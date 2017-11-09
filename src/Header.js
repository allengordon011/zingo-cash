import React from 'react';
import facebook from './img/FB-f-Logo__blue_72.png';

class Header extends React.Component {
    render() {
        return (
            <header>
              <div className="top-header">
                <ul id="top-header-list">
                  <li>
                    <a href="" className="login">LOGIN</a>
                  </li>
                  <li>
                    <p>CALL US</p>
                  </li>
                  <li>
                    <p>1-888-ZINGO-55</p>
                  </li>
                  <li>
                    <a href=""><img src={facebook} className="facebook" alt="facebook"/></a>
                  </li>
                </ul>
              </div>
              <nav className="main-nav">
                <ul id="nav-list">
                  <li>
                    <div className="logo-top" alt="logo" />
                  </li>
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
        )}
    }

export default Header;