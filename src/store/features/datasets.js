import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  datasets: [
    {
      id: 1,
      name: "Test-1",
    },
    {
      id: 2,
      name: "Test-2",
    },
  ],
  currentDataset: {
    // name:"Test-1",
    // fields:[
    //   {
    //     name:"user_id",
    //     type:"integer",
    //     rule: {
    //       "description":"asd",
    //       "operation":"SUM",
    //       "fields":["a","b"]
    //     }
    //   }
    // ]
  },
};

export const modelSlice = createSlice({
  name: "datasets",
  initialState,
  reducers: {
    addDatasets: (state, action) => {
      state.datasets = action?.payload;
    },
    addDataset: (state, action) => {
      state.currentDataset = action?.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addDatasets, addDataset } = modelSlice.actions;
export default modelSlice.reducer;
