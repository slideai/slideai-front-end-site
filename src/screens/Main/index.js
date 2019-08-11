import React, { Component } from 'react';
import Loading from '../../components/Loading';
import download from 'downloadjs';
import './index.css';

import selectTextByLanguage from '../../utils/selectTextByLanguage';
import backendUrl from '../../config/backendUrl';
import { postSlide } from '../../utils/slideRequests';

class Main extends Component {
  state = {
  	searchTerm: '',
  	prefix: '',
  	author: '',
  	font: '',
  	lang: '',
  	numberOfSlides: '',
  	error: '',
  	loading: false
  };

  onInputChange = e =>  {
  	const obj = {};
  	const value = e.target.value;
  	const stateName = e.target.name;

  	obj[stateName] = value;
  	this.setState(obj);
  }

  onFormSubmit = async e => {
  	e.preventDefault();

  	const { author,searchTerm, prefix, font, lang, numberOfSlides } = this.state;
  	const error = this.validateFields();

  	console.log(error);

  	if(error)
  	  return this.setState({ error });

  	this.setState({ error: '', loading: true });

  	try {
  	  const slideId = await postSlide({ author, searchTerm, prefix, font, lang, numberOfSlides });
  	  download(`${backendUrl}/slides/${slideId}.pptx`);
  	  this.cleanFields();
  	} catch(error) {
  	  this.setState({ error: selectTextByLanguage(error), loading: false });
  	}
  }

  validateFields = () => {
    const { searchTerm, prefix, font, lang, numberOfSlides } = this.state;
    
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

  cleanFields = () => {
    this.setState({ searchTerm: '', prefix: '', author: '', font: '', lang: '', numberOfSlides: '', loading: false });
  }

  render() {
  	const { onInputChange, onFormSubmit, state } = this;
  	const { searchTerm, prefix, author, font, lang, numberOfSlides, error, loading } = state;

    return (
      <div className="main-container">
        <img src={require('../../assets/logo_transparent_cutted.png')} className="logo" alt="SlideAI Logo" />
        
        <form onSubmit={onFormSubmit}>
          { error ? <p className="error">{error}</p> : null }

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
          { !loading ? <input type="submit" value={selectTextByLanguage('Create')} /> : null }
          { loading ? <Loading /> : null }
        </form>

        <footer>
          <p>{selectTextByLanguage('Made by')} <a href="https://windows87.github.io/">Yuri Faria</a> {selectTextByLanguage('and')} <a href="https://github.com/LeoFC97">Leonardo Costa</a></p>
        </footer>
      </div>
    );
  }
}

export default Main;
