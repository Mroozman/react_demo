import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('redirects to correct path after clicking logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const reactLogo = screen.getByTestId('reactLogo');
    fireEvent.click(reactLogo);
    expect(global.window.location.href).toContain('http://localhost/');
  });
});
