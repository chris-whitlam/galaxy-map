function Checkbox({ name, checked = false, onChange = () => {}, children }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={name}
        name={name}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
}

export default Checkbox;
