import React, { Component } from 'react';
import './index.css';

import selectTextByLanguage from '../../utils/selectTextByLanguage';

class Main extends Component {
  state = {
  	searchTerm: '',
  	prefix: '',
  	author: '',
  	font: '',
  	lang: '',
  	numberOfSlides: ''
  };

  onInputChange = e =>  {
  	const obj = {};
  	const value = e.target.value;
  	const stateName = e.target.name;

  	obj[stateName] = value;
  	this.setState(obj);
  }

  onFormSubmit = e => {
  	e.preventDefault();

  	const error = this.validateFields();
  }

  validateFields = () => {
    const { searchTerm, prefix, author, font, lang, numberOfSlides } = this.state;
    
    if(!searchTerm)
      return selectTextByLanguage('Type slide theme');

    if(!prefix)
      return selectTextByLanguage('Type prefix');

    if(!font)
      return selectTextByLanguage('Select font');

    if(!lang)
      return selectTextByLanguage('Select language');

    if(!numberOfSlides)
      return selectTextByLanguage('Type number of slides');
  }

  render() {
  	const { onInputChange, onFormSubmit, state } = this;
  	const { searchTerm, prefix, author, font, lang, numberOfSlides } = state;

    return (
      <div className="main-container">
        <img src={require('../../assets/logo_transparent_cutted.png')} className="logo" alt="SlideAI Logo" />
        
        <form onSubmit={onFormSubmit}>
          <input type="text" placeholder={selectTextByLanguage('Slide theme')} name="searchTerm" onChange={onInputChange} value={searchTerm} />
          <input type="text" placeholder={selectTextByLanguage('Prefix (the history of, what is, etc.)')} name="prefix" onChange={onInputChange} value={prefix} />
          <input type="text" placeholder={selectTextByLanguage('Author(s)')} name="author" onChange={onInputChange} value={author} />
          
          <select name="font" onChange={onInputChange} value={font}>
            <option value="">{selectTextByLanguage('Font')}</option>
            <option value="Arial">Arial</option>
            <option value="Comfortaa">Comfortaa</option>
            <option value="Roboto">Roboto</option>
            <option value="Russo One">Russo One</option>
          </select>


          <select name="lang" onChange={onInputChange} value={lang}>
            <option value="">{selectTextByLanguage('Language')}</option>
            <option value="en">{selectTextByLanguage('English')}</option>
            <option value="pt">{selectTextByLanguage('Portuguese')}</option>
          </select>

          <input type="number" placeholder={selectTextByLanguage('Number of Slides (maximum 20)')} name="numberOfSlides" onChange={onInputChange} value={numberOfSlides} />
          <input type="submit" value={selectTextByLanguage('Create')} />
        </form>

        <footer>
          <p>{selectTextByLanguage('Made by')} <a href="https://windows87.github.io/">Yuri Faria</a> {selectTextByLanguage('and')} <a href="https://github.com/LeoFC97">Leonardo Costa</a></p>
        </footer>
      </div>
    );
  }
}

export default Main;
