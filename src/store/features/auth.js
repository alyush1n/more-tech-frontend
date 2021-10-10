import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user:{
    firstName:"",
    lastName:"",
    email:""
  },
  tokens:{}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload?.user
      state.tokens = action.payload?.tokens
    },
    logout: (state) => {
      state.isAuth = false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  login,
  logout,
  // incrementByAmount
} = authSlice.actions;
export default authSlice.reducer;
