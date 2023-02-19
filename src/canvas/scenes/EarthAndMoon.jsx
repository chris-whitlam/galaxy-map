import { useCallback } from 'react';
import { Euler, MathUtils } from 'three';
import { useSelector, useDispatch } from 'react-redux';
import { Earth, Orbit, Moon } from '../objects';
import { planetSelected } from '../../shared/store/planetSlice';
import { RELATIVE_SCALE, MOON_TO_EARTH_DISTANCE } from '../data/constants';

const textStyle = {
  size: 3,
  height: 4
};

function EarthAndMoonScene() {
  const dispatch = useDispatch();

  const { planetsScale = 1, speed = 1 } = useSelector(
    (state) => state.controls
  );

  const handlePlanetClick = useCallback((planetName) => {
    dispatch(planetSelected(planetName));
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
      <Earth
        relativeScale={1 * planetsScale * 0.01}
        onClick={handlePlanetClick}
        rotationSpeed={speed * 0.48}
        textStyle={textStyle}
      />
      <Orbit
        position={[MOON_TO_EARTH_DISTANCE / RELATIVE_SCALE, 0, 0]}
        orientation={new Euler(MathUtils.degToRad(5), 0, 0)}
        rotationSpeed={speed * 0.00001}
      >
        <Moon
          relativeScale={0.25 * planetsScale * 0.01}
          onClick={handlePlanetClick}
          textStyle={textStyle}
        />
      </Orbit>
    </>
  );
}

export default EarthAndMoonScene;
