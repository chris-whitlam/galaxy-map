/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: false,
  cameraPosition: [16, 0, 0]
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    togglePause(state) {
      return {
        ...state,
        isPaused: !state.isPaused
      };
    },
    setCameraPosition(state, action) {
      return {
        ...state,
        cameraPosition: action.payload
      };
    }
  }
});

export const { togglePause, setCameraPosition } = controlsSlice.actions;
export default controlsSlice.reducer;
