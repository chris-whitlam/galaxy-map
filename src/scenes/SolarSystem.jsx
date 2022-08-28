import { useCallback, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Moon,
  Neptune,
  Pluto,
  Saturn,
  Sun,
  Uranus,
  Venus,
  Orbit
} from '../objects';
import { planetSelected, planetUnSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';
import { setCameraPosition } from '../store/controlsSlice';

const positions = {
  sun: [0, 0, 0],
  mercury: [5, 0, 0],
  venus: [10, 0, 0],
  earth: [15, 0, 0],
  mars: [20, 0, 0],
  jupiter: [25, 0, 0],
  saturn: [30, 0, 0],
  uranus: [35, 0, 0],
  neptune: [40, 0, 0],
  pluto: [45, 0, 0]
};

function SolarSystem() {
  const dispatch = useDispatch();
  const sunRef = useRef();
  const earthRef = useRef();

  const { isPaused } = useSelector((state) => state.controls);

  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    if (planetName === 'earth') {
      dispatch(setCameraPosition(earthRef.current.position));
    }

    dispatch(planetSelected(planetData));
  }, []);

  const handleSunClick = useCallback(() => {
    dispatch(planetUnSelected());
  }, []);

  useFrame(() => {
    if (isPaused || !earthRef.current) {
      return;
    }

    earthRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <Sun ref={sunRef} onClick={handleSunClick} />
      <Orbit parentPosition={positions.sun}>
        <Mercury
          position={positions.mercury}
          relativeScale={0.2}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Venus
          position={positions.venus}
          relativeScale={0.2}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <>
          <Earth
            ref={earthRef}
            position={positions.earth}
            onClick={handlePlanetClick}
          />
          <Orbit parentPosition={positions.earth} speed={0.01}>
            <Moon position={[2, 0, 0]} onClick={handlePlanetClick} />
          </Orbit>
        </>
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Mars
          position={positions.mars}
          relativeScale={0.2}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Jupiter
          position={positions.jupiter}
          relativeScale={2}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Saturn
          position={positions.saturn}
          relativeScale={1.5}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Uranus
          position={positions.uranus}
          relativeScale={0.5}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Neptune
          position={positions.neptune}
          relativeScale={0.5}
          onClick={handlePlanetClick}
        />
      </Orbit>

      <Orbit parentPosition={positions.sun}>
        <Pluto
          position={positions.pluto}
          relativeScale={0.5}
          onClick={handlePlanetClick}
        />
      </Orbit>
    </>
  );
}

export default SolarSystem;
