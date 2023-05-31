import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
