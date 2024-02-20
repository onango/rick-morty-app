import Link from "next/link";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  gender: string | undefined;
}

const Pagination: FC<PaginationProps> = ({
}) => {

  return (
    <nav aria-label="Page navigation">
      
    </nav>
  );
};

export default Pagination;
