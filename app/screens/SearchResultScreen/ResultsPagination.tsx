import { FC } from 'react';

interface ResultsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ResultsPagination: FC<ResultsPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-500 text-white focus:outline-none'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination flex items-center justify-center mt-6">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="px-3 py-1 mr-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
      >
        Previous
      </button>
      {getPageNumbers()}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="px-3 py-1 ml-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default ResultsPagination;
