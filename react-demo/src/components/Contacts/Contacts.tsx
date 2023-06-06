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
    setTimeout(() => {
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
            data-testid="linkedin"
          >
            <h2 className={styles.contactInfo}>
              <img
                className={styles.linkedinLogo}
                alt={t('alt.linkedin') as string}
                src={require('../../images/linkedin.png')}
              />
              Linkedin
            </h2>
          </Link>
          <Link
            className={styles.socialLink}
            to="https://m.me/mroozman"
            target="_blank"
            data-testid="messenger"
          >
            <h2 className={styles.contactInfo}>
              <img
                className={styles.messengerLogo}
                alt={t('alt.messenger') as string}
                src={require('../../images/messenger.png')}
              />
              Messenger
            </h2>
          </Link>
          <h2 onClick={copyMail} className={copyMailStyles} data-testid="email">
            <img
              className={styles.gmailLogo}
              alt={t('alt.gmail') as string}
              src={require('../../images/gmail.png')}
            />
            Mrozman24@gmail.com
          </h2>
          {copyMessage && (
            <p className={styles.copiedMessage} data-testid="copied">
              {t('copied')}
            </p>
          )}
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};
export default Contacts;
