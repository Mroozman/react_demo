import styles from './PhotoModal.module.css';
import PhotoModalData from '../../dataModels/PhotoModalData';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
type Props = {
  photos: PhotoModalData[];
};

const PhotoModal = ({ photos }: Props) => {
  const params = useParams();
  const navigate = useNavigate();

  const [currentPhoto, setCurrentPhoto] = useState<PhotoModalData>(
    photos.filter((photo: PhotoModalData) => {
      return photo.photoId.toString() === params.photoId;
    })[0]
  );

  const closeModalHandler = () => {
    navigate('..');
  };

  useEffect(() => {
    const path = window.location.pathname.substring(
      1,
      window.location.pathname.lastIndexOf('/')
    );
    navigate(`/${path}/${currentPhoto.photoId}`);
  }, [navigate, currentPhoto]);

  const getFirstPhoto = (): PhotoModalData => {
    return photos.filter((photo: PhotoModalData) => {
      return photo.photoId === 1;
    })[0];
  };

  const nextPictureHandler = (): void => {
    if (currentPhoto.photoId === photos.length) {
      setCurrentPhoto(getFirstPhoto());
    } else {
      setCurrentPhoto((prevPhoto: PhotoModalData) => {
        return photos.filter((photo: PhotoModalData) => {
          return photo.photoId === prevPhoto.photoId + 1;
        })[0];
      });
    }
  };

  const getLastPhoto = (): PhotoModalData => {
    return photos.filter((photo: PhotoModalData) => {
      return photo.photoId === photos.length;
    })[0];
  };

  const previousPictureHandler = (): void => {
    if (currentPhoto.photoId === 1) {
      setCurrentPhoto(getLastPhoto());
    } else {
      setCurrentPhoto((prevPhoto: PhotoModalData) => {
        return photos.filter((photo: PhotoModalData) => {
          return photo.photoId === prevPhoto.photoId - 1;
        })[0];
      });
    }
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <dialog open className={styles.modalForPhoto}>
        <button className={styles.photoButton} onClick={previousPictureHandler}>
          {'<'}
        </button>
        <div>
          <img
            className={styles.modalPhoto}
            src={currentPhoto.photoUrl}
            alt={currentPhoto.photoUrl}
          ></img>
        </div>
        <button className={styles.photoButton} onClick={nextPictureHandler}>
          {'>'}
        </button>
      </dialog>
    </>
  );
};
export default PhotoModal;
