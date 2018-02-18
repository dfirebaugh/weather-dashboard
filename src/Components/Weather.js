import React, { Component } from 'react';
import api from '../config.js';
import Icons from './Icons.js';

class Weather extends Component {
  constructor(){
    super();
    this.state = {city:'',state:'',valid:true,loading:true}
  }

  componentDidMount(){
    this.getCity();
  }

  getWeather(lat,lon){
    let that = this;

    fetch(`${api.url}points/${lat},${lon}`)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        // console.log(response)
          let city = response.properties.relativeLocation.properties.city
          let state = response.properties.relativeLocation.properties.state

          // console.log(response.properties.relativeLocation.properties.city,response.properties.relativeLocation.properties.state)
          that.setState({city:city,state:state})
        })
  }

  getCity(){
    let that = this;
    console.log('Attempting to get your Location')
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      let lat, lon;
      // let location = {
      //   lat:JSON.stringify(pos.coords.latitude),
      //   lon:JSON.stringify(pos.coords.longitude)
      // };

      //if the coords aren't valid, use the temp coords
      that.state.valid ? lat = JSON.stringify(pos.coords.latitude) : useIp();
      that.state.valid ? lon = JSON.stringify(pos.coords.longitude) : lon = -77.487448;
      that.getWeather(lat,lon);
      that.getForecast(lat,lon);

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      // alert(`ERROR(${err.code}): ${err.message} attempting to get location via ip address`)
      useIp();
    };

    let useIp = () => {
      // issues with navigator.geolocation.getCurrentPosition -- I'm going to get coordinates from external IP address
      fetch('https://freegeoip.net/json/')
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        let lat, lon;
        that.state.valid ? lat = JSON.stringify(response.latitude) : lat = 37.610863;
        that.state.valid ? lon = JSON.stringify(response.longitude) : lon = -77.487448;
        // console.log('Lat:', response.lat,'Lon:',response.lon)
        that.getWeather(lat,lon);
        that.getForecast(lat,lon)
        console.log(`your location is: LAT:${response.latitude} LON:${response.longitude}`)
      });
    }

    navigator.geolocation.getCurrentPosition(success, error,options);
  }

  getForecast(lat,lon){
    let that = this;

    fetch(`${api.url}points/${lat},${lon}/forecast`)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        that.forecast = response.properties.periods
        that.setState({loading:false})
      });
    }

  render() {
    let forecast,now;
    let cardStyle1 = {
      fontSize:'2em',
      // marginLeft:0
      // marginTop:-4,
      // marginRight:30,
      // position:'absolute',
      // paddingLeft:'2.7em',
      // bottom:0
    }
    let cardStyle0 = {
      fontSize:'1em'
    }
    let cardStyle2 = {
      // marginTop:2,
      // opacity:1
    }
    let cardStyle3={
      fontSize:18,
    }



    let loading = <div className='loading'>
                      <div id="fountainTextG">
                        <div id="fountainTextG_1" className="fountainTextG">L</div>
                        <div id="fountainTextG_2" className="fountainTextG">o</div>
                        <div id="fountainTextG_3" className="fountainTextG">a</div>
                        <div id="fountainTextG_4" className="fountainTextG">d</div>
                        <div id="fountainTextG_5" className="fountainTextG">i</div>
                        <div id="fountainTextG_6" className="fountainTextG">n</div>
                        <div id="fountainTextG_7" className="fountainTextG">g</div>
                      </div>
                  </div>

    let city = <h3>{this.state.city} {this.state.state}</h3>

    let getIcon = item => {
    let icons = [
      {
        term: "Flurries",
        img: "wu-flurries"
      },
      {
        term: "Rain",
        img: "wu-rain"
      },
      {
        term: "clear",
        img: "wu-clear"
      },
      {
        term: "Clear",
        img: "wu-clear"
      },
      {
        term: "Mostly Sunny",
        img: "wu-mostlysunny"
      },
      {
        term: "Sunny",
        img: "wu-clear"
      },
      {
        term: "Sleet",
        img: "wu-sleet"
      },
      {
        term: "Snow",
        img: "wu-snow"
      },
      {
        term: "Storms",
        img: "wu-chancetstorms"
      },
      {
        term: "Partly",
        img: "wu-partlycloudy"
      },
      {
        term: "Cloudy",
        img: "wu-cloudy"
      },
      {
        term: "Fog",
        img: "wu-fog"
      },
      {
        term: "Hazy",
        img: "wu-hazy"
      },
      {
        term: "Mostly Cloudy",
        img: "wu-mostlycloudy"
      },
      {
        term: "Hail",
        img: "wu-hail"
      },
      {
        term: "Thunder",
        img: "wu-tstorms"
      }
  ];

  return icons.map((icon, i) => {
    if (item.shortForecast.includes(icon.term)) {
      // console.log(item.shortForecast.includes(icon.term), icon.term);
      // console.log(`<i className='wu wu-black wu-32 ${icon.img}'</i>`)
      return ` ${icon.img} `;
    }
    return false;
  });
};

// console.log("Valid Location:", this.state.valid);
if (this.forecast) {
  now = (
    <div className=" col-md-12">
      {" "}
      {this.forecast[0].name}:
      <div className="row today">
        <p style={cardStyle1} className="col-md-3">
          <Icons isToday={true} img={getIcon(this.forecast[0])} />
          {this.forecast[0].temperature} {this.forecast[0].temperatureUnit}
        </p>
        <p className="col-md-6">{this.forecast[0].detailedForecast}</p>
      </div>
    </div>
  );

  forecast = this.forecast.map(function(item, index) {
    // console.log(item.name, item.shortForecast);
    if (index > 0) {
      return (
        <div
          key={index}
          style={cardStyle0}
          className="forecast col-md-3 col-md-offset-5"
          tooltip={item.detailedForecast}
        >
          {item.name}:
          <div style={cardStyle2} className="container ">
            <p style={cardStyle1} className="col-md-18 temperature">
              {item.temperature} {item.temperatureUnit}
            </p>

            <Icons isToday={false} img={getIcon(item)} />
            <div className="shortForecast" style={cardStyle3}>{item.shortForecast}</div>
          </div>
        </div>
      );
    }
  });
  // <div style={cardStyle3}>{item.detailedForecast}</div>
}

    return (
      <div className="weather">
        <header className="App-header">
          {(this.state.loading ? loading : city)}
        </header>
        <div className="container forecast-container">
          {(this.state.loading ? <div className="error">Attempting to get your location </div> : "" )}
          {(this.state.valid ? "" :  <h5 className='error'>Unable to pull your coordinates.  Using demo location</h5>)}
          {now}
        <div className="row-fluid scroll container">{(this.forecast ? forecast : "")}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
