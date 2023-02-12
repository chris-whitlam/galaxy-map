import './Footer.css';

import PlanetPicker from '../PlanetPicker/PlanetPicker';

function Footer({ children }) {
  return (
    <footer>
      {/* <span>{children || 'Created by Chris Whitlam'}</span> */}
      <PlanetPicker />
    </footer>
  );
}

export default Footer;
