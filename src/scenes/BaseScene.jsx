import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { store } from '../store';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

function CameraUpdater({ camera: { position = [200, 0, 0] } = {} }) {
  const cameraPosition = useThree(({ camera }) => camera.position);

  useEffect(() => {
    cameraPosition.set(...position);
  }, [position, cameraPosition]);
}

function BaseScene({ children, camera }) {
  return (
    <Canvas dpr={[1.5, 2]} linear shadows>
      <CameraUpdater camera={camera} />
      <Provider store={store}>
        <ambientLight intensity={0.2} />
        <OrbitControls makeDefault maxPolarAngle={deg2rad(80)} />
        <Stars radius={2000} depth={100} count={2000} factor={10} />
        <PerspectiveCamera
          makeDefault
          position={[200, 0, 0]}
          rotation={[0, 0, 0]}
          fov={75}
          far={10000}
        />
        {children}
      </Provider>
    </Canvas>
  );
}

export default BaseScene;
