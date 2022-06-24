import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const Backdrop = (props) => {
    return (
      <div className={classes.backdrop} onClick={props.oncloseOverlay}></div>
    );
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const modalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop oncloseOverlay={props.oncloseOverlay} />,
        modalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
      )}
    </>
  );
};
export default Modal;
