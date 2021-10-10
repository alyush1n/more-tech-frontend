import React, { useEffect } from "react";
import "./datasets.css";
import Dataset from "../../components/dataset/Dataset";
import Button from "../../components/button/Button";
import Preloader from "../../components/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPaths } from "../../store/features/pathMiddlewares";

const Datasets = () => {
  const paths = useSelector((state) => state.paths);
  let { browsePath } = useParams();
  const dispatch = useDispatch();
  const getDatasetLink = (browsePath, name) => {
    const val = browsePath
      ? "/models/" + browsePath + "." + name
      : "/models/" + name;
    return val;
  };
  useEffect(() => {
    browsePath = browsePath ? browsePath : "";
    dispatch(getPaths(browsePath, ""));
  }, [browsePath]);
  return (
    <div className="datasets">
      <Button buttonText="Создать датасет" />
      {paths?.groups?.length ? <h3>Пути</h3> : null}
      {paths?.groups?.map((group) => (
        <Link
          to={getDatasetLink(browsePath, group.name)}
          //   onClick={() => {
          //       dispatch(getPaths(browsePath, group.name))
          //   }}
        >
          <Dataset id={group.name} name={group.name} key={group.name} />
        </Link>
      ))}
      {paths?.entities?.length > 0 ? (
        <>
          <h3>Сущности</h3>
          {paths.entities.map((entity) => (
            <Link to={"/models/view/" + entity.urn}>
              <Dataset
                id={entity?.urn}
                name={entity?.name}
                type={entity.type}
                key={entity?.urn}
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
