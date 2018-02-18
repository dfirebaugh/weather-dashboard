import React, { Component } from 'react';


class Icons extends Component {
  render() {
    let today = <i className={`wu wu-black todaything weather-icons wu-128 ${this.props.img}`}></i>
    let daily = <i className={`wu wu-black weather-icons wu-128 ${this.props.img}`}></i>

    return (
      (this.props.isToday ? today : daily)
    );
  }
}

export default Icons;
