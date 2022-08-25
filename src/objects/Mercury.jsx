import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Mercury = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/mercury/base.jpg');
    const bump = useLoader(TextureLoader, '/images/mercury/bump.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('mercury')}
      >
        <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.001} />
      </Sphere>
    );
  }
);

export default Mercury;
