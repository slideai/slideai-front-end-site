import React, { Component } from 'react';





class Main extends Component{
    state={
        lang:'',
        author:'',
        searchTerm:'',
        font:'',
        prefix:'',
        numerOfSlides:''

    }
    handleSubmit = async e =>{
        try{
            e.preventDefault()
            const valuesToBeSendToBackend = new FormData()
            valuesToBeSendToBackend.append('lang',this.state.lang)
            valuesToBeSendToBackend.append('author',this.state.author)
            valuesToBeSendToBackend.append('searchTerm',this.state.searchTerm)
            valuesToBeSendToBackend.append('font',this.state.font)
            valuesToBeSendToBackend.append('prefix',this.state.prefix)
            valuesToBeSendToBackend.append('numerOfSlides',this.state.numerOfSlides)
            console.log(this.state)


        }
        catch (e){
            console.log('Entrou no catch  ')

            console.log(e)
        }
    }
    handleChange = e =>{
        try{
            this.setState({ [e.target.name]: e.target.value })
            console.log(e.target.name +'    '+ e.target.value)
        }
        catch(e){
            console.log('Entrou no catch  ')
            console.log(e)
        }
    }
    
    render(){
        return (
            <form id='new-post' onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="author"
                    placeholder="Nome"
                    onChange={this.handleChange}
                    value={this.state.author}
                />
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Termo de busca"
                    onChange={this.handleChange}
                    value={this.state.searchTerm}
                />
                <select
                    type="text"
                    name="lang"
                    onChange={this.handleChange}
                    value={this.state.lang }>
                    <option value="pt">PT</option>
                    <option value="en">EN</option>
                </select>
                <select
                    type="text"
                    name="prefix"
                    onChange={this.handleChange}
                    value={this.state.prefix}>
                    <option value="Quem é">Quem é</option>
                    <option value="O que é">O que é</option>
                    <option value="A historia de">A historia de</option>
                </select>
                <input
                    type="text"
                    name="numerOfSlides"
                    placeholder="7"
                    onChange={this.handleChange}
                    value={this.state.numerOfSlides}
                />
                <input
                    type="text"
                    name="font"
                    placeholder="Arial"
                    onChange={this.handleChange}
                    value={this.state.font}
                />
                <button type='submit'> Enviar </button>
            </form>
        );
    }
}
export default Main;