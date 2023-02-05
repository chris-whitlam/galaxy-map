import './Modal.css';

function Modal({ children, isOpen, onClose, title }) {
  return (
    <div className={`modal ${isOpen && 'open'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
