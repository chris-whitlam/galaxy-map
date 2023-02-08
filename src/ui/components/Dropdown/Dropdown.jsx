import './Dropdown.css';

function Dropdown({ name, children }) {
  return (
    <div className="dropdown">
      <button className="dropdown-btn" type="button">
        {name}
      </button>
      <div className="dropdown-options">{children}</div>
    </div>
  );
}

export default Dropdown;
