import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  constructor(){
    super();
    
    this.state = {
      temperature: [],
    }
  }


  
  componentDidMount(){
    var city = "Toronto"
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6141e43173b3e184ee54fe6053316bee';
    fetch(url)
    .then((resp) => resp.json())
    .then(data => { 
        //var d = new Date(0);

        let temperature = Math.round((data.main.temp) - 273.15);
        let wind_speed = Math.round((data.wind.speed * 3.6));
        let humidity = data.main.humidity;
        let wind_gust = Math.round((data.wind.gust) * 3.6);
        let pressure = (data.main.pressure) / 10;
        let visibility = Math.round((data.visibility) / 1000);
        let sunrise = moment.unix(data.sys.sunrise).format('LT');
        let sunset = moment.unix(data.sys.sunset).format('LT');
        let image_source = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        let status = data.weather[0].description;
        let max_temp = Math.round((data.main.temp_max) - 273.15);
        let city = data.name;

        var T = (Math.round((data.main.temp) - 273.15) * 1.8) + 32;
        var rh = data.main.humidity;
        console.log("Farenheit",T);
        console.log("Humidity", rh);
        console.log("icon", data.weather[0].icon);

         var feelslike = Math.round(((-42.379 + (2.04901523 * T) + (10.14333127 * rh)
         - (0.22475541 * T * rh) - (6.83783 * Math.pow(10, -3) * Math.pow(T, 2))
         - (5.481717 * Math.pow(10, -2) * Math.pow(rh, 2)) + (1.22874 * Math.pow(10, -3) * Math.pow(T, 2) * rh)
         + (8.5282 * Math.pow(10, -4) * T * Math.pow(rh, 2)) - (1.99 * Math.pow(10, -6) * Math.pow(T, 2) * Math.pow(rh, 2)))-32) / 1.8);


        let heatindex = feelslike;
        
          this.setState({city,temperature,wind_speed,humidity,wind_gust,pressure,visibility,sunrise,sunset,heatindex,image_source,status,max_temp});
        
        console.log("state", this.state.temperature);
        console.log("Wind Speed", this.state.wind_speed);
        console.log("Humidity", this.state.humidity);
        console.log("Gust", this.state.wind_gust);
        console.log("Pressure", this.state.pressure);
        console.log("Visibility", this.state.visibility);
        console.log("Sunrise", this.state.sunrise);
        console.log("Sunset", this.state.sunset);
    })
    
    .catch(function(error){
      console.log(error);
    })
}



render(){
  return (
  
  <div className="container">
  <h1>{this.state.city} Weather</h1>
  <div className="info_card"> 
    <span className="temp">{this.state.temperature}</span>
  <div className="units">
    <div className="unitwrap">
    <span>˚C</span>
    </div>
    <p class="feels-like"><span class="label">Feels like</span><span class="value">{this.state.heatindex}</span></p>
  </div>
  <div className="weather-icon"><img src={this.state.image_source}/></div>
  </div>
  <div className="status"><span>{this.state.status}</span></div>


<div className="secondary">
  <div className="details">
  <div class="detailed-metrics">
    <span class="label">Wind</span>
    <span class="value">{this.state.wind_speed}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">km/h</span>
    </div>
  </div>

  <div class="detailed-metrics">
    <span class="label">Humidity</span>
    <span class="value">{this.state.humidity}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">%</span>
    </div>
  </div>

  <div class="detailed-metrics">
    <span class="label">Visibility</span>
    <span class="value">{this.state.visibility}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">km/h</span>
    </div>
  </div>
  
  <div class="detailed-metrics">
    <span class="label">Sunrise</span>
    <span class="value">{this.state.sunrise}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric"></span>
    </div>
  </div>

    <div class="detailed-metrics">
    <span class="label">Wind gust</span>
    <span class="value">{this.state.wind_gust}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">km/h</span>
    </div>
  </div>
  
  <div class="detailed-metrics">
    <span class="label">Pressure</span>
    <span class="value">{this.state.pressure}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">kPa</span>
    </div>
  </div>

    <div class="detailed-metrics">
    <span class="label">Max Temp</span>
    <span class="value">{this.state.max_temp}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric">˚C</span>
    </div>
  </div>
  
  <div class="detailed-metrics">
    <span class="label">Sunset</span>
    <span class="value">{this.state.sunset}</span>

    <div class="stack">
      <span class="vector"></span>
      <span class="metric"></span>
    </div>
  </div>
  </div>
  </div>
  </div>

  )
}

  
}

export default App;

