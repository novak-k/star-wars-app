import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movie',
  initialState: {
    initial: {},
    data: {},
    selected: null,
  },
  reducers: {
    load: (state, action) => {
      state.initial = action.payload
      state.data = state.initial
    },
    movieSelected: (state, action) => {
      for(let ch of state.data.results){
        if(ch.episode_id === action.payload){
          state.selected = ch
          break
        }
      }
    },
    search: (state, action) => {
      state.data.results = state.initial.results.filter(r => r.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
    sortEpisode: (state) => {
      state.data.results = state.data.results.sort((r1,r2) => r1.episode_id-r2.episode_id)
    },
    sortYear: (state) => {
      state.data.results = state.data.results.sort((r1,r2) => new Date(r1.release_date) - new Date(r2.release_date));
    },
  }
})

export const { load, movieSelected, search, sortEpisode, sortYear } = moviesSlice.actions;

export default moviesSlice.reducer;
