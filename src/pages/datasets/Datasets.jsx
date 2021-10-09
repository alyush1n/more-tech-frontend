import React from "react";
import "./datasets.css";
import Dataset from "../../components/dataset/Dataset";
import Button from "../../components/button/Button";
import Preloader from "../../components/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Datasets = () => {
  const paths = useSelector((state) => state.paths);
  const { browsePath } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="datasets">
        
      <Button buttonText="Создать датасет" />
      <h3>Пути</h3>
      {paths.groups.map((group) => (
        <Link
          to={
            browsePath
              ? "/datasets/" + browsePath + "." + group.name
              : "/datasets/" + group.name
          }
        >
          <Dataset id={group.name} name={group.name} />
        </Link>
      ))}
      {paths.entities.length > 0 ? (
        <>
          <h3>Сущности</h3>
          {paths.entities.map((entity) => (
            <Link to={"/datasets/view/" + entity.urn}>
              <Dataset
                id={entity?.urn}
                name={entity?.name}
                type={entity.type}
              />
            </Link>
          ))}
        </>
      ) : null}
      {/* <Dataset id={1} name="Пользователь" />
            <Dataset id={2} name="Сообщение" />
            <Dataset id={3} name="Статьи" /> */}
    </div>
  );
};

export default Datasets;
