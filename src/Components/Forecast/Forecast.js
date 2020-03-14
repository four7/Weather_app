import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from "./Forecast.module.css";

const Forecast = () => {
    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [unit, setUnit] = useState('metric');
    function getForecast(e) {
        e.preventDefault();
        let API_KEY = "dfad1c91a96fdbb335fa11dea72f9afe"
        const uriEncodedCity = encodeURIComponent(city);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
                console.log(response);
            })
    }
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
               <input
               type="text"
               placeholder="Enter city"
               maxLength="50"
               className={classes.textInput}
               value={city}
               onChange={(e) => setCity(e.target.value)}
                />
                
           <button className={classes.Button} type="submit">Get Forecast</button>
           </form>
           <Conditions responseObj={responseObj} />
       </div>
    )
}
export default Forecast;