import styles from './Contacts.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contacts = () => {
  const { t } = useTranslation();
  const copyMailStyles = `${styles.contactInfo} ${styles.copyMail}`;
  const [copyMessage, setCopyMessage] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText('mrozman24@gmail.com');
    setCopyMessage(true);
    const timer = setTimeout(() => {
      setCopyMessage(false);
    }, 1500);
  };

  return (
    <>
      <div className={styles.contactsSeciton}>
        <div className="left"></div>
        <div className={styles.contacts}>
          <h1>{t('contactTitle')}</h1>
          <Link
            className={styles.socialLink}
            to="https://www.linkedin.com/in/maciej-mr%C3%B3z-993b92206/"
            target="_blank"
          >
            <h2 className={styles.contactInfo}>
              <img
                className={styles.linkedinLogo}
                src={require('../images/linkedin.png')}
              />
              Linkedin
            </h2>
          </Link>
          <Link
            className={styles.socialLink}
            to="https://m.me/mroozman"
            target="_blank"
          >
            <h2 className={styles.contactInfo}>
              <img
                className={styles.messengerLogo}
                src={require('../images/messenger.png')}
              />
              Messenger
            </h2>
          </Link>
          <h2 onClick={copyMail} className={copyMailStyles}>
            <img
              className={styles.gmailLogo}
              src={require('../images/gmail.png')}
            />
            Mrozman24@gmail.com
          </h2>
          {copyMessage && <p className={styles.copiedMessage}>{t('copied')}</p>}
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};
export default Contacts;
