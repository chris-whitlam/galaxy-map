/* eslint-disable no-undef */
const LOCAL_STORAGE_STATE_KEY = 'ssm/solarSystemApplicationState';

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(getState()));
    return result;
  };
};

// eslint-disable-next-line consistent-return
export const reHydrateStore = () => {
  if (localStorage.getItem(LOCAL_STORAGE_STATE_KEY) !== null) {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_STATE_KEY)); // re-hydrate the store
  }
};
