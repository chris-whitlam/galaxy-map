const scenes = {
  solarSystem: {
    reference: 'solarSystem',
    label: 'Solar System',
    camera: {
      position: [200, 0, 0]
    },
    planets: [
      'mercury',
      'venus',
      'earth',
      'mars',
      'jupiter',
      'saturn',
      'uranus',
      'neptune'
    ]
  },
  earthAndMoon: {
    reference: 'earthAndMoon',
    label: 'Earth & Moon',
    camera: {
      position: [50, 0, 0]
    },
    planets: ['earth', 'moon']
  }
};

export default scenes;
