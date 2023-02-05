import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleOrbitLines,
  togglePause,
  toggleInterface,
  incrementPlanetScale,
  decrementPlanetScale,
  incrementSpeed,
  decrementSpeed
} from '../../store/controlsSlice';

export function KeyboardControls({ children }) {
  const dispatch = useDispatch();
  let incrementSpeedInterval;
  let decrementSpeedInterval;

  const handleKeyUp = (event) => {
    switch (event.key) {
      case ' ':
        dispatch(togglePause());
        break;
      case 'I':
      case 'i':
        dispatch(toggleInterface());
        break;
      case 'O':
      case 'o':
        dispatch(toggleOrbitLines());
        break;
      case 'ArrowRight':
        clearInterval(incrementSpeedInterval);
        incrementSpeedInterval = null;
        break;
      case 'ArrowLeft':
        clearInterval(decrementSpeedInterval);
        decrementSpeedInterval = null;
        break;
      default:
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowRight':
        if (!incrementSpeedInterval) {
          incrementSpeedInterval = setInterval(
            () => dispatch(incrementSpeed()),
            1
          );
        }
        break;
      case 'ArrowLeft':
        if (!decrementSpeedInterval) {
          decrementSpeedInterval = setInterval(
            () => dispatch(decrementSpeed()),
            1
          );
        }
        break;
      default:
    }
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case '+':
        dispatch(incrementPlanetScale());
        break;
      case '-':
        dispatch(decrementPlanetScale());
        break;
      default:
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return children;
}
