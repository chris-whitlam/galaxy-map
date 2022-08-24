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
      <Dropdown name="View">
        <Checkbox name="showOrbits">Show Orbits</Checkbox>
        <Checkbox name="hideInterface">Hide Interface</Checkbox>
      </Dropdown>
    </div>
  );
}

export default Toolbar;
