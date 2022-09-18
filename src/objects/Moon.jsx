/* eslint-disable no-param-reassign */
import React from 'react';
import { TextureLoader, MathUtils } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useUpdate } from '../hooks';

const Moon = React.forwardRef(
  ({ position, relativeScale = 0.27, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/moon/base.jpg');
    const bump = useLoader(TextureLoader, '/images/moon/bump.jpg');

    useUpdate(() => {
      if (!ref.current) {
        return;
      }

      ref.current.rotation.y = MathUtils.degToRad(180);
      ref.current.rotation.x = MathUtils.degToRad(7);
    });

    return (
      <Sphere
        ref={ref}
        onClick={() => onClick('moon')}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
      >
        <meshStandardMaterial map={base} bumpMap={bump} bumpScale={0.002} />
      </Sphere>
    );
  }
);

export default Moon;
