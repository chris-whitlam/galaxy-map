import React from 'react';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Jupiter = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    return (
      <SimpleOrbitingBody
        ref={ref}
        name="jupiter"
        label="Jupiter"
        position={position}
        relativeScale={relativeScale}
        onClick={onClick}
      />
    );
  }
);

export default Jupiter;
