
import left from "../../assets/chevron-left.svg"
import right from "../../assets/chevron-right.svg"

import React, { useState } from "react";
import "./Pagination.css"
interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Always show first two
    pages.push(1, 2);

    if (currentPage > 4) {
      pages.push("…"); // left ellipsis
    }

    // Middle pages around current
    const start = Math.max(3, currentPage - 1);
    const end = Math.min(totalPages - 2, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("…"); // right ellipsis
    }

    // Always show last two
    pages.push(totalPages - 1, totalPages);

    return pages;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img src={left}/>
      </button>

      {getPages().map((page, index) =>
        page === "…" ? (
          <span key={index} className="ellipsis">{page}</span>
        ) : (
          <button
            key={index}
            className={page === currentPage ? "active" : ""}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img src={right}/>
      </button>
    </div>
  );
};

export default Pagination;
