import React from 'react';
import Card from '../Card/Card'

const carddisplay = (props) => {
    

    return (
        <div>
            <div>
                {/* <h3 className="display-5 text-muted">{props.responseObj.name}</h3> */}
                <p>
                    {props.cardShow}
                </p> 
            </div>

        </div>
    )
}

export default carddisplay;