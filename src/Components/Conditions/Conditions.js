import React from 'react';
import classes from './Conditions.module.css';
import Card from '../Card/Card'
var moment = require('moment');

const conditions = (props) => {
    
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
            {props.loading && <div className={classes.Loader}/>}
            {props.responseObj.cod === 200 ?
            <div>
                <br/>
               <h3 className="display-5 text-muted">
                    {props.responseObj.name}
                </h3>
                <p>
                    It is currently <strong> {props.time} </strong>  in <strong> {props.responseObj.name} </strong> and <strong> {Math.round(props.responseObj.main.temp)}° C </strong> out with <strong> {props.responseObj.weather[0].description} </strong>. 
                </p> 
            </div>
            : null   
            }

        </div>
    )
}

export default conditions;