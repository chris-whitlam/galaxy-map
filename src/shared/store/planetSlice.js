/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const planetSlice = createSlice({
  name: 'planet',
  initialState: '',
  reducers: {
    planetSelected(state, action) {
      return action.payload;
    },
    planetUnSelected(state, action) {
      return '';
    }
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => '');
  }
});

export const { planetSelected, planetUnSelected } = planetSlice.actions;
export default planetSlice.reducer;
