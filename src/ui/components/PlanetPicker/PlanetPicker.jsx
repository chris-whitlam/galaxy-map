import './PlanetPicker.css';

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { planetSelected } from '../../../shared/store/planetSlice';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PlanetPicker() {
  const dispatch = useDispatch();
  const selectedPlanet = useSelector((state) => state.planet);
  const selectedScene = useSelector((state) => state.scene);

  const onChange = useCallback(
    (event) => {
      dispatch(planetSelected(event.target.value));
    },
    [planetSelected]
  );

  return (
    <select onChange={onChange} value={selectedPlanet}>
      <option value="">Select a planet...</option>
      {selectedScene.planets.map((planet) => (
        <option value={planet}>{capitalizeFirstLetter(planet)}</option>
      ))}
    </select>
  );
}

export default PlanetPicker;
