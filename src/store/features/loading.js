import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loaded: (state) => {
      state.loading = false;
    },
  },
});

export const { loading, loaded } = loadingSlice.actions;
export default loadingSlice.reducer;
