import React from 'react';
import PhotoModalData from '../../dataModels/PhotoModalData';
import PhotoModal from '../Modals/PhotoModal';
import { useOutletContext } from 'react-router-dom';

const DynamicGalleryModal = () => {
  const catPhotosContext = useOutletContext<[PhotoModalData[]]>();
  const photos = catPhotosContext[0];
  return <PhotoModal photos={photos} />;
};

export default DynamicGalleryModal;
