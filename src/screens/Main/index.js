import React, { Component } from 'react';
import './index.css';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <img src={require('../../assets/logo_transparent_cutted.png')} className="logo" />
        <form>
          <input type="text" placeholder="Tema" />
          <input type="text" placeholder="Prefixo (A história de, O que é, etc.)" />
          <input type="text" placeholder="Autor(es)" />
          
          <select>
            <option value="">Fontes</option>
            <option value="Arial">Arial</option>
            <option value="Comfortaa">Comfortaa</option>
            <option value="Roboto">Roboto</option>
            <option value="Russo One">Russo One</option>
          </select>


          <select>
            <option value="">Língua</option>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
          </select>

          <input type="number" placeholder="Número de Slides (max 20)" />
          <input type="submit" value="Criar" />
        </form>
      </div>
    );
  }
}

export default Main;