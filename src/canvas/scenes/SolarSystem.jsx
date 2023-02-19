import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Sun,
  Uranus,
  Venus,
  Orbit
} from '../objects';
import {
  planetSelected,
  planetUnSelected
} from '../../shared/store/planetSlice';
import { getPlanetaryData } from '../hooks/usePlanets';

function SolarSystem() {
  const dispatch = useDispatch();
  const { planetsScale = 1, speed = 1 } = useSelector(
    (state) => state.controls
  );

  const planetaryData = getPlanetaryData(100, planetsScale, speed * 0.0001);

  const handlePlanetClick = useCallback((planetName) => {
    dispatch(planetSelected(planetName));
  }, []);

  const handleSunClick = useCallback(() => {
    dispatch(planetUnSelected());
  }, []);

  return (
    <>
      <Sun relativeScale={planetaryData.sun.scale} onClick={handleSunClick} />
      <Orbit
        position={planetaryData.mercury.position}
        rotationSpeed={planetaryData.mercury.rotationSpeed}
      >
        <Mercury
          relativeScale={planetaryData.mercury.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.venus.position}
        rotationSpeed={planetaryData.venus.rotationSpeed}
      >
        <Venus
          relativeScale={planetaryData.venus.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.earth.position}
        rotationSpeed={planetaryData.earth.rotationSpeed}
      >
        <Earth
          relativeScale={planetaryData.earth.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.mars.position}
        rotationSpeed={planetaryData.mars.rotationSpeed}
      >
        <Mars
          relativeScale={planetaryData.mars.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.jupiter.position}
        rotationSpeed={planetaryData.jupiter.rotationSpeed}
      >
        <Jupiter
          relativeScale={planetaryData.jupiter.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.saturn.position}
        rotationSpeed={planetaryData.saturn.rotationSpeed}
      >
        <Saturn
          relativeScale={planetaryData.saturn.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.uranus.position}
        rotationSpeed={planetaryData.uranus.rotationSpeed}
      >
        <Uranus
          relativeScale={planetaryData.uranus.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit
        position={planetaryData.neptune.position}
        rotationSpeed={planetaryData.neptune.rotationSpeed}
      >
        <Neptune
          relativeScale={planetaryData.neptune.scale}
          onClick={handlePlanetClick}
        />
      </Orbit>
    </>
  );
}

export default SolarSystem;
