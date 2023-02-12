import React from 'react';

import { EllipseCurve, Euler, MathUtils } from 'three';

import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';

function OrbitLine({
  color = 'white',
  lineWidth = 1,
  rx = 10,
  ry = 10,
  position = [0, 0, 0],
  orientation = new Euler(MathUtils.degToRad(90), 0, 0),
  children,
  ...rest
}) {
  // geometry
  const geometry = new LineGeometry();
  const material = new LineMaterial({
    color,
    linewidth: lineWidth
  });

  const curve = new EllipseCurve(
    0,
    0, // xCenter, yCenter
    rx,
    ry, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  const points = curve.getPoints(150);

  const positions = points.reduce((acc, p) => {
    acc.push(p.x);
    acc.push(p.y);
    acc.push(0);

    return acc;
  }, []);

  // to get a closed curve, add first point at the end again
  positions.push(points[0].x);
  positions.push(points[0].y);
  positions.push(0);

  geometry.setPositions(positions);
  // eslint-disable-next-line no-undef
  material.resolution.set(window.innerWidth, window.innerHeight);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <mesh {...rest} position={position} rotation={orientation}>
      <line2 geometry={geometry} material={material} />
    </mesh>
  );
}

export default OrbitLine;
