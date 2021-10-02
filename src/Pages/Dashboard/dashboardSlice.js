import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
};

// dashboard store for Ticker & Order Book
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
