import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { SolarSystem, Earth } from './scenes';
import { Inspector, Toolbar, Footer } from './ui';
import BaseScene from './scenes/BaseScene';

const SCENE_MAP = {
  solarSystem: SolarSystem,
  earth: Earth
};

function App() {
  const dispatch = useDispatch();

  const state = useSelector((rootState) => rootState);

  const Scene = SCENE_MAP[state.scene.reference];

  return (
    <>
      <div className="ui-container">
        <Toolbar />
        <h1>{state.scene.label}</h1>
        <Inspector />
        <Footer />
      </div>
      <BaseScene>
        <Scene dispatch={dispatch} state={state} />
      </BaseScene>
    </>
  );
}

export default App;
