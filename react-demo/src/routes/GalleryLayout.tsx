import GallerySection from '../components/Gallery/GallerySection';
import PhotoModalData from '../dataModels/PhotoModalData';
const GalleryLayout = () => {
  return <GallerySection />;
};
export default GalleryLayout;

export function loader(): PhotoModalData[] {
  const picturesForGallery: string[] = [
    require('../images/ja.jpg'),
    require('../images/gallery.jpg'),
    require('../images/wide.jpg'),
    require('../images/gmail.png'),
    require('../images/reactLogo.png'),
    require('../images/laptop.jpg'),
    require('../images/messenger.png'),
    require('../images/kontakt.jpg'),
  ];

  const convertToPhotoModalData = (photosUrls: string[]): PhotoModalData[] => {
    if (photosUrls.length === 1) {
      return [{ photoId: 1, photoUrl: photosUrls[0] } as PhotoModalData];
    } else {
      return photosUrls.map((url: string, index: number) => {
        return { photoId: index + 1, photoUrl: url } as PhotoModalData;
      });
    }
  };

  const photos: PhotoModalData[] = convertToPhotoModalData(picturesForGallery);

  return photos;
}
