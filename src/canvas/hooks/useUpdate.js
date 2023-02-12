import { useFrame } from '@react-three/fiber';
import { useSelector } from 'react-redux';

function useUpdate(callback) {
  const { isPaused } = useSelector((state) => state.controls);

  useFrame(() => {
    if (isPaused) {
      return;
    }

    callback();
  });
}

export default useUpdate;
