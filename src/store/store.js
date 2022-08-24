import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';

const store = configureStore({
  reducer: {
    planet: planetReducer
  }
});

export default store;
