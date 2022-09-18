/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: false,
  showOrbitLines: true,
  planetsScale: 100,
  speed: 5
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
    toggleOrbitLines(state) {
      return {
        ...state,
        showOrbitLines: !state.showOrbitLines
      };
    },
    setPlanetsScale(state, action) {
      return {
        ...state,
        planetsScale: action.payload
      };
    },
    setSpeed(state, action) {
      return {
        ...state,
        speed: action.payload
      };
    }
  }
});

export const { togglePause, toggleOrbitLines, setPlanetsScale, setSpeed } =
  controlsSlice.actions;
export default controlsSlice.reducer;
