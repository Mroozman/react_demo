import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

describe('HeaderMenu component', () => {
  test('redirects to correct path after clicking about button', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <HeaderMenu />
        </I18nextProvider>
      </BrowserRouter>
    );
    const aboutButton = screen.getByTestId('about');
    fireEvent.click(aboutButton);
    expect(global.window.location.href).toContain('http://localhost/about');
  });
  test('redirects to correct path after clicking api button', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <HeaderMenu />
        </I18nextProvider>
      </BrowserRouter>
    );
    const apiButton = screen.getByTestId('api');
    fireEvent.click(apiButton);
    expect(global.window.location.href).toContain('http://localhost/api');
  });
  test('redirects to correct path after clicking gallery button', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <HeaderMenu />
        </I18nextProvider>
      </BrowserRouter>
    );
    const galleryButton = screen.getByTestId('gallery');
    fireEvent.click(galleryButton);
    expect(global.window.location.href).toContain('http://localhost/gallery');
  });
  test('redirects to correct path after clicking contact button', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <HeaderMenu />
        </I18nextProvider>
      </BrowserRouter>
    );
    const contectButton = screen.getByTestId('contact');
    fireEvent.click(contectButton);
    expect(global.window.location.href).toContain('http://localhost/contact');
  });
});
