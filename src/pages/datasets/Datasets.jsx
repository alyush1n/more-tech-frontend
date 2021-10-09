import React from 'react';
import './datasets.css'
import Dataset from "../../components/dataset/Dataset";
import Button from "../../components/button/Button";

const Datasets = () => {
    return (
        <div className="datasets">
            <Button buttonText="Создать датасет"/>
            <Dataset id={1}/>
            <Dataset id={2}/>
            <Dataset id={3}/>
        </div>
    );
};

export default Datasets;