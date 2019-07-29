import React from 'react';
import './global.css'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
