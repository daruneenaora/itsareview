import React from 'react';
import './review.css';

function Review (props){
    let country = props.country;
    let cap = props.cap;
    let animal = props.animal;
    return(
        <div className = 'box2'>
            <h1>{country}</h1>
            <h2>{cap}</h2>
            <h2>{animal}</h2>
        </div>
    )
}
export default Review;
