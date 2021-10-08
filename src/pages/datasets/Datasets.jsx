import React from 'react';
import './datasets.css'
import Dataset from "../../components/dataset/Dataset";

const Datasets = () => {
    return (
        <div className="datasets">
            <Dataset id={1}/>
            <Dataset id={2}/>
            <Dataset id={3}/>
        </div>
    );
};

export default Datasets;