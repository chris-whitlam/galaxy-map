/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import scenes from '../data/scenes';

const sceneSlice = createSlice({
  name: 'scene',
  initialState: scenes.solarSystem,
  reducers: {
    changeScene(state, action) {
      return scenes[action.payload];
    }
  }
});

export const { changeScene } = sceneSlice.actions;
export default sceneSlice.reducer;
