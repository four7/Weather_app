import React from 'react';
import './Card.module.css';
var moment = require('moment');


class Card extends React.Component {

    


    render() {
        let newDate = new Date();
        const weekday = this.props.day.dt * 1000
        newDate.setTime(weekday)
        
        const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x red"

        var iconTest = this.props.day.weather[0].id;
        console.log(iconTest);

        var iconID = this.props.day.weather[0].icon;
        console.log(iconID);
        var icons = `http://openweathermap.org/img/wn/${iconID}@2x.png`

        return(
            <div className="col-auto text-center">
                <br/>
                <div className="card text-center" style={{backgroundColor: "#B1C7CC"}}>
                <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                <i className={icons}></i>
                <img src={icons} height="100" width="100"></img>
                <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                <h7>Min: {Math.round(this.props.day.main.temp_min)} °C</h7>
                <h7>Max: {Math.round(this.props.day.main.temp_max)} °C</h7>
                <div className="card-body">
                    <p className="card-text"><i>{this.props.day.weather[0].description}</i></p>
                </div>
                </div>
            </div>
        )
    }
}

export default Card