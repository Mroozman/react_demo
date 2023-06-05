import { useTranslation } from 'react-i18next';
import styles from './Languages.module.css';
const Languages = () => {
  const { t, i18n } = useTranslation();
  const changeToPolishHandler = () => {
    i18n.changeLanguage('pl');
  };

  const changeToEnglishHandler = () => {
    i18n.changeLanguage('en');
  };
  return (
    <div className={styles.languages}>
      <button
        onClick={changeToPolishHandler}
        className={styles.langButton}
        data-testid="polish"
      >
        {t('polish')}
      </button>{' '}
      |
      <button
        onClick={changeToEnglishHandler}
        className={styles.langButton}
        data-testid="english"
      >
        {t('english')}
      </button>
    </div>
  );
};
export default Languages;
