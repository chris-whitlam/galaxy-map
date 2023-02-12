/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  MAX_PLANET_SCALE,
  PLANET_SCALE_INCREMENT,
  MIN_PLANET_SCALE,
  MAX_SPEED,
  MIN_SPEED,
  SPEED_INCREMENT
} from '../../ui/constants';

const initialState = {
  isPaused: false,
  showOrbitLines: true,
  showInterface: true,
  showLabels: true,
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
    toggleInterface(state) {
      return {
        ...state,
        showInterface: !state.showInterface
      };
    },
    toggleLabels(state) {
      return {
        ...state,
        showLabels: !state.showLabels
      };
    },
    setPlanetsScale(state, action) {
      return {
        ...state,
        planetsScale: action.payload
      };
    },
    incrementPlanetScale(state) {
      if (state.planetsScale + PLANET_SCALE_INCREMENT > MAX_PLANET_SCALE) {
        return {
          ...state,
          planetsScale: MAX_PLANET_SCALE
        };
      }

      return {
        ...state,
        planetsScale: state.planetsScale + PLANET_SCALE_INCREMENT
      };
    },
    decrementPlanetScale(state) {
      if (state.planetsScale - PLANET_SCALE_INCREMENT < MIN_PLANET_SCALE) {
        return {
          ...state,
          planetsScale: MIN_PLANET_SCALE
        };
      }

      return {
        ...state,
        planetsScale: state.planetsScale - PLANET_SCALE_INCREMENT
      };
    },
    setSpeed(state, action) {
      return {
        ...state,
        speed: action.payload
      };
    },
    incrementSpeed(state) {
      if (state.speed + SPEED_INCREMENT > MAX_SPEED) {
        return {
          ...state,
          speed: MAX_SPEED
        };
      }

      return {
        ...state,
        speed: state.speed + SPEED_INCREMENT
      };
    },
    decrementSpeed(state) {
      if (state.speed - SPEED_INCREMENT < MIN_SPEED) {
        return {
          ...state,
          speed: MIN_SPEED
        };
      }

      return {
        ...state,
        speed: state.speed - SPEED_INCREMENT
      };
    },
    reset() {
      return initialState;
    }
  }
});

export const {
  togglePause,
  toggleOrbitLines,
  toggleInterface,
  toggleLabels,
  setPlanetsScale,
  incrementPlanetScale,
  decrementPlanetScale,
  setSpeed,
  incrementSpeed,
  decrementSpeed,
  reset
} = controlsSlice.actions;
export default controlsSlice.reducer;
