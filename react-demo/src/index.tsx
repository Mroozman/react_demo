import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n/i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartLayout from './routes/StartLayout';
import AboutLayout from './routes/AboutLayout';
import APILayout from './routes/APILayout';
import GalleryLayout from './routes/GalleryLayout';
import ContactLayout from './routes/ContactLayout';
import { HashRouter as Router } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <StartLayout />,
      },
      {
        path: 'about',
        element: <AboutLayout />,
      },
      {
        path: 'api',
        element: <APILayout />,
      },
      {
        path: 'gallery',
        element: <GalleryLayout />,
      },
      {
        path: 'contact',
        element: <ContactLayout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);
