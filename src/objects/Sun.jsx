import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function Sun({ position, relativeScale = 2, onClick }) {
  const base = useLoader(TextureLoader, '/images/sun.jpg');

  return (
    <Sphere
      onClick={onClick}
      position={position}
      scale={[relativeScale, relativeScale, relativeScale]}
    >
      <meshBasicMaterial map={base} />
    </Sphere>
  );
}

export default Sun;
