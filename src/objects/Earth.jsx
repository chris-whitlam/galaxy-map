/* eslint-disable no-param-reassign */
import React from 'react';
import { TextureLoader, MathUtils } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useUpdate } from '../hooks';
import Text from './Text';

const Earth = React.forwardRef(
  ({ position, relativeScale = 1, onClick, rotationSpeed = 1 }, ref) => {
    const base = useLoader(TextureLoader, '/images/earth/base.jpg');
    const bump = useLoader(TextureLoader, '/images/earth/bump.jpg');
    const specular = useLoader(TextureLoader, '/images/earth/specular.jpg');

    useUpdate(() => {
      if (!ref.current) {
        return;
      }

      ref.current.rotation.y += rotationSpeed * 0.001;
      ref.current.rotation.x = MathUtils.degToRad(-23.5);
    });

    return (
      <>
        <Text
          position={[0, relativeScale + 12, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          Earth
        </Text>
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
      </>
    );
  }
);

export default Earth;
