import styles from './BoxButtonsSection.module.css';
import BoxButton from './BoxButton';

const BoxButtonsSection = () => {
  const dogeExamplePicture = require('../images/doge.png');
  return (
    <div className={styles.boxButtons}>
      <div className={styles.boxButtonsRow}>
        <div className="left"></div>
        <div className="center">
          <span className={styles.appearLeft}>
            <BoxButton
              textForButton="Example"
              pictureForButton={dogeExamplePicture}
            ></BoxButton>
          </span>
          <span className={styles.appearRight}>
            <BoxButton
              textForButton="Example"
              pictureForButton={dogeExamplePicture}
            ></BoxButton>
          </span>
        </div>
        <div className="right"></div>
      </div>
      <div className={styles.boxButtonsRow}>
        <div className="left"></div>
        <div className="center">
          <span className={styles.appearLeft}>
            <BoxButton
              textForButton="Example"
              pictureForButton={dogeExamplePicture}
            ></BoxButton>
          </span>
          <span className={styles.appearRight}>
            <BoxButton
              textForButton="Example"
              pictureForButton={dogeExamplePicture}
            ></BoxButton>
          </span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
export default BoxButtonsSection;
