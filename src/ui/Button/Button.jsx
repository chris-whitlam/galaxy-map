import './Button.css';

function Button({ children, onClick, ...rest }) {
  return (
    <button type="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
