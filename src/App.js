import React from 'react';
import './App.css'
import logo from './logo-Bridge.jpg'

class App extends React.Component { 
  constructor(){
    super()
    this.state= {
      title: "Hello from Bridgelabz"
    }
  }
  render(){
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      <img src={logo} alt ="The Bridgelabz logo: a Bridge to Employment through lab works" />
    </div>
  );
  }
}

export default App;
