/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: false
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    togglePause(state) {
      console.log('Toggling Pause...', !state.isPaused);

      return {
        ...state,
        isPaused: !state.isPaused
      };
    }
  }
});

export const { togglePause } = controlsSlice.actions;
export default controlsSlice.reducer;
