import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Mars = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/mars/base.jpg');
    const normal = useLoader(TextureLoader, '/images/mars/normal.jpg');

    return (
      <Sphere
        ref={ref}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
        onClick={() => onClick('mars')}
      >
        <meshStandardMaterial map={base} normalScale={3} normalMap={normal} />
      </Sphere>
    );
  }
);

export default Mars;
