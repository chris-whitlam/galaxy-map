/* eslint-disable no-undef */
const SESSION_STORAGE_STATE_KEY = 'ssm/solarSystemApplicationState';

export const sessionStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    sessionStorage.setItem(
      SESSION_STORAGE_STATE_KEY,
      JSON.stringify(getState())
    );
    return result;
  };
};

// eslint-disable-next-line consistent-return
export const reHydrateStore = () => {
  if (sessionStorage.getItem(SESSION_STORAGE_STATE_KEY) !== null) {
    return JSON.parse(localStorage.getItem(SESSION_STORAGE_STATE_KEY)); // re-hydrate the store
  }
};
