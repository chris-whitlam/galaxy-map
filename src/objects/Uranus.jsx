import React from 'react';
import { TextureLoader, MathUtils, Euler } from 'three';
import { useLoader } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Uranus = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const ringBase = useLoader(TextureLoader, '/images/uranus/ring_base.jpg');

    return (
      <>
        <SimpleOrbitingBody
          ref={ref}
          onClick={onClick}
          name="uranus"
          label="Uranus"
          position={position}
          relativeScale={relativeScale}
        />
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
