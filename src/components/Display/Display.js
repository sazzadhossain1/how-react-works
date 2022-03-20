import React from 'react';
import Dial from '../Dial/Dial';


const Display = (props) => {
    return (
        <div style={{border: '5px solid pink',magin: '5px',alignContent:'center'}}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;