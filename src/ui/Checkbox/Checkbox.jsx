function Checkbox({ name, children }) {
  return (
    <div>
      <input type="checkbox" id={name} name={name} />
      <label htmlFor={name}>{children}</label>
    </div>
  );
}

export default Checkbox;
