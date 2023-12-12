import React, { useState, useEffect, useCallback } from 'react';
import { PaginationButton, PaginationWrapper } from './styles';

const Pagination = ({
  items,
  pageSize,
  initialPage = 1,
  onChangePage,
  setActivePage,
  activePage,
  paginationReset,
  setPaginationReset
}) => {
  const [pagerState, setPagerState] = useState({});

  const setPage = useCallback(
    (page, size) => {
      const pager = getPager(items.length, page, size);

      if (page < 1 || page > pager.totalPages) {
        return;
      }
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      setActivePage(page);
      setPagerState(pager);

      onChangePage(pageOfItems);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  useEffect(() => {
    if (items && items.length) {
      if (paginationReset) {
        setPage(initialPage, pageSize);
      } else {
        setPage(activePage, pageSize);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPage, items, pageSize, setPage]);

  const getPager = (totalItems, currentPage = 1, pageSize) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 6) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
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
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  if (!pagerState.pages || pagerState.pages.length <= 1) {
    return null;
  }

  const isActivePage = (page) => {
    if (page.value) {
      if (pagerState.currentPage === page.page) {
        return true;
      }
    }
    return false;
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => setPage(1, pagerState.pageSize)}>
        First
      </PaginationButton>
      <PaginationButton
        onClick={() => {
          setPaginationReset(true);
          setPage(pagerState.currentPage - 1, pagerState.pageSize);
        }}
      >
        &#11207;
      </PaginationButton>

      {pagerState.pages.map((page, i) => (
        <PaginationButton
          active={page.value && pagerState.currentPage === page.page}
          key={`page-${i}`}
          onClick={() => {
            setPaginationReset(true);
            page.value && setPage(page.page, pagerState.pageSize);
          }}
          className={`${!page.value ? 'disabled' : ''} ${
            isActivePage(page) ? 'active' : ''
          }`}
        >
          {page.value ? page.page : '...'}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => {
          setPaginationReset(true);
          setPage(pagerState.currentPage + 1, pagerState.pageSize);
        }}
      >
        &#11208;
      </PaginationButton>
      <PaginationButton
        onClick={() => setPage(pagerState.totalPages, pagerState.pageSize)}
      >
        Last
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;