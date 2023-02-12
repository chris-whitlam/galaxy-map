import { extend, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useRef } from 'react';
import inter from '../assets/Inter_Regular.json';
import { useUpdate } from '../hooks';

extend({ TextGeometry });

function Text({ children, position, size = 10, color = 'white' }) {
  const ref = useRef();
  const cameraQuaternion = useThree(({ camera }) => camera.position);
  const cameraDetails = useThree(({ camera }) => camera);
  const font = new FontLoader().parse(inter);

  useUpdate(() => {
    if (!ref.current) {
      return;
    }

    ref.current.geometry.center();
    ref.current.lookAt(cameraQuaternion);
  });

  return (
    <mesh ref={ref} position={position} visible>
      <textGeometry args={[children, { font, size, height: 0.1 }]} />
      <meshPhysicalMaterial transmission={10000} color={color} />
    </mesh>
  );
}

export default Text;
