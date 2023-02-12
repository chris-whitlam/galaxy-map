import { useMemo } from 'react';
import { TextureLoader } from 'three';

// Use a custom texture loader implementation so it doesn't error when texture not found
function useLoadTextures(name) {
  return useMemo(() => {
    const textureLoader = new TextureLoader();
    const base = textureLoader.load(`/images/${name}/base.jpg`);
    const bump = textureLoader.load(`/images/${name}/bump.jpg`);
    const specular = textureLoader.load(`/images/${name}/specular.jpg`);
    return {
      base,
      bump,
      specular
    };
  }, [name]);
}

export default useLoadTextures;
