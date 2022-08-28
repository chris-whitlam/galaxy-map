import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Provider, useSelector } from 'react-redux';
import { store } from '../store';

function BaseScene({ children }) {
  const { cameraPosition } = useSelector((state) => state.controls);

  return (
    <Canvas dpr={[1.5, 2]} linear shadows>
      <Provider store={store}>
        <ambientLight intensity={0.2} />
        <OrbitControls />
        <Stars radius={1000} depth={100} count={2000} factor={10} />
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={75}
          far={10000}
        />
        {children}
      </Provider>
    </Canvas>
  );
}

export default BaseScene;
