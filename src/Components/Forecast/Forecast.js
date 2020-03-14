import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from "./Forecast.module.css";

const Forecast = () => {
    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    function getForecast(e) {
        
        e.preventDefault();
        
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
                console.log(response);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
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
           <Conditions 
           responseObj={responseObj}
           error={error}
           loading={loading}
           />
       </div>
    )
}
export default Forecast;