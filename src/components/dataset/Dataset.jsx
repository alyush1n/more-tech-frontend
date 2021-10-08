import React from 'react';
import './dataset.css'
import {Link} from "react-router-dom";

const Dataset = (props) => {
    return (
        <div className="dataset">
            <div className="datasetWrapper">
                <Link to={'/datasets/' + props.id} className="link">
                    Dataset with id
                </Link>
            </div>
        </div>
    )
        ;
};

export default Dataset;