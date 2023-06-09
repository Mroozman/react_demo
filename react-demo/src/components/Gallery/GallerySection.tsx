import styles from './GallerySection.module.css';
import PhotoModalData from '../../dataModels/PhotoModalData';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
const GallerySection = () => {
  const photos: PhotoModalData[] = useLoaderData() as PhotoModalData[];

  return (
    <div className={styles.gallery}>
      <div className="left"></div>
      <div className={styles.gallerySection}>
        <Outlet />
        {photos.map((photo: PhotoModalData) => {
          return (
            <Link
              style={{
                maxWidth: '200px',
                maxHeight: '200px',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${photo.photoUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid black',
                margin: '10px 10px',
              }}
              to={photo.photoId.toString()}
              key={photo.photoId}
            ></Link>
          );
        })}
      </div>
      <div className="right"></div>
    </div>
  );
};
export default GallerySection;
