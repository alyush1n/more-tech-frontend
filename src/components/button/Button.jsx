import React from 'react';
import {Link} from "react-router-dom";
import './button.css'

const Button = (props) => {
    return (
        <div className="button">
            <Link to="/dataset/create">
                {props.buttonText}
            </Link>
        </div>
    );
};

export default Button;