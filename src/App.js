import './App.css'
import { TextureLoader } from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import { OrbitControls, Sphere,  PerspectiveCamera, Stars } from '@react-three/drei';

function Earth() {
  const base = useLoader(TextureLoader, "earth.jpg");
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.y += 0.001))

  return (
    <Sphere ref={ref}>
      <meshBasicMaterial map={base} />
    </Sphere>
  )
}

function Moon({ position, relativeScale = 0.27 }) {
  const base = useLoader(TextureLoader, "moon.jpg");

  return (
    <Sphere position={position} scale={[relativeScale, relativeScale, relativeScale]}>
      <meshBasicMaterial map={base} />
    </Sphere>
  )
}

function App() {
  return (
    <>
    <div>
      <h1>Solar System<br />Map</h1>
    </div>
    <Canvas dpr={[1.5, 2]} linear shadows>
      <fog attach="fog" args={['#272730', 16, 30]} />
      <ambientLight intensity={0.75} />
      <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
      </PerspectiveCamera>
      <Earth />
      <Moon position={[5,0,0]}/>
      <OrbitControls />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </Canvas>
    </>
  );
}

export default App;
