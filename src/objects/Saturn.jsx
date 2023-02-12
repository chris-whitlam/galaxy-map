import React from 'react';
import { TextureLoader, MathUtils, Euler } from 'three';
import { useLoader } from '@react-three/fiber';
import { Ring, Sphere } from '@react-three/drei';
import Text from './Text';

const Saturn = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/saturn/base.jpg');
    const ringBase = useLoader(TextureLoader, '/images/saturn/ring_base.jpg');

    return (
      <>
        <Text
          position={[0, relativeScale + 15, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Saturn
        </Text>
        <Sphere
          ref={ref}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick('saturn')}
        >
          <meshStandardMaterial map={base} />
        </Sphere>
        <Ring
          args={[0.6, 1, 30]}
          position={position}
          rotation={new Euler(MathUtils.degToRad(-90), 0, 0)}
          scale={[relativeScale * 3, relativeScale * 3, relativeScale * 3]}
        >
          <meshPhongMaterial
            map={ringBase}
            args={[0.1, 20]}
            blendSrcAlpha={2}
            transparent
            opacity={0.5}
          />
        </Ring>
        <Ring
          args={[0.6, 1, 30]}
          position={position}
          rotation={new Euler(MathUtils.degToRad(90), 0, 0)}
          scale={[relativeScale * 3, relativeScale * 3, relativeScale * 3]}
        >
          <meshPhongMaterial
            map={ringBase}
            args={[0.1, 20]}
            blendSrcAlpha={2}
            transparent
            opacity={0.5}
          />
        </Ring>
      </>
    );
  }
);

export default Saturn;
