import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import BoxButton from './BoxButton';
import { BrowserRouter } from 'react-router-dom';
describe('BoxButton component', () => {
  const mockTextForButton = 'testText';
  const mockPictureForButton = '../images/gallery.jpg';
  const mockPathForButton = '/testPath';

  render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <BoxButton
          textForButton={mockTextForButton}
          pictureForButton={mockPictureForButton}
          pathForButton={mockPathForButton}
        />
      </I18nextProvider>
    </BrowserRouter>
  );
  const boxButton = screen.getByTestId('boxButton');

  test('renders box button with correct text', () => {
    expect(boxButton).toHaveTextContent('testText');
  });

  test('renders box button with no picture', () => {
    expect(boxButton).toHaveStyle(`background-image: none`);
  });

  test('renders box button with picture after hover', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <BoxButton
            textForButton={mockTextForButton}
            pictureForButton={mockPictureForButton}
            pathForButton={mockPathForButton}
          />
        </I18nextProvider>
      </BrowserRouter>
    );
    const boxButtonHover = screen.getByTestId('boxButton');
    fireEvent.mouseEnter(boxButtonHover);
    expect(boxButtonHover).toHaveStyle(
      `background-image: url(${mockPictureForButton})`
    );
  });
});
