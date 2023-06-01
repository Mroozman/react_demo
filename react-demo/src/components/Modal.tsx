import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal = ({ closeModal, children }: Props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};
export default Modal;
