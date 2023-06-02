import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import Languages from './Languages';

describe('Languages component', () => {
  test('display language names in english language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Languages />
      </I18nextProvider>
    );
    const englishButton = screen.getByTestId('english');
    const polishButton = screen.getByTestId('polish');
    expect(englishButton).toHaveTextContent('english');
    expect(polishButton).toHaveTextContent('polish');
  });

  test('display language names in polish language after click on polish button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Languages />
      </I18nextProvider>
    );
    const englishButton = screen.getByTestId('english');
    const polishButton = screen.getByTestId('polish');
    fireEvent(
      polishButton,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    expect(englishButton).toHaveTextContent('angielski');
    expect(polishButton).toHaveTextContent('polski');
  });
});
