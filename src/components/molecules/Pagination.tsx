import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showEllipsis?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showEllipsis = true,
  className = '',
}) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 5; // Maximum number of page buttons to show
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of visible pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the start
      if (currentPage <= 3) {
        startPage = 2;
        endPage = Math.min(totalPages - 1, maxVisiblePages - 1);
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - maxVisiblePages + 2);
        endPage = totalPages - 1;
      }
      
      // Add ellipsis before middle pages if needed
      if (startPage > 2 && showEllipsis) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis after middle pages if needed
      if (endPage < totalPages - 1 && showEllipsis) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };
  
  // If only one page, don't show pagination
  if (totalPages <= 1) {
    return null;
  }
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center h-10 w-10 rounded-md mr-2 transition-colors duration-200 
          ${currentPage === 1 
            ? 'text-neutral-medium bg-neutral-light dark:bg-neutral-dark cursor-not-allowed' 
            : 'text-neutral-dark bg-white hover:bg-primary hover:text-white dark:bg-neutral-dark dark:text-neutral-light dark:hover:bg-primary-light'}`}
        aria-label="Previous page"
      >
        <FaChevronLeft />
      </button>
      
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          disabled={page === '...'}
          className={`flex items-center justify-center h-10 w-10 mx-1 rounded-md transition-colors duration-200
            ${page === currentPage
              ? 'bg-primary text-white dark:bg-primary-light'
              : page === '...'
                ? 'cursor-default text-neutral-dark dark:text-neutral-light'
                : 'text-neutral-dark bg-white hover:bg-primary/10 dark:bg-neutral-dark dark:text-neutral-light dark:hover:bg-primary-dark/30'}`}
          aria-label={typeof page === 'number' ? `Page ${page}` : 'More pages'}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center h-10 w-10 rounded-md ml-2 transition-colors duration-200
          ${currentPage === totalPages
            ? 'text-neutral-medium bg-neutral-light dark:bg-neutral-dark cursor-not-allowed'
            : 'text-neutral-dark bg-white hover:bg-primary hover:text-white dark:bg-neutral-dark dark:text-neutral-light dark:hover:bg-primary-light'}`}
        aria-label="Next page"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination; 