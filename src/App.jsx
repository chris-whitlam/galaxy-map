import './App.css';
import { SolarSystem } from './views';
import { Inspector, Toolbar, Footer } from './ui';

function App() {
  return (
    <>
      <div className="ui-container">
        <Toolbar />
        <h1>
          Solar System
          <br />
          Map
        </h1>
        <Inspector />
        <Footer />
      </div>
      <SolarSystem />
    </>
  );
}

export default App;
