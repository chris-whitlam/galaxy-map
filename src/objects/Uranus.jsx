import React from 'react';
import { TextureLoader, MathUtils, Euler } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import Text from './Text';

const Uranus = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/uranus/base.jpg');
    const ringBase = useLoader(TextureLoader, '/images/uranus/ring_base.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 15, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Uranus
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('uranus')}
        >
          <meshStandardMaterial map={base} />
        </Sphere>
        <Ring
          args={[0.6, 1, 30]}
          position={position}
          scale={[
            relativeScale * 2.2,
            relativeScale * 2.2,
            relativeScale * 2.2
          ]}
        >
          <meshPhongMaterial
            map={ringBase}
            args={[0.1, 20]}
            transparent
            opacity={0.15}
          />
        </Ring>
        <Ring
          args={[0.6, 1, 30]}
          position={position}
          rotation={new Euler(MathUtils.degToRad(180), 0, 0)}
          scale={[
            relativeScale * 2.2,
            relativeScale * 2.2,
            relativeScale * 2.2
          ]}
        >
          <meshPhongMaterial
            map={ringBase}
            args={[0.1, 20]}
            transparent
            opacity={0.15}
          />
        </Ring>
      </>
    );
  }
);

export default Uranus;
