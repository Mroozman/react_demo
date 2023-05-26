import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="app"></div>
    </>
  );
}

export default App;
