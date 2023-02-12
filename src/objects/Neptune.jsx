import React from 'react';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Neptune = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    return (
      <SimpleOrbitingBody
        ref={ref}
        name="neptune"
        label="Neptune"
        position={position}
        relativeScale={relativeScale}
        onClick={onClick}
      />
    );
  }
);

export default Neptune;
