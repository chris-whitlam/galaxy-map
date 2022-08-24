import { useDispatch } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import { changeScene } from '../../store/sceneSlice';
import './Toolbar.css';

function Toolbar() {
  const dispatch = useDispatch();

  const handleSceneChange = (sceneName) => {
    dispatch(changeScene(sceneName));
  };

  return (
    <div className="toolbar">
      <Dropdown name="Scenes">
        <button type="button" onClick={() => handleSceneChange('solarSystem')}>
          Solar System
        </button>
        <button type="button" onClick={() => handleSceneChange('earth')}>
          Earth
        </button>
      </Dropdown>
      <Dropdown name="Interface">
        <Checkbox name="showOrbits">Show Orbits</Checkbox>
        <Checkbox name="hideInterface">Hide Interface</Checkbox>
      </Dropdown>
      <Dropdown name="Camera">
        <button type="button">Center Camera</button>
      </Dropdown>
    </div>
  );
}

export default Toolbar;
