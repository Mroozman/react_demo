import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './Contacts';

const writeText = jest.fn();

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('Contacts component', () => {
  test('copy the email after clicking on it', async () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Contacts />
        </I18nextProvider>
      </BrowserRouter>
    );
    const email = screen.getByTestId('email');
    fireEvent.click(email);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'mrozman24@gmail.com'
    );
  });

  test('linkedin link redirects to the correct page', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Contacts />
        </I18nextProvider>
      </BrowserRouter>
    );
    const linkedinLink = screen.getByTestId('linkedin');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/maciej-mr%C3%B3z-993b92206/'
    );
  });

  test('messenger link redirects to the correct page', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Contacts />
        </I18nextProvider>
      </BrowserRouter>
    );
    const messengerLink = screen.getByTestId('messenger');
    expect(messengerLink).toHaveAttribute('href', 'https://m.me/mroozman');
  });
});
