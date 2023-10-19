import { ModalStyled } from "../styles/ModalStyles";
const Modal = ({ message }) => {
  return (
    <ModalStyled>
      <span>{message}</span>
    </ModalStyled>
  );
};
export default Modal;
