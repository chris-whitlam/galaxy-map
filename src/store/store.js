import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';
import settingsReducer from './settingsSlice';
import sceneReducer from './sceneSlice';

const store = configureStore({
  reducer: {
    planet: planetReducer,
    settings: settingsReducer,
    scene: sceneReducer
  }
});

export default store;
