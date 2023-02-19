/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { MathUtils } from 'three';
import { useUpdate } from '../hooks';

import SimpleOrbitingBody from './SimpleOrbitingBody';

const Earth = React.forwardRef(
  (
    { position, onClick, textStyle, rotationSpeed = 1, relativeScale = 1 },
    passedRef
  ) => {
    const localRef = useRef(null);
    const ref = passedRef || localRef;

    useUpdate(() => {
      if (!ref.current) {
        return;
      }

      ref.current.rotation.y += rotationSpeed * 0.001;
      ref.current.rotation.x = MathUtils.degToRad(-23.5);
    });

    return (
      <SimpleOrbitingBody
        ref={ref}
        onClick={onClick}
        name="earth"
        label="Earth"
        position={position}
        relativeScale={relativeScale}
        textStyle={textStyle}
      />
    );
  }
);

export default Earth;
