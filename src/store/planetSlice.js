/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const planetSlice = createSlice({
  name: 'planet',
  initialState: {},
  reducers: {
    planetSelected(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    planetUnSelected(state, action) {
      return {};
    }
  }
});

export const { planetSelected, planetUnSelected } = planetSlice.actions;
export default planetSlice.reducer;
