import React, { Component } from 'react';
import './App.css';

class Background extends Component{
    constructor(){
        super();
        this.state = {
            temperature: [],
        };
    }


componentDidMount(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=6141e43173b3e184ee54fe6053316bee')
    .then(results => {
        return results.json();
    }).then(data => {      
        let temperature = data.results.map(temp) => {
            return(
            <div key={temp.results}>
            <p>{temp.main.temp}</p>
            </div>
        )   
    })
    this.setState({temperature:temperature});
    console.log("state",this.state.temperature);
    })
}

render(){
    return (

    <div className="container">
    <p>{this.state.temperature}</p>
    </div>

    )
}







}