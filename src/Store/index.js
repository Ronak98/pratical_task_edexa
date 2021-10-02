import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../Pages/Dashboard/dashboardSlice";
import loginReducer from "../Pages/Login/loginSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    login: loginReducer,
  },
});
