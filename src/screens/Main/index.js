import React, { Component } from 'react';
import './index.css';

class Main extends Component {
  state = {
  	searchTerm: '',
  	prefix: '',
  	author: '',
  	font: '',
  	lang: '',
  	numberOfSlides: 0
  };

  onInputChange = (e) =>  {
  	const obj = {};
  	const value = e.target.value;
  	const stateName = e.target.name;

  	obj[stateName] = value;
  	this.setState(obj);
  }

  render() {
  	const { onInputChange, state } = this;
  	const { searchTerm, prefix, author, font, lang, numberOfSlides } = state;

    return (
      <div className="main-container">
        <img src={require('../../assets/logo_transparent_cutted.png')} className="logo" alt="SlideAI Logo" />
        
        <form>
          <input type="text" placeholder="Tema" name="searchTerm" onChange={onInputChange} value={searchTerm} />
          <input type="text" placeholder="Prefixo (A história de, O que é, etc.)" name="prefix" onChange={onInputChange} value={prefix} />
          <input type="text" placeholder="Autor(es)" name="author" onChange={onInputChange} value={author} />
          
          <select name="font" onChange={onInputChange} value={font}>
            <option value="">Fonte</option>
            <option value="Arial">Arial</option>
            <option value="Comfortaa">Comfortaa</option>
            <option value="Roboto">Roboto</option>
            <option value="Russo One">Russo One</option>
          </select>


          <select name="lang" onChange={onInputChange} value={lang}>
            <option value="">Língua</option>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
          </select>

          <input type="number" placeholder="Número de Slides (max 20)" name="numberOfSlides" onChange={onInputChange} value={numberOfSlides} />
          <input type="submit" value="Criar" />
        </form>

        <footer>
          <p>Made by <a href="https://windows87.github.io/">Yuri Faria</a> and <a href="https://github.com/LeoFC97">Leonardo Costa</a></p>
        </footer>
      </div>
    );
  }
}

export default Main;
