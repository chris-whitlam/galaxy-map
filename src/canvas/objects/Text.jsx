import { useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import inter from '../assets/Inter_Regular.json';
import { useUpdate } from '../hooks';

function Text({ children, position, size = 10, color = 'white' }) {
  const ref = useRef();
  const cameraPosition = useThree(({ camera }) => camera.position);
  const font = new FontLoader().parse(inter);
  const { showLabels } = useSelector((state) => state.controls);

  useUpdate(() => {
    if (!ref.current) {
      return;
    }

    ref.current.geometry.center();
    ref.current.lookAt(cameraPosition);
  });

  if (!showLabels) return null;

  return (
    <mesh ref={ref} position={position} visible>
      <textGeometry args={[children, { font, size, height: 0.1 }]} />
      <meshPhysicalMaterial transmission={10000} color={color} />
    </mesh>
  );
}

export default Text;
