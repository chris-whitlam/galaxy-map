export function getPlanetaryData(
  relativeScale = 100,
  planetScaleMultiplier = 100,
  planetRotationMultiplier = 0.0001
) {
  return {
    sun: {
      position: [0, 0, 0],
      scale: 0.00465047 * relativeScale * (planetScaleMultiplier / 10), // Stops the sun getting too big
      rotationSpeed: 0
    },
    mercury: {
      position: [0.39 * relativeScale, 0, 0],
      scale: 0.000032 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 1.59 * planetRotationMultiplier
    },
    venus: {
      position: [0.72 * relativeScale, 0, 0],
      scale: 0.000081 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 1.18 * planetRotationMultiplier
    },
    earth: {
      position: [1 * relativeScale, 0, 0],
      scale: 0.000085 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 1 * planetRotationMultiplier
    },
    mars: {
      position: [1.53 * relativeScale, 0, 0],
      scale: 0.000045 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 0.808 * planetRotationMultiplier
    },
    jupiter: {
      position: [5.2 * relativeScale, 0, 0],
      scale: 0.00095 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 0.439 * planetRotationMultiplier
    },
    saturn: {
      position: [9.5 * relativeScale, 0, 0],
      scale: 0.0008 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 0.325 * planetRotationMultiplier
    },
    uranus: {
      position: [19.2 * relativeScale, 0, 0],
      scale: 0.00035 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 0.228 * planetRotationMultiplier
    },
    neptune: {
      position: [30.1 * relativeScale, 0, 0],
      scale: 0.00033 * relativeScale * planetScaleMultiplier,
      rotationSpeed: 0.182 * planetRotationMultiplier
    }
  };
}
