import React from "react";
import {useSelector} from "react-redux";
import Dataset from "../../components/dataset/Dataset";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

const ViewDatasets = (props) => {
    const datasets = useSelector((state) => state.datasets);
    return (
        <div className="viewDataset">
            <Button buttonText="Создать датасет"/>
            {datasets?.datasets?.map((dataset) => (
                <Link to={"/datasets/" + dataset.id}>
                    <Dataset id={dataset.name} name={dataset.name} key={dataset.id}/>
                </Link>
            ))}
        </div>
    );
};

export default ViewDatasets;
