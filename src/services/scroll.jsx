import { createSlice } from "@reduxjs/toolkit";

const threeSlice = createSlice({
  name: "Drag",
  initialState: {
    bgStat: false,
    auto: false,
  },
  reducers: {
    setBgStat: (state, action) => {
      state.bgStat = action.payload;
    },
    setAuto: (state, action) => {
      state.auto = action.payload;
    },
  },
});

export const { setBgStat, setAuto } = threeSlice.actions;

export default threeSlice.reducer;
