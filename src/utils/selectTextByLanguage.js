import textsEN from '../config/texts';
import textsPT from '../config/texts_pt';

const texts = {
  en: textsEN,
  pt: textsPT
};

function selectTextByLanguage(text) {
  let language = navigator.language.substr(0, 2);

  if(Object.getOwnPropertyNames(texts).indexOf(language) === -1)
  	language = 'en';

  return texts[language][text];
}

export default selectTextByLanguage;