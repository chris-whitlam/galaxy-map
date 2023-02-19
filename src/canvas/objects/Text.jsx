import { useFrame, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useRef } from 'react';

import inter from '../assets/Inter_Regular.json';

function Text({ children, position, size = 10, color = 'white', onClick }) {
  const ref = useRef(null);
  const cameraPosition = useThree(({ camera }) => camera.position);
  const font = new FontLoader().parse(inter);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    ref.current.geometry.center();
    ref.current.lookAt(cameraPosition);
  });

  return (
    <mesh ref={ref} position={position} visible onClick={onClick}>
      <textGeometry
        attach="geometry"
        args={[children, { font, height: 0.1, size }]}
      />
      <meshPhysicalMaterial transmission={10000} color={color} />
    </mesh>
  );
}

export default Text;
