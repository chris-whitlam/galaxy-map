import { useMemo } from 'react';
import { extend, Canvas as ThreeCanvas } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Line2 } from 'three/examples/jsm/lines/Line2';
import { Provider as ReduxProvider } from 'react-redux';
import BaseScene from './scenes/BaseScene';
import { OrbitControlsProvider } from './providers';
import { SolarSystem, EarthAndMoon } from './scenes';
import { store } from '../shared/store';

const SCENE_MAP = {
  solarSystem: SolarSystem,
  earthAndMoon: EarthAndMoon
};

export function Canvas({ scene }) {
  extend({ TextGeometry, Line2 });

  const Scene = useMemo(
    () => scene.reference && SCENE_MAP[scene.reference],
    [scene]
  );

  return (
    <ThreeCanvas
      dpr={[1.5, 2]}
      linear
      shadows
      style={{ height: '100vh', width: '100vw' }}
    >
      <ReduxProvider store={store}>
        <OrbitControlsProvider>
          <BaseScene camera={scene.camera}>
            <Scene />
          </BaseScene>
        </OrbitControlsProvider>
      </ReduxProvider>
    </ThreeCanvas>
  );
}
