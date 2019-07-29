import React from 'react';
import './Header.css'

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import {Link} from 'react-router-dom';   

// import { Container } from './styles';

export default function Header() {
  return (
      <header id='main-header' >
          <div className='header-content'>
            <Link to='/'>
              <img src={logo} alt='Logo' ></img>
            </Link>
            <Link to='/team'>
              <img src={camera} alt='Enviar Publicaco' ></img>
            </Link>
          </div>
      </header>
  );
}