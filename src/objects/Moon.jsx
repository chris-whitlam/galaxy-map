import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Moon = React.forwardRef(
  ({ position, relativeScale = 0.27, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/moon/base.jpg');
    const bump = useLoader(TextureLoader, '/images/moon/bump.jpg');

    return (
      <Sphere
        onClick={() => onClick('moon')}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
      >
        <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.0001} />
      </Sphere>
    );
  }
);

export default Moon;
