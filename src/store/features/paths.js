import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: [],
  groups: [
    // { name: "dev", counts: 1 },
    // { name: "prod", counts: 2 },
  ],
  entities: [
    // { name: "Пользователь", urn: "test", type:"DATASET" }
  ],
};

export const pathsSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    addPath: (state, action) => {
      state.path = action.payload?.split(".");
    },
    addGroups: (state, action) => {
      state.groups = action.payload;
    },
    addEntities: (state, action) => {
      state.entities = action.payload;
      state?.entities?.forEach((entity) => {
        const nameArr = entity?.urn?.split(",");
        entity.name = nameArr.length > 1 ? nameArr[1] : "";
      });
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  addPath,
  addGroups,
  addEntities,
  // incrementByAmount
} = pathsSlice.actions;
export default pathsSlice.reducer;
