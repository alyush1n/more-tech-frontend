import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./features/auth";
import model from "./features/model";
import paths from "./features/paths";
import loading from "./features/loading";

const store = configureStore({
  reducer: combineReducers({ auth, model, paths, loading }),
});

export default store;
