import React, { Component } from 'react';
import api from '../config.js';

class Weather extends Component {
  constructor(){
    super();
    this.state = {city:'',state:'',valid:true,loading:true}

  }
  componentDidMount(){
    this.getCity();
  }
  get(url, header) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      if(header){
        // req.setRequestHeader('token', api.token)
      }

      req.onload = function() {

        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error('Network Error'));
      };
      req.send();
    });
  }
  getWeather(lat,lon){
    let that = this;

    this.get(`${api.url}points/${lat},${lon}`)
        .then(function(response) {
          // console.log(response)
          let data = JSON.parse(response);
          let city = data.properties.relativeLocation.properties.city
          let state = data.properties.relativeLocation.properties.state

          // console.log(data.properties.relativeLocation.properties.city,data.properties.relativeLocation.properties.state)
          that.setState({city:city,state:state})
        })
        .catch(function(error) {
          console.log(error);
        });
  }
  getCity(){
    let that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat,lon;
      //if the coords aren't valid, use the temp coords
      that.state.valid ? lat = JSON.stringify(position.coords.latitude) : lat = 37.610863;
      that.state.valid ? lon = JSON.stringify(position.coords.longitude) : lon = -77.487448;
      that.getWeather(lat,lon);
      that.getForecast(lat,lon);
});
  }
  getForecast(lat,lon){
    let that = this;
    this.get(`${api.url}points/${lat},${lon}/forecast`)
        .then(function(response) {
          // console.log(JSON.parse(response))
          let data = JSON.parse(response);
          that.forecast = data.properties.periods
          that.setState({loading:false})
          // that.getPhoto();
        })
        .catch(function(error) {
          console.log(error);
          that.setState({valid:false})
          that.getCity();
          that.getForecast();
        });
  }
  // getPhoto(){
  //   let photoApi = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase='
  //   let phrase = 'mostly cloudy'
  //
  //   this.get(`${photoApi}${phrase}`)
  //       .then(function(response) {
  //         // console.log(response)
  //         // let data = JSON.parse(response);
  //         // that.setState({city:city,state:state})
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  // }
  render() {
    let forecast,now;
    let cardStyle1 = {
      fontSize:'1em',
      // marginLeft:0
      marginTop:-4,
      marginRight:30,
      textAlign:'right'
    }
    let cardStyle0 = {
      fontSize:'1em'
    }
    let cardStyle2 = {
      // marginTop:2,
      // opacity:1
    }
    let cardStyle3={
      fontSize:9
    }



    let loading =
    <div className='loading'>
    <div id="fountainTextG"><div id="fountainTextG_1" className="fountainTextG">L</div><div id="fountainTextG_2" className="fountainTextG">o</div><div id="fountainTextG_3" className="fountainTextG">a</div><div id="fountainTextG_4" className="fountainTextG">d</div><div id="fountainTextG_5" className="fountainTextG">i</div><div id="fountainTextG_6" className="fountainTextG">n</div><div id="fountainTextG_7" className="fountainTextG">g</div></div>
    </div>
    let city = <h3>{this.state.city} {this.state.state}</h3>

    function getIcon(item){
      let icons = {
        'clear':<i className="wu wu-black wu-32 wu-clear"></i>,
        'mostlysunny':<i className="wu wu-black wu-32 wu-mostlysunny"></i>,
        'mostlycloudy':<i className="wu wu-black wu-32 wu-mostlycloudy"></i>,
        'chanceflurries':<i className="wu wu-black wu-32 wu-mostlycloudy"></i>,
        'chancerain':<i className="wu wu-black wu-32 wu-chancerain"></i>,
        'chancesleet':<i className="wu wu-black wu-32 wu-chancesleet"></i>,
        'chancesnow':<i className="wu wu-black wu-32 wu-chancesnow"></i>,
        'chancetstorms':<i className="wu wu-black wu-32 wu-chancetstorms"></i>,
        'cloudy':<i className="wu wu-black wu-32 wu-cloudy"></i>,
        'flurries':<i className="wu wu-black wu-32 wu-flurries"></i>,
        'fog':<i className="wu wu-black wu-32 wu-fog"></i>,
        'hazy':<i className="wu wu-black wu-32 wu-hazy"></i>,
        'partlycloudy':<i className="wu wu-black wu-32 wu-partlycloudy"></i>,
        'partlysunny':<i className="wu wu-black wu-32 wu-partlysunny"></i>,
        'rain':<i className="wu wu-black wu-32 wu-rain"></i>,
        'sleet':<i className="wu wu-black wu-32 wu-sleet"></i>,
        'snow':<i className="wu wu-black wu-32 wu-snow"></i>,
        'sunny':<i className="wu wu-black wu-32 wu-sunny"></i>,
        'tstorms':<i className="wu wu-black wu-32 wu-tstorms"></i>,
        'unknown':<i className="wu wu-black wu-32 wu-unknown"></i>
      }
    switch (item.shortForecast){
      case "Flurries":
        return icons.chanceflurries;

      case "Chance of Rain":
        return icons.chancerain;

      case "Chance of Sleet":
        return icons.chancesleet;

      case "Chance of Snow":
        return icons.chancesnow;

      case "Chance of Storms":
        return icons.chancetstorms;

      case "Clear":
        return icons.clear;

      case 'Mostly Clear':
        return icons.clear;

      case "Cloudy":
        return icons.cloudy;

      case "Fog":
        return icons.fog;

      case "Hazy":
        return icons.hazy;

      case "Mostly Cloudy":
        return icons.mostlycloudy;

      case "Mostly Sunny":
        return icons.mostlysunny;

      case "Partly Cloudy":
        return icons.partlycloudy;

      case "Partly Sunny":
        return icons.partlysunny;

      case "Chance Rain Showers then Partly Cloudy":
        return icons.rain

      case "Chance Rain Showers":
        return icons.rain;

      case "Sleet":
        return icons.sleet;

      case "Snow":
        return icons.snow;

      case "Sunny":
        return icons.sunny;

      case "Thunder Storms":
        return icons.tstorms;

      default:
        return icons.unknown

    }
    }
    // console.log(this.forecast)
    console.log(this.state.valid)
    if(this.forecast){

      now = <div className='today col-md-12 col-md-offset-5'> {this.forecast[0].name}: <p>{this.forecast[0].detailedForecast}</p>
      <p style={cardStyle1} className='col-md-18' >
        {getIcon(this.forecast[0])}{this.forecast[0].temperature} {this.forecast[0].temperatureUnit}</p>

        </div>
      forecast = this.forecast.map(function(item,index){
        // let icon;
        // console.log(item.shortForecast)

        // console.log(`${item.name},${item.shortForecast} ${item.temperature} ${item.temperatureUnit}   ${(item.temperatureTrend?item.temperatureTrend:"")}${item.windDirection}${item.windSpeed}`)
        console.log(item.name,item.shortForecast)

        // return <div> {item.name} {item.shortForecast} {item.temperature} {item.temperatureUnit}   {(item.temperatureTrend?item.temperatureTrend:"")} {item.windDirection} {item.windSpeed} </div>

        if(index > 0){
          return <div key={index} style={cardStyle0}className='forecast col-md-3 col-md-offset-5' tooltip={item.detailedForecast}>


    {item.name}:
    <div style={cardStyle2} className=''>
    {getIcon(item)}

    <p style={cardStyle3}>{item.shortForecast}</p>
    <p style={cardStyle1} className='col-md-18' >
    {item.temperature} {item.temperatureUnit}</p>
    </div>
    <div style={cardStyle3}>{item.detailedForecast}</div>
                </div>
        }
        else{
          return ""
        }
      })


    }
    return (
      <div className="weather">
        <header className="App-header">
        {(this.state.loading ? loading : city)}
        </header>
        <div className="container forecast-container">
        {(this.state.loading ? <div className="error">You Must Allow Location Access </div> : "" )}
        {(this.state.valid ? "" :  <h5 className='error'>Unable to pull your coordinates.  Using demo location</h5>)}


        {now}
          <div className="container flex-container">{(this.forecast ? forecast : "")}</div>
        </div>
        </div>
    );
  }
}

export default Weather;
