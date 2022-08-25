import { useDispatch, useSelector } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import { changeScene } from '../../store/sceneSlice';
import { togglePause as togglePauseAction } from '../../store/controlsSlice';
import './Toolbar.css';
import scenes from '../../data/scenes';

function Toolbar() {
  const dispatch = useDispatch();

  const { isPaused } = useSelector((state) => state.controls);

  const handleSceneChange = (sceneName) => {
    dispatch(changeScene(sceneName));
  };

  const togglePause = () => {
    dispatch(togglePauseAction());
  };

  return (
    <div className="toolbar">
      <Dropdown name="Scenes">
        {Object.values(scenes).map((scene) => (
          <button
            type="button"
            onClick={() => handleSceneChange(scene.reference)}
          >
            {scene.label}
          </button>
        ))}
      </Dropdown>
      <Dropdown name="Interface">
        <Checkbox name="showOrbits">Show Orbits</Checkbox>
        <Checkbox name="hideInterface">Hide Interface</Checkbox>
      </Dropdown>
      <Dropdown name="Camera">
        <button type="button">Center Camera</button>
      </Dropdown>
      <button type="button" onClick={togglePause}>
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>
    </div>
  );
}

export default Toolbar;
