import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import ViewDatasetFields from "../../components/ViewDatasetFields/ViewDataset"
import './viewDataset.css';
import {getDataset} from "../../store/features/datasetsThunk"

const ViewDataset = (props) => {
    const dataset = useSelector((state) => state.datasets);
    const {datasetID} = useParams()
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
        dispatch(getDataset(datasetID))
    },[])
    return (
        <div className="viewDataset">
            <h3>{dataset?.currentDataset?.name}</h3>
            <ViewDatasetFields/>
            <button style={{padding:"10px 5px", width:"300px"}} className="button" onClick={() => setIsVisible(!isVisible)}>
                Отобразить/Скрыть JSON структуру
            </button>
            <p style={{display: `${isVisible ? "block" : "none"}`}}>
                {dataset?.currentDataset?.name}
                <br/>
                <br/>
                {"{"}
                {console.log(dataset?.currentDataset?.struct?.fields)}
                {dataset?.currentDataset?.struct?.fields?.map(i => (
                    <p>{i.name}: {i.type},</p>))}
                {"}"}
            </p>
        </div>
    );
};

export default ViewDataset;
