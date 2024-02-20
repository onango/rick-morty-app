import Link from "next/link";
import { FC } from "react";
import { PageDataType } from "./types";

const PrevPage: FC<PageDataType> = ({ data: { url } }) => {
  if (!url) {
    return null;
  }
  return (
    <li>
      <Link
        href={url}
        className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Previous 10 pages</span>
        <div className="flex flex-row">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p>- 10</p>
        </div>
      </Link>
    </li>
  );
};

const CurrentPage: FC<PageDataType["data"]> = ({ pageNumber }) => (
  <li>
    <p
      aria-current="page"
      className="z-10 border border-blue-300 bg-blue-50 px-3 py-2 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    >
      {pageNumber}
    </p>
  </li>
);

const StandardPage: FC<PageDataType> = ({ data: { url, pageNumber } }) => {
  if (!url) {
    return null;
  }
  return (
    <li>
      <Link
        href={url}
        className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {pageNumber}
      </Link>
    </li>
  );
};

const NextPage: FC<PageDataType> = ({ data: { url } }) => {
  if (!url) {
    return null;
  }
  return (
    <li>
      <Link
        href={url}
        className="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Next 10 pages</span>
        <div className="flex flex-row">
          <p>+ 10</p>

          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
    </li>
  );
};

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
