import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function Moon({ position, relativeScale = 0.27, onClick }) {
  const base = useLoader(TextureLoader, 'moon.jpg');

  return (
    <Sphere
      onClick={() => onClick('moon')}
      position={position}
      scale={[relativeScale, relativeScale, relativeScale]}
    >
      <meshBasicMaterial map={base} />
    </Sphere>
  );
}

export default Moon;
