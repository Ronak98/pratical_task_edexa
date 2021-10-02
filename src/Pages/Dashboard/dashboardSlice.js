import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  currentObj: null,
  tableList: [],
};

// dashboard store for Ticker & Order Book
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.loading = false;
    },
    loadingOn: (state, action) => {
      state.loading = true;
    },
    setCurrentObj: (state, action) => {
      let list = state.tableList.find((item) => item.id === action.payload);
      state.currentObj = list;
    },
    clearCurrentObj: (state, action) => {
      state.currentObj = null;
    },
    addData: (state, action) => {
      state.tableList.push(action.payload);
      state.loading = false;
    },
    editData: (state, action) => {
      let list = state.tableList.filter(
        (item) => item.id !== action.payload.id
      );
      list.unshift(action.payload);
      state.tableList = list;
      state.loading = false;
      state.currentObj = null;
    },
    deleteData: (state, action) => {
      let list = state.tableList.filter((item) => item.id !== action.payload);
      state.tableList = list;
      state.loading = false;
    },
  },
});

export const {
  loadingOn,
  addData,
  clearState,
  deleteData,
  clearCurrentObj,
  setCurrentObj,
  editData,
} = dashboardSlice.actions;
export const dashboardState = (state) => state.dashboard;

export default dashboardSlice.reducer;
