import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import auth from "./features/auth";
import model from "./features/model";
import paths from "./features/paths";
import loading from "./features/loading";
import datasets from "./features/datasets";

const store = configureStore({
  reducer: combineReducers({ auth, model, paths, loading, datasets }),
  middlewares: applyMiddleware(thunkMiddleware),
});

export default store;
