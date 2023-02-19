import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { useSelector } from 'react-redux';

import Text from './Text';
import { useLoadTextures } from '../hooks';

const defaultTextStyle = {
  size: 8,
  height: 12
};

const SimpleOrbitingBody = React.forwardRef(
  (
    {
      label,
      name,
      position,
      relativeScale,
      onClick,
      bumpScale,
      textStyle: {
        size: textSize = defaultTextStyle.size,
        height: textHeight = defaultTextStyle.height
      } = defaultTextStyle
    },
    passedRef
  ) => {
    const { showLabels } = useSelector((state) => state.controls);
    const localRef = useRef(null);
    const ref = passedRef || localRef;

    const { base, bump, specular } = useLoadTextures(name);

    return (
      <>
        {showLabels && (
          <Text
            position={[0, relativeScale + textHeight, 0]}
            size={textSize}
            rotation={[10, 10, 10]}
            onClick={() => onClick(name)}
          >
            {label}
          </Text>
        )}
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
