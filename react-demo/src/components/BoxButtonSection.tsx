import styles from './BoxButtonsSection.module.css';
import BoxButton from './BoxButton';

const BoxButtonsSection = () => {
  const dogeExamplePicture = require('../images/doge.png');
  return (
    <div className={styles.boxButtons}>
      <div className={styles.boxButtonsRow}>
        <div className={styles.left}></div>
        <div className={styles.center}>
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
        <div className={styles.right}></div>
      </div>
      <div className={styles.boxButtonsRow}>
        <div className={styles.left}></div>
        <div className={styles.center}>
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
        <div className={styles.right}></div>
      </div>
    </div>
  );
};
export default BoxButtonsSection;
