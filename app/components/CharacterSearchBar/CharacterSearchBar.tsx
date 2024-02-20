"use client";

import { FC } from "react";

interface SearchBarProps {
  characterName: string | undefined;
}

const CharacterSearchBar: FC<SearchBarProps> = ({ characterName }) => {
  return (
    <div className="flex h-12 w-full">
    <form className="flex">
      <input
        autoComplete="off"
        type="search"
        id="searchByName"
        name="search"
        className="h-full w-full pl-5 text-sm  bg-transparent border border-r  border-gray-700 placeholder-gray-400 text-black focus:border-gray-500 outline-none  "
        placeholder="Search character by name..."
        required
      />
      <button
        type="submit"
        className="flex w-14 items-center justify-center text-sm font-medium text-black  rounded-r-lg border border-gray-700 hover:border-gray-800 focus:ring-4 focus:outline-none "
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  </div>
  );
};

export default CharacterSearchBar;
