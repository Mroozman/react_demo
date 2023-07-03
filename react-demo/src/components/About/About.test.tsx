import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('About component', () => {
  test('is displaing my name', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Maciej Mróz')).toBeInTheDocument();
  });

  test('is displaing my photo', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </BrowserRouter>
    );
    const displayedImage = screen.getByAltText('My photo');
    expect(displayedImage).toBeInTheDocument();
  });

  test('is displaing personal text', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </BrowserRouter>
    );
    const personalText = screen.getByTestId('personalText');
    expect(personalText).toBeInTheDocument();
  });

  test('is redirecting to github page', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </BrowserRouter>
    );
    const githubButton = screen.getByTestId('githubButton');
    expect(githubButton).toHaveAttribute('href', 'https://github.com/Mroozman');
  });

  test('is allowing to download my CV', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </BrowserRouter>
    );
    const cvButton = screen.getByTestId('cvButton');
    expect(cvButton).toHaveAttribute('href', '/files/Maciej Mróz CV eng.pdf');
  });
});
