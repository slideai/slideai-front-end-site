import backendUrl from '../config/backendUrl';

function postSlide({ searchTerm, prefix, author, font, lang, numberOfSlides }) {
  const body = JSON.stringify({ searchTerm, prefix, author, font, lang, numberOfSlides });
  return new Promise(async (next, reject) => {
    console.log(backendUrl)
  	try {
      const call = await fetch(`${backendUrl}/slides`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      });

      const response = await call.json();

      if(response.slideId)
        next(response.slideId);
      else
        reject(response.error);
    } catch(error) {
      reject('Connection error');
    }
  });
}

export { postSlide };