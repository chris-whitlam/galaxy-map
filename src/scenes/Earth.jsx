import { useCallback } from 'react';
import { Earth } from '../objects';
import { planetSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';

function EarthScene({ dispatch }) {
  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  return <Earth onClick={handlePlanetClick} />;
}

export default EarthScene;
