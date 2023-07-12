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
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.paginationList}>
      {nPages > 1 && (
        <button
          disabled={currentPage === 1 ? true : false}
          className={styles.paginationButton}
          onClick={prevPage}
          key="previous"
        >
          {window.innerWidth < 430 ? '<' : t('previous')}
        </button>
      )}
      {pageNumbers.map((pageNumber: number, index: number): ReactNode => {
        if (currentPage === index + 1) {
          return (
            <button
              key={index + 1}
              className={styles.paginationButtonActive}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        } else {
          return (
            <button
              key={index + 1}
              className={styles.paginationButton}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        }
      })}
      {nPages > 1 && (
        <button
          disabled={currentPage === nPages ? true : false}
          className={styles.paginationButton}
          onClick={nextPage}
          key="next"
        >
          {window.innerWidth < 430 ? '>' : t('next')}
        </button>
      )}
    </div>
  );
};

export default Pagination;
