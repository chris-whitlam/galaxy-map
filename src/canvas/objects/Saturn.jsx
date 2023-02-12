import React from 'react';
import { TextureLoader, MathUtils, Euler } from 'three';
import { useLoader } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Saturn = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    const ringBase = useLoader(TextureLoader, '/images/saturn/ring_base.jpg');

    return (
      <>
        <SimpleOrbitingBody
          ref={ref}
          onClick={onClick}
          name="saturn"
          label="Saturn"
          position={position}
          relativeScale={relativeScale}
        />
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
      </>
    );
  }
);

export default Saturn;
