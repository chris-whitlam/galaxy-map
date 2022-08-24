/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const defaultSettings = {
  showOrbits: false,
  hideInterface: false
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: defaultSettings,
  reducers: {
    toggleSetting(state, action) {
      const settingName = action.payload;

      return {
        ...state,
        [settingName]: !state[settingName]
      };
    },
    reset() {
      return defaultSettings;
    }
  }
});

export const { toggleSetting, reset } = settingsSlice.actions;
export default settingsSlice.reducer;
