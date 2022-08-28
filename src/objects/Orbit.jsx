import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Orbit({ speed = 0.0005, parentPosition, children }) {
  const ref = useRef();
  const { isPaused } = useSelector((state) => state.controls);

  useFrame(() => {
    if (isPaused) {
      return;
    }
    ref.current.rotation.y += speed;
  });

  return (
    <Box ref={ref} position={parentPosition} scale={1}>
      {children}
    </Box>
  );
}

export default Orbit;
