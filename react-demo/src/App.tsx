import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return <div>{t('init')}</div>;
}

export default App;
