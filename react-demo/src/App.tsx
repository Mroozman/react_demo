import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Attributes from './components/Footer/Attributes';
import { useState } from 'react';
function App() {
  const [attributesVisible, setAttributesVisible] = useState(false);

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
