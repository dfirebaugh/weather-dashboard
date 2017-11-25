import React, { Component } from 'react';
import Weather from './Components/Weather.js';
import './App.css';
import './wu-icons-style.min.css';
// import clouds from './cloudy.jpg';


class App extends Component {
  render() {
    console.log('render')
    return (
      <div className="App">
      <Weather />

      </div>
    );
  }
}

export default App;
