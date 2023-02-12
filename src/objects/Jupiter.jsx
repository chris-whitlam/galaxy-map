import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

import Text from './Text';

const Jupiter = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/jupiter/base.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 15, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Jupiter
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('jupiter')}
        >
          <meshStandardMaterial map={base} />
        </Sphere>
      </>
    );
  }
);

export default Jupiter;
