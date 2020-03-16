import React from 'react';
import classes from './Conditions.module.css';
import Card from '../Card/Card'

// import * as weatherIcons from '../icons';

const conditions = (props) => {
    

        
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
            {props.loading && <div className={classes.Loader}/>}
            {props.responseObj.cod === 200 ?
            <div>
                <p><strong>
                    {props.responseObj.name}
                </strong></p>
                <p>
                It is currently {Math.round(props.responseObj.main.temp)}° C out with {props.responseObj.weather[0].description}.    
                </p> 
            </div>
            : null   
            }
            <div>
            {/* <Card day={day} key={index}/> */}
            </div>
        </div>
    )
}

export default conditions;