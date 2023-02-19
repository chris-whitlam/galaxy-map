/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { MathUtils } from 'three';
import { useUpdate } from '../hooks';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Moon = React.forwardRef(
  ({ position, textStyle, onClick, relativeScale = 0.27 }, passedRef) => {
    const localRef = useRef(null);
    const ref = passedRef || localRef;

    useUpdate(() => {
      if (!ref.current) {
        return;
      }

      ref.current.rotation.y = MathUtils.degToRad(180);
      ref.current.rotation.x = MathUtils.degToRad(7);
    });

    return (
      <SimpleOrbitingBody
        ref={ref}
        onClick={onClick}
        name="moon"
        label="Moon"
        position={position}
        relativeScale={relativeScale}
        bumpScale={0.002}
        textStyle={textStyle}
      />
    );
  }
);

export default Moon;
