import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n/i18n';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import StartLayout from './routes/StartLayout';
import AboutLayout from './routes/AboutLayout';
import APILayout, { loader as weatherLoader } from './routes/APILayout';
import GalleryLayout, { loader as galleryLoader } from './routes/GalleryLayout';
import ContactLayout from './routes/ContactLayout';
import GalleryModal from './components/Gallery/GalleryModal';
import DynamicGalleryLayout, {
  loader as dynamicGalleryLoader,
} from './routes/DynamicGalleryLayout';
import DynamicGalleryModal from './components/Gallery/DynamicGalleryModal';

const router = createHashRouter([
  {
    path: '/router_demo',
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
        loader: weatherLoader,
      },
      {
        path: 'gallery',
        element: <GalleryLayout />,
        loader: galleryLoader,
        children: [
          {
            path: ':photoId',
            element: <GalleryModal />,
            loader: galleryLoader,
          },
        ],
      },
      {
        path: 'dynamic-gallery',
        element: <DynamicGalleryLayout />,
        loader: dynamicGalleryLoader,
        children: [
          {
            path: ':photoId',
            element: <DynamicGalleryModal />,
            loader: dynamicGalleryLoader,
          },
        ],
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
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
