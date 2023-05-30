import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import BoxButtonsSection from './components/BoxButtonSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
