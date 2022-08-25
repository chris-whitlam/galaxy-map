import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Earth = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/earth/base.jpg');
    const bump = useLoader(TextureLoader, '/images/earth/bump.jpg');
    const specular = useLoader(TextureLoader, '/images/earth/specular.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('earth')}
      >
        <meshStandardMaterial
          map={base}
          bumpMap={bump}
          specular={specular}
          bumpScale={0.001}
        />
      </Sphere>
    );
  }
);

export default Earth;
