import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Text from './Text';

const Mercury = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/mercury/base.jpg');
    const bump = useLoader(TextureLoader, '/images/mercury/bump.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 10, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Mercury
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('mercury')}
        >
          <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.001} />
        </Sphere>
      </>
    );
  }
);

export default Mercury;
