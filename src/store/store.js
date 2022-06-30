import { configureStore } from '@reduxjs/toolkit'
import  movieReducer  from "./moviesSlice";

const Store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default Store;
