import PhotoModalData from '../../dataModels/PhotoModalData';
import PhotoModal from '../Modals/PhotoModal';
import { useLoaderData } from 'react-router-dom';

const GalleryModal = () => {
  const photos: PhotoModalData[] = useLoaderData() as PhotoModalData[];
  return <PhotoModal photos={photos} />;
};
export default GalleryModal;
