import { useCallback, useRef } from 'react';
import { Euler, MathUtils } from 'three';
import { Earth, Orbit, Moon } from '../objects';
import { planetSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';
import { RELATIVE_SCALE, MOON_TO_EARTH_DISTANCE } from '../data/constants';
import { useUpdate } from '../hooks';

function EarthAndMoonScene({ dispatch }) {
  const earthRef = useRef();
  const moonRef = useRef();

  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  return (
    <>
      <pointLight
        color="white"
        intensity={2}
        distance={500}
        castShadow
        position={[200, 0, 0]}
      />
      <Earth ref={earthRef} relativeScale={1} onClick={handlePlanetClick} />
      <Orbit
        position={[MOON_TO_EARTH_DISTANCE / RELATIVE_SCALE, 0, 0]}
        orientation={new Euler(MathUtils.degToRad(5), 0, 0)}
      >
        <Moon ref={moonRef} onClick={handlePlanetClick} />
      </Orbit>
    </>
  );
}

export default EarthAndMoonScene;
