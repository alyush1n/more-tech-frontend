import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  fields: [
    {
      fieldPath: "",
      type: "",
    },
  ],
};

export const authSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    addModel: (state, action) => {
      state.name = action.payload?.name;
      state.fields = action.payload?.fields;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  addModel,
  // incrementByAmount
} = authSlice.actions;
export default authSlice.reducer;
