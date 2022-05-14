import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Template } from './components/mainComponents';
import Premium from './components/Premium';
import Free from './components/Free';

function App() {
  
  return (
    <Template>
      <Header />
      <Premium />
      <Free />
    </Template>
    
  )

}

export default App;
