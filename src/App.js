import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import FineArt from './Components/FineArt';
import Commercial from './Components/Commercial';
import Press from './Components/Press'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="HomePage">
    <div className="mainTitle">
    <h1 > <a href="/">NIV ROZENBERG</a> </h1>
    <h3><a href="/FineArt">Fine Art</a> <a href="/Commercial">Commercial</a> <a href="/About">About</a> <a href="/Press">Press</a></h3>
    </div>
      </div>
       
        <Route exact path="/" component={Home} />
            <Route exact path="/FineArt" component={FineArt} />
            <Route exact path="/Commercial" component={Commercial} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Press" component={Press} />

      </div>
      </Router>

    );
  }
}

export default App;
