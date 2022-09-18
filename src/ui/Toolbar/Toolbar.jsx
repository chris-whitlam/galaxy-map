import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import { changeScene } from '../../store/sceneSlice';
import {
  toggleOrbitLines as toggleOrbitLinesAction,
  togglePause as togglePauseAction,
  setPlanetsScale,
  setSpeed
} from '../../store/controlsSlice';
import './Toolbar.css';
import scenes from '../../data/scenes';
import Slider from '../Slider/Slider';

function Toolbar() {
  const dispatch = useDispatch();
  const [planetScale, setPlanetScale] = useState(100);
  const [speed, setOrbitSpeed] = useState(5);
  const { isPaused, showOrbitLines } = useSelector((state) => state.controls);

  const handleSceneChange = (sceneName) => {
    dispatch(changeScene(sceneName));
  };

  const togglePause = () => {
    dispatch(togglePauseAction());
  };

  const toggleOrbitLines = () => {
    dispatch(toggleOrbitLinesAction());
  };

  const handlePlanetSize = (e) => {
    setPlanetScale(e.target.value);
    dispatch(setPlanetsScale(e.target.value));
  };

  const handleSpeed = (e) => {
    setOrbitSpeed(e.target.value);
    dispatch(setSpeed(e.target.value));
  };

  return (
    <div className="toolbar">
      <div className="section">
        <Dropdown name="Scenes">
          {Object.values(scenes).map((scene) => (
            <button
              key={scene.reference}
              type="button"
              onClick={() => handleSceneChange(scene.reference)}
            >
              {scene.label}
            </button>
          ))}
        </Dropdown>
        <Dropdown name="Interface">
          <Checkbox
            name="showOrbits"
            onChange={toggleOrbitLines}
            checked={showOrbitLines}
          >
            Show Orbits
          </Checkbox>
          <Checkbox name="hideInterface">Hide Interface</Checkbox>
        </Dropdown>
        <Dropdown name="Camera">
          <button type="button">Center Camera</button>
        </Dropdown>
        <Dropdown name="Controls">
          <Slider
            name="Planet Scale"
            description="Scales Sun un-proportionally"
            max={600}
            value={planetScale}
            min={20}
            onChange={handlePlanetSize}
          >
            Scale of planets
          </Slider>
          <Slider
            name="Speed"
            max={1000}
            value={speed}
            min={1}
            onChange={handleSpeed}
          >
            Speed
          </Slider>
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
