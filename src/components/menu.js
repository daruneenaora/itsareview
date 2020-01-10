import React from 'react';
import './menu.css';

function menu(props) {
    let title = props.title;
    let img = props.img;
    return(
        <div className = 'box'>
            <img src={img} width="300" height="250" alt="view"></img>
            <h1>{title}</h1>
        </div>
    )
}

export default menu;