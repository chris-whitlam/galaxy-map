import React from 'react';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Mercury = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    return (
      <SimpleOrbitingBody
        ref={ref}
        name="mercury"
        label="Mercury"
        position={position}
        relativeScale={relativeScale}
        onClick={onClick}
      />
    );
  }
);

export default Mercury;
