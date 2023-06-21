import styles from './GallerySection.module.css';
import PhotoModalData from '../../dataModels/PhotoModalData';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
const GallerySection = () => {
  const photos: PhotoModalData[] = useLoaderData() as PhotoModalData[];
  const [hoverIndex, setHoverIndex] = useState<number>();

  const mouseEnterHandler = (index: number): void => {
    setHoverIndex(index);
  };

  const mouseLeaveHandler = (): void => {
    setHoverIndex(undefined);
  };

  return (
    <div className={styles.gallery}>
      <div className="left"></div>
      <div className={styles.gallerySection}>
        <Outlet />
        {photos.map((photo: PhotoModalData, index: number) => {
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
                opacity: index === hoverIndex ? '70%' : '100%',
                border:
                  index === hoverIndex
                    ? '2px solid #9fd3c7'
                    : '2px solid black',
                margin: '10px 10px',
              }}
              onMouseEnter={() => mouseEnterHandler(index)}
              onMouseLeave={mouseLeaveHandler}
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
