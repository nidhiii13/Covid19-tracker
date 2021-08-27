import React from 'react'
import { Card } from '@material-ui/core';
import "./template.css";
const Template = (props) => {
    
    return (
        <>
        <div className="card">
        <div className="card-ind">
            
                <h3 className="chead">{props.heading}</h3>
                <h3>{props.value}</h3>
            
            </div>
            </div>
        </>
    )
}

export default Template;
