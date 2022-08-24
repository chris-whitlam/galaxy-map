import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Earth, Moon } from '../objects';
import { planetSelected } from '../store/planetSlice';
import planetaryData from '../data/planetaryData';

function SolarSystem() {
  const dispatch = useDispatch();

  const handleClick = useCallback((planetName) => {
    const planetData = planetaryData[planetName];
    dispatch(planetSelected(planetData));
  }, []);

  return (
    <Canvas dpr={[1.5, 2]} linear shadows>
      <fog attach="fog" args={['#272730', 16, 30]} />
      <ambientLight intensity={0.75} />
      <OrbitControls />
      <Stars radius={500} depth={50} count={1000} factor={10} />
      <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[-25, 20, -15]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
      </PerspectiveCamera>
      <Earth onClick={handleClick} />
      <Moon position={[5, 0, 0]} onClick={handleClick} />
    </Canvas>
  );
}

export default SolarSystem;
