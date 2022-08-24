import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Sphere } from '@react-three/drei';

function Earth({ position, relativeScale = 1, onClick }) {
  const base = useLoader(TextureLoader, '/images/earth.jpg');
  const ref = useRef();

  useFrame(() => (ref.current.rotation.y += 0.001));

  return (
    <Sphere
      ref={ref}
      position={position}
      scale={[relativeScale, relativeScale, relativeScale]}
      onClick={() => onClick('earth')}
    >
      <meshBasicMaterial map={base} />
    </Sphere>
  );
}

export default Earth;
