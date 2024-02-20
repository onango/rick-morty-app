"use client";

import { FC, useRef } from "react";
import { useRouter } from "next/navigation";

interface LocationSearchBarProps {
  locationName: string | undefined;
}

const LocationSearchBar: FC<LocationSearchBarProps> = ({ locationName }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
 

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.target?.elements?.search?.value;

    if (!searchValue) {
      return;
    }
    router.push(`/?name=${searchValue}`);
  };

  const searchDefaultValue = locationName || undefined;

  return (
    <div className="flex h-12 w-full">
      <form onSubmit={onSubmit} className="w-full flex">
        <input
          ref={inputRef}
          autoComplete="off"
          type="search"
          id="searchByName"
          name="search"
          className="h-full w-full pl-5 text-sm  border border-gray-700 placeholder-gray-400 text-black focus:border-gray-500 outline-none"
          placeholder="Enter location name to search ..."
          required
          defaultValue={searchDefaultValue}
        />
        <button
          type="submit"
          className="flex w-14 items-center justify-center text-sm font-medium text-black  rounded-r-lg border border-gray-700 hover:border-gray-800 focus:ring-4 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LocationSearchBar;
