import React from "react";
import "./dataset.css";
import { Link, useParams } from "react-router-dom";

const Dataset = (props) => {
  const { browsePath } = useParams();
  console.log(browsePath);
  return (
    <div className="dataset">
      <div className="datasetWrapper">
        {/* <Link
          to={
            props.type == "DATASET"
              ? "/datasets/view/" + props.id
              : browsePath
              ? "/datasets/" + browsePath + "." + props.id
              : "/datasets/" + props.id
          }
          className="link"
        > */}
          {props.name}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Dataset;
