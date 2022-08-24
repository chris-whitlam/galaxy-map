import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';

function BaseScene({ children }) {
  return (
    <Canvas dpr={[1.5, 2]} linear shadows>
      <ambientLight intensity={0.75} />
      <OrbitControls />
      <Stars radius={1000} depth={100} count={2000} factor={10} />
      <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75} far={10000}>
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
      {children}
    </Canvas>
  );
}

export default BaseScene;
