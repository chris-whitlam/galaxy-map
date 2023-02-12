import React from 'react';
import SimpleOrbitingBody from './SimpleOrbitingBody';

const Mars = React.forwardRef(
  ({ position, relativeScale = 1, onClick }, ref) => {
    return (
      <SimpleOrbitingBody
        ref={ref}
        name="mars"
        label="Mars"
        position={position}
        relativeScale={relativeScale}
        onClick={onClick}
      />
    );
  }
);

export default Mars;
