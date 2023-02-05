import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { SolarSystem, EarthAndMoon } from './scenes';
import { Inspector, Toolbar, Footer, Modal } from './ui';
import BaseScene from './scenes/BaseScene';

import { toggleInterface as toggleInterfaceAction } from './store/controlsSlice';

import { KeyboardControls } from './ui/KeyboardControls/KeyboardControls';
import { useLocalStorage } from './hooks';

const SCENE_MAP = {
  solarSystem: SolarSystem,
  earthAndMoon: EarthAndMoon
};

const SEEN_WARNING_LOCAL_STORAGE_KEY = 'seenWarning';

function App() {
  const dispatch = useDispatch();
  const { getValue, storeValue } = useLocalStorage();
  const [fade, setFade] = useState();
  const hasSeenWarning = getValue(SEEN_WARNING_LOCAL_STORAGE_KEY);
  const [showModal, setShowModal] = useState(!hasSeenWarning);
  const state = useSelector((rootState) => rootState);

  const Scene = SCENE_MAP[state.scene.reference];

  useEffect(() => {
    setFade('visible');
    const fadeOut = setTimeout(() => setFade('fade-out'));

    return () => clearTimeout(fadeOut);
  }, [state.scene.reference]);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
    storeValue(SEEN_WARNING_LOCAL_STORAGE_KEY, true);
  }, []);

  const toggleInterface = () => {
    dispatch(toggleInterfaceAction());
  };

  return (
    <>
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
      <BaseScene camera={state.scene.camera}>
        <Scene dispatch={dispatch} state={state} />
      </BaseScene>
    </>
  );
}

export default App;
