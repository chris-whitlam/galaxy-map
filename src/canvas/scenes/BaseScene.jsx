import { useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Vector3 } from 'three';
import { useUpdate } from '../hooks';
import { useOrbitControls } from '../providers';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

function CameraUpdater({ camera: { position = [200, 0, 0] } = {} }) {
  const cameraPosition = useThree(({ camera }) => camera.position);

  useEffect(() => {
    cameraPosition.set(...position);
  }, [position, cameraPosition]);
}

function CameraOrbit() {
  const { targetPosition, setTargetPosition } = useOrbitControls();
  const scene = useThree((context) => context.scene);
  const selectedPlanet = useSelector((state) => state.planet);
  const selectedPlanetObject = useMemo(
    () => scene.getObjectByName(selectedPlanet),
    [selectedPlanet]
  );

  useUpdate(() => {
    if (!selectedPlanetObject) return;
    const target = new Vector3();
    selectedPlanetObject.getWorldPosition(target);
    setTargetPosition(target);
  });

  return (
    <OrbitControls
      makeDefault
      maxPolarAngle={deg2rad(80)}
      target={targetPosition}
    />
  );
}

function BaseScene({ children, camera }) {
  return (
    <>
      <CameraUpdater camera={camera} />
      <ambientLight intensity={0.2} />
      <CameraOrbit />
      <Stars radius={2000} depth={100} count={2000} factor={10} />
      <PerspectiveCamera
        makeDefault
        position={[200, 0, 0]}
        rotation={[0, 0, 0]}
        fov={75}
        far={10000}
      />
      {children}
    </>
  );
}

export default BaseScene;
