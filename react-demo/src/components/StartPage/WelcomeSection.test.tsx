import { render, screen } from '@testing-library/react';
import WelcomeSection from './WelcomeSection';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

describe('WelcomeSection component', () => {
  test('renders "welcome" title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <WelcomeSection />
      </I18nextProvider>
    );
    expect(screen.getByTestId('welcomeTitle')).toHaveTextContent('Welcome!');
  });
  test('renders introduction text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <WelcomeSection />
      </I18nextProvider>
    );
    expect(screen.getByTestId('welcomeText')).toHaveTextContent('frontend app');
  });
});
