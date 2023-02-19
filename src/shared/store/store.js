import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';
import sceneReducer from './sceneSlice';
import controlsReducer from './controlsSlice';
import { sessionStorageMiddleware } from './middleware';

const store = configureStore({
  reducer: {
    planet: planetReducer,
    scene: sceneReducer,
    controls: controlsReducer
  },
  // preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
