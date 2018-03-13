import React, { Component } from 'react';
import Icons from './Icons.js';

// styles for this component

let cardStyle1 = {
    fontSize: '2em',
  }
  let cardStyle0 = {
    fontSize: '1em'
  }
  let cardStyle2 = {
  }
  let cardStyle3 = {
    fontSize: 18,
  }
  
  
  class Forecast extends Component {
    getIcon = item => {
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
          return ` ${icon.img} `;
        }
        return false;
      });
    };
    
    isToday = bool => {
      if (bool) {
        return (<div className=" col-md-12">
          {" "}
          {this.props.item.name}:
      <div className="row today">
            <p style={cardStyle1} className="col-md-3">
              <Icons isToday={true} img={this.getIcon(this.props.item)} />
              {this.props.item.temperature} {this.props.item.temperatureUnit}
            </p>
            <p className="col-md-6">{this.props.item.detailedForecast}</p>
          </div>
        </div>
        )
      }
      else {
        return (
          <div
            style={cardStyle0}
            className="forecast col-md-3 col-md-offset-5"
            tooltip={this.props.item.detailedForecast}
          >
            {this.props.item.name}:
                <div style={cardStyle2} className="container ">
              <p style={cardStyle1} className="col-md-18 temperature">
                {this.props.item.temperature} {this.props.item.temperatureUnit}
              </p>
  
              <Icons isToday={this.props.isToday} img={this.getIcon(this.props.item)} />
              <div className="shortForecast" style={cardStyle3}>{this.props.item.shortForecast}</div>
            </div>
          </div>
        )
      }
    }

    render() {
      return this.isToday(this.props.isToday)
    }
  }


  export default Forecast;