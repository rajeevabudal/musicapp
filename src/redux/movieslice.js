import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchvalue: "",
};

export const movieSlice = createSlice({
  name: "movieappslice",
  initialState,
  reducers: {
    searchSong: (state, action) => {
      state.searchvalue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchSong } = movieSlice.actions;

export default movieSlice.reducer;
