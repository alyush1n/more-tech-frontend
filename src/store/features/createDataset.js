import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  structure: {
    fields: [],
  },
};

export const modelSlice = createSlice({
  name: "datasets",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action?.payload;
    },
    addField: (state, action) => {
      state.structure.fields.push(action.payload);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addDatasets, addDataset } = modelSlice.actions;
export default modelSlice.reducer;
