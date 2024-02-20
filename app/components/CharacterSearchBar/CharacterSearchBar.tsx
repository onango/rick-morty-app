"use client";

import { ChangeEvent, FC, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GenderApiRequest } from "@/types/api.types";

const getGender = (gender: GenderApiRequest | string) => {
  if (Object.values(GenderApiRequest).includes(gender as GenderApiRequest)) {
    return gender;
  }

  if (gender.length) {
    return GenderApiRequest.Unknown;
  } else {
    return "default";
  }
};

interface SearchBarProps {
  characterName: string | undefined;
}

const CharacterSearchBar: FC<SearchBarProps> = ({ characterName }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams && searchParams.get("gender");
  const defaultFilter = search ? getGender(search) : "default";
  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    router.push(`/?gender=${e.target.value}`);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.target?.elements?.search?.value;

    if (!searchValue) {
      return;
    }
    router.push(`/?name=${searchValue}`);
  };

  const searchDefaultValue = characterName || undefined;
  return (
   <div className="flex h-12 w-full">
      <select
        onChange={onSelect}
        defaultValue={defaultFilter}
        id="gender"
        className="border w-1/5 min-w-fit  rounded-l-lg pl-3 bg-transparent border-gray-700 placeholder-gray-400 text-black  focus:border-gray-500 outline-none"
      >
        <option disabled={true} value="default">
          Filter by gender
        </option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>

      <form onSubmit={onSubmit} className="w-4/5 flex">
        <input
          ref={inputRef}
          autoComplete="off"
          type="search"
          id="searchByName"
          name="search"
          className="h-full w-full pl-5 text-sm  bg-transparent border border-r  border-gray-700 placeholder-gray-400 text-black focus:border-gray-500 outline-none  "
          placeholder="Search character by name..."
          required
          defaultValue={searchDefaultValue}
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
