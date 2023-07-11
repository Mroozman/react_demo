import styles from './GallerySection.module.css';
import PhotoModalData from '../../dataModels/PhotoModalData';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { useTranslation } from 'react-i18next';
const GallerySection = () => {
  const { t } = useTranslation();
  const photos: PhotoModalData[] = useLoaderData() as PhotoModalData[];
  const [hoverIndex, setHoverIndex] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  const mouseEnterHandler = (index: number): void => {
    setHoverIndex(index);
  };

  const mouseLeaveHandler = (): void => {
    setHoverIndex(undefined);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = photos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(photos.length / recordsPerPage);

  return (
    <div className={styles.gallery}>
      <div className="left"></div>
      <div className={styles.gallerySection}>
        <Outlet />
        {currentRecords.map((photo: PhotoModalData, index: number) => {
          return (
            <Link
              style={{
                maxWidth: '200px',
                maxHeight: '200px',
                minWidth: '200px',
                minHeight: '200px',
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
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className={styles.dynamicGalleryLinkWrap}>
          <Link className={styles.dynamicGalleryLink} to={'../dynamic-gallery'}>
            {t('dynamicGallery')}
          </Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default GallerySection;
