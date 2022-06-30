import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {},
  },
  reducers: {
    load: (state, action) => {
      state.value = action.payload
      // console.log(state.value);
    },
    // search: (state) => {
    //  state.value {}
    // },
    // sort: (state) => {
    //  state.value {}
    // },
  },
})

export const { load } = moviesSlice.actions;

export default moviesSlice.reducer;
