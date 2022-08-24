import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { SolarSystem, Earth } from './views';
import { Inspector, Toolbar, Footer } from './ui';
import BaseScene from './views/BaseScene';

const SCENE_MAP = {
  solarSystem: SolarSystem,
  earth: Earth
};

function App() {
  const dispatch = useDispatch();

  const scene = useSelector((state) => state.scene);
  const Scene = SCENE_MAP[scene.reference];

  return (
    <>
      <div className="ui-container">
        <Toolbar />
        <h1>{scene.label}</h1>
        <Inspector />
        <Footer />
      </div>
      <BaseScene>
        <Scene dispatch={dispatch} />
      </BaseScene>
    </>
  );
}

export default App;
