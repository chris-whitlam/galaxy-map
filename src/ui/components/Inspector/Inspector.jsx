import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useLoseFocus, useView } from '../../hooks';

import Panel from '../Panel/Panel';
import './Inspector.css';
import { planetaryData } from '../../../canvas/data';

function Inspector() {
  const [isShown, setIsShown] = useState(true);
  const ref = useRef(null);

  const onLoseFocus = () => {
    setIsShown(false);
  };

  useLoseFocus(ref, onLoseFocus);
  const { isMobile } = useView();

  const planetName = useSelector((state) => state.planet);

  const {
    name,
    mass,
    diameter,
    density,
    gravity,
    escapeVelocity,
    rotationPeriod,
    lengthOfDay,
    distanceFromSun,
    perihelion,
    aphelion,
    orbitalPeriod,
    orbitalVelocity,
    orbitalInclination,
    orbitalEccentricity,
    obliquityToOrbit,
    meanTemperature,
    surfacePressure,
    moons,
    hasRingSystem,
    hasGlobalMagneticField
  } = planetaryData[planetName] || {};

  useEffect(() => {
    if (name && !isMobile) {
      setIsShown(true);
    }
  }, [name]);

  if (!name) {
    return null;
  }

  return (
    <Panel
      ref={ref}
      heading={name.toUpperCase()}
      isShown={isShown}
      onToggle={() => {
        setIsShown((state) => !state);
      }}
      className="inspector"
    >
      <div className="stats-container">
        <b>
          Mass (10<sup>24</sup>kg):
        </b>
        <span>{mass}</span>
        <b>Diameter (km):</b>
        <span>{diameter}</span>
        <b>
          Density (kg/m<sup>3</sup>):
        </b>
        <span>{density}</span>
        <b>
          Gravity (m/s<sup>2</sup>):
        </b>
        <span>{gravity}</span>
        <b>Escape Velocity (km/s):</b>
        <span>{escapeVelocity}</span>
        <b>Rotation Period (hours):</b>
        <span>{rotationPeriod}</span>
        <b>Length of Day (hours):</b>
        <span>{lengthOfDay}</span>
        <b>
          Distance from Sun (10<sup>6</sup> km):
        </b>
        <span>{distanceFromSun}</span>
        <b>
          Perihelion (10<sup>6</sup> km):
        </b>
        <span>{perihelion}</span>
        <b>
          Aphelion (10<sup>6</sup> km):
        </b>
        <span>{aphelion}</span>
        <b>Orbital Period (days):</b>
        <span>{orbitalPeriod}</span>
        <b>Orbital Velocity (km/s):</b>
        <span>{orbitalVelocity}</span>
        <b>Orbital Inclination (degrees):</b>
        <span>{orbitalInclination}</span>
        <b>Orbital Eccentricity:</b>
        <span>{orbitalEccentricity}</span>
        <b>Obliquity To Orbit (degrees):</b>
        <span>{obliquityToOrbit}</span>
        <b>Mean Temperature (C):</b>
        <span>{meanTemperature}</span>
        <b>Surface Pressure (bars):</b>
        <span>{surfacePressure}</span>
        <b>Number of Moons:</b>
        <span>{moons}</span>
        <b>Has Ring System?:</b>
        <span>
          {hasRingSystem ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </span>
        <b>has Global Magnetic Field?:</b>
        <span>
          {hasGlobalMagneticField ? (
            <ImCheckboxChecked />
          ) : (
            <ImCheckboxUnchecked />
          )}
        </span>
      </div>
    </Panel>
  );
}

export default Inspector;
