import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import Header from './Header.js'
import facebook from './img/FB-f-Logo__blue_72.png';
import hero from './img/zingocash_heroimage.jpg';
import banner from './img/zingocash_image.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer>
          <Sticky>
          {
          ({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => {
            return (
                <Header />
            )
          }
          }
          </Sticky>

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
            <p style={{height:500}}> filler </p>

          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default App;
