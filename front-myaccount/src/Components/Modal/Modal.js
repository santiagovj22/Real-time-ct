import React from "react";
import ReactDOM from "react-dom";
import modalRoot from "../../index";

// Modal component

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

// Modal Content component
const ModalContent = ({ show, modalTitle, children, handleClose }) => {
  const showClass = show ? "c-modal" : "c-modal c-modal--close";
  const title = modalTitle ? (
    <h2 className="c-modal__title">{modalTitle}</h2>
  ) : (
    ""
  );

  return (
    <div className={showClass}>
      <div className="c-modal__container">
        {title}
        {children}
        <i
          className="fa fa-times c-modal__button-close"
          onClick={handleClose}
        ></i>
      </div>
    </div>
  );
};

export { Modal, ModalContent };
