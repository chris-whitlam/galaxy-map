import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Euler, MathUtils } from 'three';
import OrbitLine from './OrbitLine';
import { useUpdate } from '../hooks';

function Orbit({
  rotationSpeed = 0.0005,
  position,
  parentPosition = [0, 0, 0],
  orientation = new Euler(MathUtils.degToRad(0), 0, 0),
  children
}) {
  const ref = useRef();
  const { showOrbitLines } = useSelector((state) => state.controls);

  useUpdate(() => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y += rotationSpeed / (position[0] * 0.01);
  });

  return (
    <mesh rotation={orientation}>
      {showOrbitLines && <OrbitLine rx={position[0]} ry={position[0]} />}
      <mesh ref={ref} position={parentPosition} scale={1}>
        <mesh position={position}>{children}</mesh>
      </mesh>
    </mesh>
  );
}

export default Orbit;
