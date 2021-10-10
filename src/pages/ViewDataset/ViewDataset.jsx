import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dataset from "../../components/dataset/Dataset";
import { Link } from "react-router-dom";
import ViewDatasetFields from "../../components/ViewDatasetFields/ViewDataset"

const ViewDataset = (props) => {
  const dataset = useSelector((state) => state.datasets);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ width: "300px" }}>
      <h3>{dataset.currentDataset.name}</h3>
      <ViewDatasetFields />
      <button onClick={() => setIsVisible(!isVisible)}>
        Отобразить/Скрыть JSON структуру
      </button>
      <p style={{ display: `${isVisible ? "block" : "none"}` }}>
        {dataset.currentDataset.structure} HELLOOOOO
      </p>
    </div>
  );
};

export default ViewDataset;
