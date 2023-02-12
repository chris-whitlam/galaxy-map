import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Text from './Text';

const Venus = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/venus/base.jpg');
    const bump = useLoader(TextureLoader, '/images/venus/bump.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 12, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Venus
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('venus')}
        >
          <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.001} />
        </Sphere>
      </>
    );
  }
);

export default Venus;
