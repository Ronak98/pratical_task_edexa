import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggingIn: false,
  isError: null,
  loading: false,
  user: [],
};

// login
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.isError = null;
      state.loading = false;
    },
    loadingOn: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loggingIn = true;
      state.isError = null;
      state.loading = false;
    },
    loginError: (state, action) => {
      state.loggingIn = false;
      state.isError = "Invalid email or password";
      state.loading = false;
    },
    registerSuccess: (state, action) => {
      state.user.push(action.payload);
      state.isError = null;
      state.loading = false;
    },
    registerError: (state, action) => {
      state.isError = "email already exists";
      state.loading = false;
    },
  },
});

export const {
  loadingOn,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  clearState,
} = loginSlice.actions;
export const loginState = (state) => state.login;

export default loginSlice.reducer;
