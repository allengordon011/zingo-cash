import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import hero from './img/zingocash_heroimage.jpg';
import banner from './img/zingocash_image.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
          <div className="main">
            <div className="main-hero">
              <img src={hero} className="hero" alt="hero" />
              <div className="hero-overlay">
                <div className="hero-text">
                  <h1 className="title">We offer <b>Loans</b> for Bad Credit</h1>
                  <p className="sub-title">We specialize in loans for people with bad credit. Get a loan with Zingo Cash's quick loan process.</p>
                </div>
                <button className="enroll">ENROLL TODAY</button>
              </div>
            </div>
            <div className="process">
              <h2>OUR CASH PROCESS</h2>
              <ul className="icons-list">
                <li>
                  <div className="icon-enroll" alt="icon-enroll" />
                  <p className="icon-text">Enroll Today</p>
                </li>
                <div className="icon-arrow" alt="icon-arrow" />
                <li>
                  <div className="icon-apply" alt="icon-apply" />
                  <p className="icon-text">Apply Online</p>
                </li>
                <div className="icon-arrow" alt="icon-arrow" />
                <li>
                  <div className="icon-verification" alt="icon-verification" />
                  <p className="icon-text">Verification</p>
                </li>
                <div className="icon-arrow" alt="icon-arrow" />
                <li>
                  <div className="icon-zingocash" alt="icon-zingocash" />
                  <p className="icon-text">Zingo Cash!</p>
                </li>
              </ul>
            </div>
            <div className="bottom-banner">
              <img src={banner} className="banner" alt="banner" />
              <div className="banner-overlay">
                <h1 className="title-banner">WE TRY TO HELP</h1>
                <p className="sub-title-banner">Zingo Cash will work with you to find solutions to help you get past your current budget issues.</p>
              </div>
            </div>
            <div className="links">
              <div className="links-logo-phone">
                <div className="logo-bottom" alt="logo" />
                <div className="links-phone">
                  1-888-ZINGO-55
                </div>
              </div>
              <div className="links-1">
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Instructions</a>
                  </li>
                  <li>
                    <a href="">Rates & Terms</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <br />
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="links-2">
                <ul>
                  <li>
                  <a href=""><b>Learn More</b></a>
                  </li>
                  <li>
                    <a href="">Budget Tips</a>
                  </li>
                  <li>
                    <a href="">Customer Loan Pamphlet</a>
                  </li>
                  <li>
                    <a href="">Credit Resources</a>
                  </li>
                  <li>
                    <a href="">Glossary of Terms</a>
                  </li>
                  <br />
                </ul>
              </div>
              <div className="links-2">
                <ul>
                  <li>
                    <a href=""><b>My Account</b></a>
                  </li>
                  <li>
                    <a href="">Application History</a>
                  </li>
                  <li>
                   <a href="">Payment History</a>
                  </li>
                  <li>
                    <a href="">Personal Information</a>
                  </li>
                  <li>
                    <a href="">Change Password</a>
                  </li>
                  <li>
                    <a href="">Apply</a>
                  </li>
                  <li>
                    <a href="">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer">
              <ul id="footer-list">
                <li>
                  <a href="">PRIVATE NOTICE</a>
                </li>
                <li>
                  <a href="">SECURITY</a>
                </li>
                <li>
                  <a href="">TERMS OF USE</a>
                </li>
                <li>
                  <a href="">CONSUMER LOAN PAMPHLET</a>
                </li>
                <li>
                  <p>&copy;2011 ZINGO FINANCIAL, LLC. ALL RIGHTS RESERVED.</p>
                </li>
              </ul> 
            </div>
          </div>
      </div>
    );
  }
}

export default App;
