import React from 'react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Pagination.module.css';

type Props = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (settedPage: number) => void;
};

const Pagination = ({ nPages, currentPage, setCurrentPage }: Props) => {
  const { t } = useTranslation();
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = (): void => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (): void => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.paginationList}>
      <button className={styles.paginationButton} onClick={prevPage}>
        {t('previous')}
      </button>
      {pageNumbers.map((pageNumber: number, index: number): ReactNode => {
        if (currentPage === index + 1) {
          return (
            <button
              className={styles.paginationButtonActive}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        } else {
          return (
            <button
              className={styles.paginationButton}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        }

        // return
        // {
        //   currentPage !== index ? (
        //     <button
        //       className={styles.paginationButton}
        //       onClick={() => setCurrentPage(pageNumber)}
        //     >
        //       {pageNumber}
        //     </button>
        //   ) : (
        //     <button
        //       className={styles.paginationButtonActive}
        //       onClick={() => setCurrentPage(pageNumber)}
        //     >
        //       {pageNumber}
        //     </button>
        //   );
        // }
      })}
      <button className={styles.paginationButton} onClick={nextPage}>
        {t('next')}
      </button>
    </div>
  );
};

export default Pagination;
