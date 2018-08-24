import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import FineArt from './Components/FineArt';
import Commercial from './Components/Commercial';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
       
        <Route exact path="/" component={Home} />
            <Route exact path="/FineArt" component={FineArt} />
            <Route exact path="/Commercial" component={Commercial} />
            <Route exact path="/About" component={About} />
      </div>
      </Router>

    );
  }
}

export default App;
