import React, { Component } from 'react';

import Header from './components/Header';
import Routes from './routes';

import './styles.css';

const App = () => (
  <div className="App">
    <Header></Header>
    <Routes></Routes>
  </div>
);

export default App;
