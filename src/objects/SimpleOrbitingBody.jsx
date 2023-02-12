import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import Text from './Text';
import { useLoadTextures } from '../hooks';

const SimpleOrbitingBody = React.forwardRef(
  ({ label, name, position, relativeScale, onClick, bumpScale }, passedRef) => {
    const localRef = useRef(null);
    const ref = passedRef || localRef;

    const { base, bump, specular } = useLoadTextures(name);

    return (
      <>
        <Text
          position={[0, relativeScale + 12, 0]}
          size={10}
          rotation={[10, 10, 10]}
        >
          {label}
        </Text>
        <Sphere
          ref={ref}
          name={name}
          position={position}
          scale={[relativeScale, relativeScale, relativeScale]}
          onClick={() => onClick(name)}
        >
          <meshStandardMaterial
            map={base}
            bumpMap={bump}
            specular={specular}
            bumpScale={bumpScale || 0.001}
          />
        </Sphere>
      </>
    );
  }
);

export default SimpleOrbitingBody;
