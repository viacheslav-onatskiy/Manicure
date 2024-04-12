import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDimension } from '../../../helpers/useDimension';
import { PaginationButton, PaginationWrapper } from './styles';

interface Page {
  page: number;
  value: boolean;
}

interface PagerState {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: Page[];
}

interface PaginationProps {
  totalItems: number;
  getItems: (page: number, pageSize: number) => void;
}

interface PaginationProps {
  totalItems: number;
  getItems: (page: number, pageSize: number) => void;
}

const Pagination: FC<PaginationProps> = React.memo(({ totalItems, getItems }) => {
  const { t } = useTranslation();
  const { isTablet } = useDimension();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagerState, setPagerState] = useState<PagerState | null>(null);
  const currentPage: number = Number(searchParams.get('page')) || 1;
  const pageSize: number = Number(searchParams.get('pageSize')) || 10;

  const getPager = (): PagerState => {
    const totalPages: number = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
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

    const startIndex: number = (currentPage - 1) * pageSize;
    const endIndex: number = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages: Page[] = [...Array(endPage + 1 - startPage).keys()]
      .map((i: number) => {
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
      })
      .filter((page) => page !== null) as Page[];

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

  const isActivePage = (page: Page): boolean => page.value && currentPage === page.page;

  const getInitialPages = () => {
    setSearchParams({ page: currentPage.toString(), pageSize: pageSize.toString() });
    const pager = getPager();

    setPagerState(pager);
  };

  const setPage = (page: number) => {
    setSearchParams({
      ...searchParams,
      page: page.toString(),
      pageSize: pageSize.toString()
    });
    const pager = getPager();

    if (page < 1 || page > pager.totalItems) {
      return;
    }
    setPagerState(pager);
    getItems(page, pageSize);
  };

  useEffect(() => {
    getInitialPages();
  }, []);

  if (!pagerState?.pages || pagerState?.pages.length <= 1) {
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

      {pagerState?.pages?.map((page: Page, i: number) => (
        <PaginationButton
          key={`page-${i}`}
          onClick={() => {
            page.value && setPage(page.page);
          }}
          className={`${!page.value ? 'disabled' : ''}
          ${isActivePage(page) ? 'active' : ''}`}
          variant={page.value ? 'outlined' : 'default'}
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
            disabled={currentPage === pagerState.totalPages}
          >
            &#11208;
          </PaginationButton>
          <PaginationButton
            variant="outlined"
            onClick={() => setPage(pagerState.totalPages)}
            disabled={currentPage === pagerState.totalPages}
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
