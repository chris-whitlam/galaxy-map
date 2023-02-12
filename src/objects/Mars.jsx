import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Text from './Text';

const Mars = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/mars/base.jpg');
    const normal = useLoader(TextureLoader, '/images/mars/normal.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 12, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Mars
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('mars')}
        >
          <meshStandardMaterial map={base} normalScale={3} normalMap={normal} />
        </Sphere>
      </>
    );
  }
);

export default Mars;
