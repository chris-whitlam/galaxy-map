import './PlanetPicker.css';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  planetSelected,
  planetUnSelected
} from '../../../shared/store/planetSlice';
import Dropdown from '../Dropdown/Dropdown';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Option({ children, value, onClick }) {
  const handleClick = () => onClick(value);

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

function PlanetPicker() {
  const dispatch = useDispatch();
  const selectedPlanet = useSelector((state) => state.planet);
  const selectedScene = useSelector((state) => state.scene);

  const handleClick = useCallback(
    (value) => {
      if (!value) {
        dispatch(planetUnSelected());
      } else {
        dispatch(planetSelected(value));
      }
    },
    [planetSelected]
  );

  useEffect(() => {
    dispatch(planetUnSelected());
  }, [selectedScene]);

  return (
    <div className="planet-picker">
      <Dropdown
        name={capitalizeFirstLetter(selectedPlanet) || 'None'}
        hideInnerLabel
      >
        <Option value={null} onClick={handleClick}>
          None
        </Option>
        {selectedScene.planets.map((planet) => (
          <Option key={planet} value={planet} onClick={handleClick}>
            {capitalizeFirstLetter(planet)}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
}

export default PlanetPicker;
