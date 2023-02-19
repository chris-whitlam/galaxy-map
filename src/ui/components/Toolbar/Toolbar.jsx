import { useDispatch, useSelector } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa';
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import { changeScene } from '../../../shared/store/sceneSlice';
import {
  toggleOrbitLines as toggleOrbitLinesAction,
  togglePause as togglePauseAction,
  toggleInterface as toggleInterfaceAction,
  toggleLabels as toggleLabelsAction,
  setPlanetsScale,
  setSpeed,
  reset
} from '../../../shared/store/controlsSlice';
import './Toolbar.css';
import scenes from '../../../shared/data/scenes';
import Slider from '../Slider/Slider';

import {
  MAX_PLANET_SCALE,
  MAX_SPEED,
  MIN_PLANET_SCALE,
  MIN_SPEED
} from '../../constants';
import PlanetPicker from '../PlanetPicker/PlanetPicker';

function Toolbar() {
  const dispatch = useDispatch();
  const isFullscreenAllowed = document.fullscreenEnabled;

  const {
    isPaused,
    isFullscreen,
    showOrbitLines,
    showInterface,
    speed,
    planetsScale,
    showLabels
  } = useSelector((state) => state.controls);

  const handleSceneChange = (sceneName) => {
    dispatch(reset());
    dispatch(changeScene(sceneName));
  };

  const togglePause = () => {
    dispatch(togglePauseAction());
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  const toggleOrbitLines = () => {
    dispatch(toggleOrbitLinesAction());
  };

  const toggleInterface = () => {
    dispatch(toggleInterfaceAction());
  };

  const toggleLabels = () => {
    dispatch(toggleLabelsAction());
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
        <Dropdown name="Scenes" icon="galaxy">
          {Object.values(scenes).map((scene) => (
            <button
              type="button"
              key={scene.reference}
              onClick={() => handleSceneChange(scene.reference)}
            >
              {scene.label}
            </button>
          ))}
        </Dropdown>
        <Dropdown name="Controls" icon="controls">
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
        <Dropdown name="Interface" icon="eye">
          <Checkbox
            name="showOrbits"
            onChange={toggleOrbitLines}
            checked={showOrbitLines}
          >
            Show Orbits
          </Checkbox>
          <Checkbox
            name="showLabels"
            onChange={toggleLabels}
            checked={showLabels}
          >
            Show Labels
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
        <PlanetPicker />
      </div>
      <div className="section">
        <button type="button" onClick={togglePause}>
          {isPaused ? <FaPlay size={20} /> : <FaPause size={20} />}
        </button>
        {isFullscreenAllowed && (
          <button type="button" onClick={toggleFullScreen}>
            {isFullscreen ? (
              <AiOutlineFullscreenExit size={25} />
            ) : (
              <AiOutlineFullscreen size={25} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Toolbar;
