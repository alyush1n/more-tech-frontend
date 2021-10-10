import React, {useState} from "react";
import {useSelector} from "react-redux";
import ViewDatasetFields from "../../components/ViewDatasetFields/ViewDataset"
import './viewDataset.css';

const ViewDataset = (props) => {
    const dataset = useSelector((state) => state.datasets);
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="viewDataset">
            <h3>{dataset.currentDataset.name}</h3>
            <ViewDatasetFields/>
            <button className="button" onClick={() => setIsVisible(!isVisible)}>
                Отобразить/Скрыть JSON структуру
            </button>
            <p style={{display: `${isVisible ? "block" : "none"}`}}>
                {dataset.currentDataset.name}
                <br/>
                <br/>
                {"{"}
                {dataset.currentDataset.fields.map(i => (

                    <p>{i.name}: {i.type},</p>))}
                {"}"}
            </p>
        </div>
    );
};

export default ViewDataset;
