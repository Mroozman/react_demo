import WelcomeSection from '../components/WelcomeSection';
import BoxButtonsSection from '../components/BoxButtonSection';
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
