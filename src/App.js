import React, { Component } from 'react';
import './App.css';
import route from './route'
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {route}
        
      </div>
    );
  }
}

export default App;
