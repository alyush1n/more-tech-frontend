import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: [],
  groups: [
    { name: "dev", counts: 1 },
    { name: "prod", counts: 2 },
  ],
  entities: [{ name: "Пользователь", urn: "test", type:"DATASET" }],
};

export const pathsSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    addPath: (state, action) => {
      state.path = action.payload;
    },
    addGroups: (state, action) => {
      state.groups = action.payload;
    },
    addEntities: (state, action) => {
      state.entities = action.payload;
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
