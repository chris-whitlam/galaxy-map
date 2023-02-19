import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';
import sceneReducer from './sceneSlice';
import controlsReducer from './controlsSlice';

const store = configureStore({
  reducer: {
    planet: planetReducer,
    scene: sceneReducer,
    controls: controlsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
