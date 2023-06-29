import styles from './BoxButtonsSection.module.css';
import BoxButton from './BoxButton';
import { useTranslation } from 'react-i18next';

const BoxButtonsSection = () => {
  const { t } = useTranslation();
  const aboutPicture = require('../../images/laptop.jpg');
  const apiPicture = require('../../images/api.jpg');
  const galleryPicture = require('../../images/gallery.jpg');
  const contactPicture = require('../../images/kontakt.jpg');
  return (
    <div className={styles.boxButtons}>
      <div className={styles.boxButtonsRow}>
        <div className="left"></div>
        <div className={styles.center}>
          <span className={styles.appearLeft}>
            <BoxButton
              pathForButton="about"
              textForButton={t('about')}
              pictureForButton={aboutPicture}
            ></BoxButton>
          </span>
          <span className={styles.appearRight}>
            <BoxButton
              pathForButton="api"
              textForButton="API"
              pictureForButton={apiPicture}
            ></BoxButton>
          </span>
        </div>
        <div className="right"></div>
      </div>
      <div className={styles.boxButtonsRow}>
        <div className="left"></div>
        <div className={styles.center}>
          <span className={styles.appearLeft}>
            <BoxButton
              pathForButton="gallery"
              textForButton={t('gallery')}
              pictureForButton={galleryPicture}
            ></BoxButton>
          </span>
          <span className={styles.appearRight}>
            <BoxButton
              pathForButton="/contact"
              textForButton={t('contact')}
              pictureForButton={contactPicture}
            ></BoxButton>
          </span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
export default BoxButtonsSection;
