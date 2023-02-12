/* eslint-disable no-param-reassign */
import React from 'react';
import { MathUtils } from 'three';
import { useUpdate } from '../hooks';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Moon = React.forwardRef(
  ({ position, relativeScale = 0.27, onClick }, ref) => {
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
      />
    );
  }
);

export default Moon;
