import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';
import settingsReducer from './settingsSlice';
import sceneReducer from './sceneSlice';
import controlsReducer from './controlsSlice';

const store = configureStore({
  reducer: {
    planet: planetReducer,
    settings: settingsReducer,
    scene: sceneReducer,
    controls: controlsReducer
  }
});

export default store;
