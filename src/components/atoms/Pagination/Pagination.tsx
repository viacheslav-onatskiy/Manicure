import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDimension } from '../../../helpers/useDimension';
import { PaginationButton, PaginationWrapper } from './styles';

interface PaginationProps {
  totalItems: number;
  getItems: (page: number, pageSize: number) => void;
}

const Pagination: FC<PaginationProps> = React.memo(({ totalItems, getItems }) => {
  const { t } = useTranslation();
  const { isTablet } = useDimension();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagerState, setPagerState] = useState({}) as any;
  const currentPage: any = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;
  const { pages, totalPages } = pagerState;

  const getPager = () => {
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: any, endPage;
    if (totalPages <= 6) {
      // less than 6 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 6 total pages so calculate start and end pages
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 7;
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 6;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 3;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => {
      const START_PAGE = 1;
      const currentPageCondition = currentPage >= 5;
      const lastPagesCondition = currentPage + 3 >= totalPages;

      if (i === 0) {
        return { page: START_PAGE, value: true };
      }

      if (currentPageCondition && i === 1) {
        return { page: startPage + i, value: false };
      }

      if (lastPagesCondition && i >= 4) {
        return { page: startPage + i, value: true };
      }

      if (i < 5) {
        return { page: startPage + i, value: true };
      }

      if (i < 6) {
        return { page: startPage + i, value: false };
      }

      if (i === 6) {
        return { page: totalPages, value: true };
      }

      return null;
    });

    return {
      totalItems,
      currentPage,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  };

  const isActivePage = (page: any) => page.value && currentPage === page.page;

  const getInitialPages = () => {
    setSearchParams({ page: currentPage, pageSize } as any);
    const pager = getPager();

    setPagerState(pager);
  };

  const setPage = (page: any) => {
    setSearchParams({ ...searchParams, page, pageSize } as any);
    const pager = getPager();

    if (page < 1 || page > pager.totalItems) {
      return;
    }
    setPagerState(pager);
    getItems(page, pageSize);
  };

  useEffect(() => {
    getInitialPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pages || pages.length <= 1) {
    return null;
  }

  return (
    <PaginationWrapper>
      {!isTablet && (
        <>
          <PaginationButton
            variant="outlined"
            onClick={() => setPage(1)}
            disabled={currentPage === 1}
          >
            {t('pagination.first')}
          </PaginationButton>

          <PaginationButton
            variant="outlined"
            onClick={() => {
              setPage(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            &#11207;
          </PaginationButton>
        </>
      )}

      {pagerState?.pages?.map((page: any, i: any) => (
        <PaginationButton
          key={`page-${i}`}
          onClick={() => {
            page.value && setPage(page.page);
          }}
          className={`${!page.value ? 'disabled' : ''}
          ${isActivePage(page) ? 'active' : ''}`}
          variant={page.value ? 'outlined' : ''}
        >
          {page.value ? page.page : '...'}
        </PaginationButton>
      ))}

      {!isTablet && (
        <>
          <PaginationButton
            variant="outlined"
            onClick={() => {
              setPage(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
          >
            &#11208;
          </PaginationButton>
          <PaginationButton
            variant="outlined"
            onClick={() => setPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            {t('pagination.last')}
          </PaginationButton>
        </>
      )}
    </PaginationWrapper>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;
