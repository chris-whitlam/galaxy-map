import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';
import './Toolbar.css';

function Toolbar() {
  return (
    <div className="toolbar">
      <Dropdown name="Scenes">
        <button type="button">Solar System</button>
        <button type="button">Earth</button>
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
