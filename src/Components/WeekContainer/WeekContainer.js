import React from 'react';
import Card from '../Card/Card';
let API_KEY = "dfad1c91a96fdbb335fa11dea72f9afe"

// const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${API_KEY}`
// api.openweathermap.org/data/2.5/forecast?q=stockholm&appid=dfad1c91a96fdbb335fa11dea72f9afe
// http://api.openweathermap.org/data/2.5/forecast?zip=10302,us&units=metric&APPID=${API_KEY}

const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=stockholm&units=metric&appid=${API_KEY}`

class WeekContainer extends React.Component {
  state = {
    days: []
  }

 
  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
    //   var dailyData = data;
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container">
      {/* <h1 className="display-1 jumbotron">5-Day Forecast.</h1> */}
      <h4 className="display-5 text-muted">Stockholm,Sweden</h4>
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer