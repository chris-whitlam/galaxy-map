import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Venus = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/venus/base.jpg');
    const bump = useLoader(TextureLoader, '/images/venus/bump.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('venus')}
      >
        <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.001} />
      </Sphere>
    );
  }
);

export default Venus;
