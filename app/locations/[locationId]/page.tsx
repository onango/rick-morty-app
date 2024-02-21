"use client";

import { useState, useEffect, useRef } from 'react';
import { NavBar } from '@/app/components/NavBar';
import { Spinner } from '@/app/components/Spinner';
import { SearchResultScreen } from '@/app/screens/SearchResultScreen';
import { getCharacters } from '@/utils/getCharacters';
import { Suspense } from 'react';

export default function Home({ params, searchParams }: { params: { locationId: string }; searchParams?: Record<string, string> | URLSearchParams | undefined }) {
  const locationId = params.locationId ? parseInt(params.locationId) : 1;
  const urlSearchParams = new URLSearchParams(searchParams);
  const pageNumber = Number(urlSearchParams.get('page')) || 1;
  const gender = urlSearchParams.get('gender') || undefined;
  const characterName = urlSearchParams.get('name') || undefined;

  const residents = urlSearchParams.get('residents') || undefined;

  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { ok, data } = await getCharacters(pageNumber, gender, characterName, locationId, residents.split(',').map(residentId => parseInt(residentId)));
        console.log(data, residents.split(',').map(residentId => parseInt(residentId)));
        if (ok && data) {
          setCharacters(data);
        } else {
          setCharacters(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params, searchParams]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* @ts-expect-error */
    const searchValue = e.target?.elements?.search?.value;

    if (!searchValue) {
      return;
    }
    console.log(searchValue, "searched");
  };

  const searchDefaultValue = characterName || undefined;

  return (
    <main>
      <div>
        <NavBar />
        <div className="h-full bg-no-repeat">
          <div className="mt-10 px-10">
            <div className="flex h-12 w-full">
            <form onSubmit={onSubmit} className="w-full flex">
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
            <Suspense fallback={<Spinner />}>
              {loading ? (
                <Spinner />
              ) : characters ? (
                <SearchResultScreen data={characters} currentPage={pageNumber} gender={gender} />
              ) : (
                <div className="mt-10 flex flex-1 justify-center">
                  <p>Character not found</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
