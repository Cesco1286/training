import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="header">
          <h1>This is the verge</h1>
        </div>       
        <div className="news-row">
          <div className="news-big">
            <p>big</p>
            
          </div>
          <div className="news-small">
            <p>small</p>            
          </div>          
        </div>
      </div>
    );
  }
}

export default Main;
