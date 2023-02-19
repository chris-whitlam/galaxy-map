import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Canvas } from './canvas/Canvas';
import {
  Inspector,
  Toolbar,
  Footer,
  Modal,
  KeyboardControls
} from './ui/components';
import {
  toggleFullscreen as toggleFullScreenAction,
  toggleInterface as toggleInterfaceAction
} from './shared/store/controlsSlice';

import { useLocalStorage } from './shared/hooks';

const SEEN_WARNING_LOCAL_STORAGE_KEY = 'seenWarning';

function App() {
  const dispatch = useDispatch();
  const appContainer = useRef();
  const { getValue, storeValue } = useLocalStorage();
  const [fade, setFade] = useState();
  const hasSeenWarning = getValue(SEEN_WARNING_LOCAL_STORAGE_KEY);
  const [showModal, setShowModal] = useState(!hasSeenWarning);
  const state = useSelector((rootState) => rootState);

  useEffect(() => {
    setFade('visible');
    const fadeOut = setTimeout(() => setFade('fade-out'));

    return () => clearTimeout(fadeOut);
  }, [state.scene.reference]);

  useEffect(() => {
    const onFullscreenChange = () => {
      dispatch(toggleFullScreenAction());
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
    storeValue(SEEN_WARNING_LOCAL_STORAGE_KEY, true);
  }, []);

  const toggleInterface = () => {
    dispatch(toggleInterfaceAction());
  };

  return (
    <div ref={appContainer}>
      <div className="ui-container">
        <Modal
          isOpen={showModal}
          title="Not to Accurate Scale"
          onClose={onCloseModal}
        >
          This &rsquo;model&rsquo; is just a bit of fun and not intended as a
          correctly scaled model.
        </Modal>
        <h1 className={`${fade}`}>{state.scene.label}</h1>
        <KeyboardControls>
          {state.controls.showInterface ? (
            <>
              <Toolbar />
              <Inspector />
              <Footer />
            </>
          ) : (
            <Footer>
              <button
                style={{ color: '#6b6b6b' }}
                type="button"
                onClick={toggleInterface}
              >
                Click here or press I key to toggle interface
              </button>
            </Footer>
          )}
        </KeyboardControls>
      </div>
      <Canvas scene={state.scene} />
    </div>
  );
}

export default App;
