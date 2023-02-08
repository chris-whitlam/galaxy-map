import './Slider.css';

function Slider({
  name,
  description,
  min = 0,
  max = 100,
  value = 0,
  onChange = () => {},
  children
}) {
  return (
    <div className="slider">
      <div className="label">
        <label htmlFor={name}>{children}</label>
        {description && <span className="description">{description}</span>}
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        id={name}
        name={name}
      />
    </div>
  );
}

export default Slider;
