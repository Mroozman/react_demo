import styles from './Footer.module.css';

type Props = {
  openAttributesModal: () => void;
};

const Footer = ({ openAttributesModal }: Props) => {
  return (
    <>
      <div className={styles.footer}>
        <div className="left"></div>
        <div className={styles.footerText}>Maciej Mróz 2023</div>
        <div className={styles.attributes}>
          <button
            className={styles.attributesButton}
            onClick={openAttributesModal}
          >
            Attributes
          </button>
        </div>
      </div>
    </>
  );
};
export default Footer;
