import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  fields: [
    // {
    //   fieldPath: "",
    //   type: "",
    // },
  ],
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    addModel: (state, action) => {
      console.log(action.payload)
      state.name = action.payload?.name;
      state.fields = action.payload?.schemaMetadata?.fields;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  addModel,
  // incrementByAmount
} = modelSlice.actions;
export default modelSlice.reducer;
