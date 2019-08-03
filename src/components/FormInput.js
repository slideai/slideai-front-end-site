import React from 'react';
import { TextField } from '@material-ui/core';
const download = require("downloadjs")




const langs = [
    {
      value: 'pt',
      label: 'PT',
    },
    {
      value: 'en',
      label: 'EN',
    },
  ];
const prefixsPT = [
    {
        value: 'Quem é',
        label: "Quem é"
    },
    {
        value: 'O que é',
        label: "O que é"
    },
    {
        value: 'A historia de',
        label: "A historia de"
    },
]
const prefixsEN = [
    {
        value: 'Who is',
        label: "Who is"
    },
    {
        value: 'What is',
        label: "What is"
    },
    {
        value: 'History of',
        label: "History of"
    },
]

async function postOnApi(values) {
    console.log("entrou")
    try {
      let response = await fetch("https://slide-ai-backend.herokuapp.com/slides", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
      return await response.json(Promise.value)
    } catch (error) {
      console.error(error);
    }
  }
async function downloadFile(id){
    const url = `https://slide-ai-backend.herokuapp.com/slides/${id}.pptx`
    return await fetch(url, {
        method: 'GET',
      }).then(function(resp) {
        return resp.blob();
      }).then(function(blob) {
        download(blob,`${id}.pptx`);
      });

}

export default function FormInput(){
    const [values, setValues] = React.useState({
        lang: '',
        author: '',
        searchTerm: '',
        font: '',
        prefix:'',
        numberOfSlides:''
      });
    const handleSubmit = async  e =>{
        try{
            e.preventDefault()
            const valuesToBeSendToBackend = new FormData()
            valuesToBeSendToBackend.append('lang',values.name)
            valuesToBeSendToBackend.append('author',values.author)
            valuesToBeSendToBackend.append('searchTerm',values.searchTerm)
            valuesToBeSendToBackend.append('font',values.font)
            valuesToBeSendToBackend.append('prefix',values.prefix)
            valuesToBeSendToBackend.append('numberOfSlides',values.numberOfSlides)
            console.log(values)
            const id = await postOnApi(values)
            await downloadFile(id.slideId)
        }
        catch (e){
            console.log('Entrou no catch  ')

            console.log(e)
        }
    }
    const handleChange = name => event => {
        try{
            setValues({ ...values, [name]: event.target.value });
        }
        catch(e){
            console.log('Entrou no catch')
            console.log(e)
        }
      };
        return (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    label="author"
                    value={values.author}
                    onChange={handleChange('author')}
                    margin ="normal"
                />
                <TextField
                    label="searchTerm"
                    value={values.searchTerm}
                    onChange={handleChange('searchTerm')}
                    margin ="normal"
                />
                <TextField
                    label="numberOfSlides"
                    value={values.numberOfSlides}
                    onChange={handleChange('numberOfSlides')}
                    margin ="normal"
                />
                <TextField
                    label="font"
                    value={values.font}
                    onChange={handleChange('font')}
                    margin ="normal"
                    helperText="Padrão: Arial"
                />
                <TextField
                    select
                    value={values.lang}
                    onChange={handleChange('lang')}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                >
                    {langs.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>`
                <TextField
                    select
                    defaultValue="pt"
                    value={values.prefix}
                    onChange={handleChange('prefix')}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Prefix"
                    margin="normal"
                >
                    {prefixsPT.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <button type='submit'  > Enviar </button>
            </form>
        )
    }