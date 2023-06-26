import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhotoModalData from '../../dataModels/PhotoModalData';
import ApiCatPhoto from '../../dataModels/ApiCatPhoto';
import styles from './DynamicGallerySection.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const DynamicGallerySection = () => {
  const apiCatPhotos: ApiCatPhoto[] = useLoaderData() as ApiCatPhoto[];
  const [catPhotos, setCatPhotos] = useState<PhotoModalData[]>(
    apiCatPhotos.map((catPhoto: ApiCatPhoto, index: number) => {
      return { photoId: index + 1, photoUrl: catPhoto.url } as PhotoModalData;
    })
  );
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
  const currentRecords = catPhotos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(catPhotos.length / recordsPerPage);

  return (
    <div className={styles.gallery}>
      <div className="left"></div>
      <div className={styles.gallerySection}>
        <Outlet context={[catPhotos]} />
        {currentRecords.map((photo: PhotoModalData, index: number) => {
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
                opacity: photo.photoId === hoverIndex ? '70%' : '100%',
                border:
                  photo.photoId === hoverIndex
                    ? '2px solid #9fd3c7'
                    : '2px solid black',
                margin: '10px 10px',
              }}
              onMouseEnter={() => mouseEnterHandler(photo.photoId)}
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
      </div>
      <div className="right"></div>
    </div>
  );
};

export default DynamicGallerySection;
