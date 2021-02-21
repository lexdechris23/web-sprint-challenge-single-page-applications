import React from "react";
import { Link } from "react-router-dom";

const Confirmation = (props) => {
    return (
        <div>
            <h2>We have received your order!</h2>
            {Object.keys(props.order).map(property => {
                 return <p>{property}: {props.order[property]}</p>
                })}
            <h3>Please allow 30 minutes for delivery</h3>
            
            </div>
        );
    };
    export default Confirmation