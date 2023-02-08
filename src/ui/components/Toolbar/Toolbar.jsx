import { useDispatch, useSelector } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import { changeScene } from '../../../store/sceneSlice';
import {
  toggleOrbitLines as toggleOrbitLinesAction,
  togglePause as togglePauseAction,
  toggleInterface as toggleInterfaceAction,
  setPlanetsScale,
  setSpeed,
  reset
} from '../../../store/controlsSlice';
import './Toolbar.css';
import scenes from '../../../data/scenes';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';
import {
  MAX_PLANET_SCALE,
  MAX_SPEED,
  MIN_PLANET_SCALE,
  MIN_SPEED
} from '../../constants';

function Toolbar() {
  const dispatch = useDispatch();

  const { isPaused, showOrbitLines, showInterface, speed, planetsScale } =
    useSelector((state) => state.controls);

  const handleSceneChange = (sceneName) => {
    dispatch(reset());
    dispatch(changeScene(sceneName));
  };

  const togglePause = () => {
    dispatch(togglePauseAction());
  };

  const toggleOrbitLines = () => {
    dispatch(toggleOrbitLinesAction());
  };

  const toggleInterface = () => {
    dispatch(toggleInterfaceAction());
  };

  const handlePlanetSize = (e) => {
    dispatch(setPlanetsScale(+e.target.value));
  };

  const handleSpeed = (e) => {
    dispatch(setSpeed(+e.target.value));
  };

  const resetSettings = () => {
    dispatch(reset());
  };

  return (
    <div className="toolbar">
      <div className="section">
        <Dropdown name="Scenes">
          {Object.values(scenes).map((scene) => (
            <Button
              key={scene.reference}
              onClick={() => handleSceneChange(scene.reference)}
            >
              {scene.label}
            </Button>
          ))}
        </Dropdown>
        <Dropdown name="Controls">
          <Slider
            name="Planet Scale"
            description="Scales Sun un-proportionally"
            max={MAX_PLANET_SCALE}
            value={planetsScale}
            min={MIN_PLANET_SCALE}
            onChange={handlePlanetSize}
          >
            Scale of planets
          </Slider>
          <Slider
            name="Speed"
            max={MAX_SPEED}
            value={speed}
            min={MIN_SPEED}
            onChange={handleSpeed}
          >
            Speed
          </Slider>
          <button
            style={{ width: '100%' }}
            type="button"
            onClick={resetSettings}
          >
            Reset all
          </button>
        </Dropdown>
        <Dropdown name="Interface">
          <Checkbox
            name="showOrbits"
            onChange={toggleOrbitLines}
            checked={showOrbitLines}
          >
            Show Orbits
          </Checkbox>
          <Checkbox
            name="showInterface"
            onChange={toggleInterface}
            checked={showInterface}
          >
            Show Interface
          </Checkbox>
        </Dropdown>
      </div>
      <div className="section">
        <button type="button" onClick={togglePause}>
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
