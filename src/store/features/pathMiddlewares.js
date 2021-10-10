import { loaded, loading } from "./loading";
import { addEntities, addGroups, addPath, pathsSlice } from "./paths";
import { getPathsAndEntities, getEntity as getEntityAxios} from "../../axios";
import { addModel } from "./model";

export const getPaths = (paths) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      dispatch(addPath(paths));
      const pathsAndEntitites = await getPathsAndEntities(paths);
      console.log(pathsAndEntitites?.entities)
    //   console.log(pathsAndEntitites?.groups)
      dispatch(addEntities(pathsAndEntitites?.entities));
      dispatch(addGroups(pathsAndEntitites?.groups));
    } catch (e) {
      console.log(e);
    }
    dispatch(loaded());
  };
};

export const getEntity = (urn) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const entity = await getEntityAxios(urn);
      console.log(entity)
      dispatch(addModel(entity?.dataset));
    } catch (e) {
      console.log(e);
    }
    dispatch(loaded());
  };
};
