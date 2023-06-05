import styles from './Attributes.module.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';

type Props = {
  closeModal: () => void;
};

const Attributes = ({ closeModal }: Props) => {
  return (
    <Modal closeModal={closeModal}>
      {/* Attributes are not translated */}
      <div className={styles.attributes}>
        <h3>Icons on this site was provided by authors from Flaticon:</h3>
        <Link
          className={styles.attributeLink}
          to="https://www.flaticon.com/free-icons/cv"
          title="CV icons"
          target="_blank"
        >
          CV icons created by Freepik - Flaticon
        </Link>
        <Link
          className={styles.attributeLink}
          to="https://www.flaticon.com/free-icons/github"
          title="github icons"
          target="_blank"
        >
          Github icons created by Laisa Islam Ani - Flaticon
        </Link>
        <Link
          className={styles.attributeLink}
          to="https://www.flaticon.com/free-icons/gmail"
          title="gmail icons"
          target="_blank"
        >
          Gmail icons created by Freepik - Flaticon
        </Link>
        <Link
          className={styles.attributeLink}
          to="https://www.flaticon.com/free-icons/linkedin"
          title="linkedin icons"
          target="_blank"
        >
          Linkedin icons created by Freepik - Flaticon
        </Link>
        <Link
          className={styles.attributeLink}
          to="https://www.flaticon.com/free-icons/facebook"
          title="facebook icons"
          target="_blank"
        >
          Facebook icons created by Pixel perfect - Flaticon
        </Link>
      </div>
    </Modal>
  );
};
export default Attributes;
