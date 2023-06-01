import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Attributes from './components/Attributes';
import { useState } from 'react';
function App() {
  const { t } = useTranslation();
  const [attributesVisible, setAttributesVisible] = useState(true);

  const toggleAttributesModal = (): void => {
    setAttributesVisible((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Header />
      {attributesVisible && <Attributes closeModal={toggleAttributesModal} />}
      <Outlet />
      <Footer openAttributesModal={toggleAttributesModal} />
    </div>
  );
}

export default App;
