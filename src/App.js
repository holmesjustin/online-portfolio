import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Portfolio from './pages/PortfolioPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/about' exact component={About}/>
        <Route path = '/contact' exact component={Contact}/>
        <Route path = '/portfolio' exact component={Portfolio}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
