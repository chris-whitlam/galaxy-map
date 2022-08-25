import { useCallback, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { Earth, Mercury, Moon, Sun, Venus } from '../objects';
import { planetSelected, planetUnSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';

function Orbit({ speed = 0.0005, parentPosition, children }) {
  const ref = useRef();
  const { isPaused } = useSelector((state) => state.controls);

  useFrame(() => {
    if (isPaused) {
      return;
    }
    ref.current.rotation.y += speed;
  });

  return (
    <Box ref={ref} position={parentPosition} scale={1}>
      {children}
    </Box>
  );
}

function SolarSystem() {
  const dispatch = useDispatch();
  const { isPaused } = useSelector((state) => state.controls);

  const handlePlanetClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  const handleSunClick = useCallback(() => {
    dispatch(planetUnSelected());
  }, []);

  const sunRef = useRef();
  const earthRef = useRef();

  useFrame(() => {
    if (isPaused) {
      return;
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  const positions = {
    sun: [0, 0, 0],
    mercury: [5, 0, 0],
    venus: [10, 0, 0],
    earth: [15, 0, 0]
  };

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
    </>
  );
}

export default SolarSystem;
