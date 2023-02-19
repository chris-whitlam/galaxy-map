import './Dropdown.css';

import { useView } from '../../hooks';

function Dropdown({ children, name, icon, hideInnerLabel }) {
  const { isMobile } = useView();

  return (
    <div className="dropdown">
      <button className="dropdown-btn" type="button">
        {!isMobile || !icon ? (
          <div className="text-container">
            <span>{name}</span>
            <img
              src="/icons/down-chevron.png"
              alt="Scenes"
              className="down-chevron"
            />
          </div>
        ) : (
          <img
            src={`/icons/${icon}.png`}
            alt="Scenes"
            className="dropdown-icon"
          />
        )}
      </button>
      <div className="dropdown-options">
        {!hideInnerLabel && isMobile && <strong>{name}</strong>}
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
