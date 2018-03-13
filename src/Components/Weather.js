import React, { Component } from 'react';
import api from '../config.js';
import Loading from './Loading.js';
import Forecast from './Forecast.js';


const City = (props) => <h3>{props.city} {props.state}</h3>;

class Weather extends Component {
  constructor() {
    super();
    this.state = { city: '', state: '', valid: true, loading: true }
  }

  componentDidMount() {
    this.getCoords();
  }

  getCity(location) {
    fetch(`${api.url}points/${location.lat},${location.lon}`)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        let city = response.properties.relativeLocation.properties.city;
        let state = response.properties.relativeLocation.properties.state;

        this.setState({ city: city, state: state })
        this.getForecast(this.state.location)
        console.log('city: ', city, state)
      })
  }

  getCoords() {
    let getPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })
    }
    console.log('Attempting to get your Location')

    getPosition()
      .then((position) => {
        let location = {
          lat: JSON.stringify(position.coords.latitude),
          lon: JSON.stringify(position.coords.longitude)
        };
        this.setState({ location: location })

        console.log('location: ', this.state.location)
        this.getCity(this.state.location)
      })
      .catch((err) => {
        console.error(err.message);
        alert(err.message);
      });
  }

  getForecast(location) {
    fetch(`${api.url}points/${location.lat},${location.lon}/forecast`)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        this.setState({ forecast: response.properties.periods })
        console.log(response.properties.periods)
      });
  }

  forecastCard = (forecast) => {
    return forecast.map(function (item, index) {
      return (<Forecast key={index} item={item} isToday={false} />)
    })
  }


  render() {
    return (
      <div className="weather">
        <header className="App-header">
          {(this.state.city === '' ? <Loading /> : <City city={this.state.city} state={this.state.state} />)}
        </header>
        <div className="container forecast-container">
          {(this.state.valid ? "" : <h5 className='error'>Unable to pull your coordinates.  Using demo location</h5>)}
          {this.state.forecast ? <Forecast item={this.state.forecast[0]} isToday={true} /> : <div className="error">Attempting to get your location </div>}
          <div className="row-fluid scroll container">
            {this.state.forecast ? this.forecastCard(this.state.forecast) : ''}
            {(this.forecast ? this.forecast : "")}
          </div>
        </div>
      </div>
    );
  }
}



export default Weather;
