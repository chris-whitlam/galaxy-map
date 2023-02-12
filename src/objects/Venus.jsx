import React from 'react';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Venus = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    return (
      <SimpleOrbitingBody
        ref={ref}
        name="venus"
        label="Venus"
        position={position}
        relativeScale={relativeScale}
        onClick={onClick}
      />
    );
  }
);

export default Venus;
