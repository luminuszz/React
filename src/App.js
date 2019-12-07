import React, { Component } from 'react';
import Header from './components/Header';
import api from './services/api';
import Main from './pages/main/index';
const App = () => (
  <div className="App">

     <Header/>
      <Main/>
  </div>

)


export default App;
