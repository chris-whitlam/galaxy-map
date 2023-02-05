import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Sun = React.forwardRef(
  ({ position, relativeScale = 2, onClick }, ref) => {
    const base = useLoader(TextureLoader, '/images/sun.jpg');

    return (
      <Sphere
        onClick={onClick}
        position={position}
        scale={[relativeScale, relativeScale, relativeScale]}
      >
        <pointLight color="white" intensity={2} distance={6000} castShadow />
        <meshLambertMaterial map={base} emissive="peru" />
      </Sphere>
    );
  }
);

export default Sun;
