import styles from './Modal.module.css';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal = ({ closeModal, children }: Props) => {
  const { t } = useTranslation();

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
