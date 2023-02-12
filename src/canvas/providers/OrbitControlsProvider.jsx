/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState, useMemo } from 'react';

export const OrbitControlsContext = React.createContext();

export function OrbitControlsProvider({ children }) {
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);

  const value = useMemo(
    () => ({
      targetPosition,
      setTargetPosition
    }),
    [targetPosition]
  );

  return (
    <OrbitControlsContext.Provider value={value}>
      {children}
    </OrbitControlsContext.Provider>
  );
}

export function useOrbitControls() {
  return useContext(OrbitControlsContext);
}
