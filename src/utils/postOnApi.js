  function postOnApi(values) {
        console.log("entrou")
        try {
          let response =  fetch("https://slide-ai-backend.herokuapp.com/slides", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
          return  response.json(Promise.value)
        } catch (error) {
          console.error(error);
        }
      }
module.exports = postOnApi;
