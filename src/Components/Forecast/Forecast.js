import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from "./Forecast.module.css";
import Card from '../Card/Card';
import CardDisplay from '../CardDisplay/CardDisplay';
let API_KEY = "dfad1c91a96fdbb335fa11dea72f9afe"
var moment = require('moment');


const Forecast = () => {
    let [city, setCity] = useState("Stockholm");
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [time, setTime] = useState();
    let [cardShow, setCardShow] = useState();
    let [tiden, setTiden] = useState();
    const [stateSetter, setstateSetter] = useState();
    const [days, setDays] = useState([]);
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var month = new Date().getMonth();
    var day = new Date().getDate();
    var year = new Date().getFullYear();
    var timeNow = `${year}-${month}-${day} ${hours}:${minutes}:00`;


      function calculateLocalTime(timezone){
            let today = new Date();
            today.setHours(today.getHours(),today.getMinutes() - 60 + parseInt(timezone/60));
            let time = today.toTimeString().split(" ");
            console.log(time);
        
           return time[0];
          }
    
    useState(() => {
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
        console.log("Data List Loaded", data.list)
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
        
        setDays(dailyData);
        getForecast();
    })
});
    function formatCards () {
    return days.map((day, index) => <Card day={day} key={index}/>)
  }

  function getDays() {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
    console.log("Data List Loaded", data.list);
    console.log(data);
    // var maxTime = data.list.map(function(b) {
    //     return moment(b.dt_txt, `${yearNow} hh:mm:ss`);
    // });
    const dailyData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'));
    console.log(dailyData);
    setDays(dailyData);
  }
    )};

    function getForecast(e) {
        
        if(e != null){
            e.preventDefault();
            setCity(e.target.value);
            console.log(city);
        }
        
        if(city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        let API_KEY = "dfad1c91a96fdbb335fa11dea72f9afe"
        const uriEncodedCity = encodeURIComponent(city);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                if(response.cod != 200) {
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
                setTime(calculateLocalTime(response.timezone));
                console.log(response);
                getDays();
                setCardShow(formatCards(getDays));
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }
    
    return (
        <div>
           <h2 className="display-4">Find Current Weather Conditions</h2>
           <br/>
           <form onSubmit={getForecast}>
               <input
               type="text"
               placeholder="Enter city"
               maxLength="50"
               className={classes.textInput}
               value={city}
               onChange={(e) => setCity(e.target.value)}
                />
            <br/>
            <br/>
           <button className={classes.Button} type="submit">Get Forecast</button>
           </form>
           <Conditions 
           responseObj={responseObj}
           error={error}
           loading={loading}
           time={time}
           />
           <div className="row justify-content-center">
           {formatCards(getDays)}
           </div>
       </div>
    )
}
export default Forecast;