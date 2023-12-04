import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../src/redux/movieslice";
export const store = configureStore({
  reducer: {
    movieapp: movieReducer,
  },
})