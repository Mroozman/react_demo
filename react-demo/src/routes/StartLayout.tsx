import WelcomeSection from '../components/StartPage/WelcomeSection';
import BoxButtonsSection from '../components/StartPage/BoxButtonSection';
import styles from './StartLayout.module.css';
const StartLayout = () => {
  return (
    <span className={styles.startLayout}>
      <WelcomeSection />
      <BoxButtonsSection />
    </span>
  );
};
export default StartLayout;
