import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import BoxButtonsSection from './components/BoxButtonSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <Header />
      <WelcomeSection />
      <BoxButtonsSection />
      <Footer />
    </div>
  );
}

export default App;
