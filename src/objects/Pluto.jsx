import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Pluto = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/pluto/base.jpg');
    const bump = useLoader(TextureLoader, '/images/pluto/bump.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('pluto')}
      >
        <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.001} />
      </Sphere>
    );
  }
);

export default Pluto;
