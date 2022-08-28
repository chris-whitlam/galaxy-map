import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Neptune = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/neptune/base.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('neptune')}
      >
        <meshStandardMaterial map={base} />
      </Sphere>
    );
  }
);

export default Neptune;
