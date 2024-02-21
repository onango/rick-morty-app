"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { CharacterCard } from "@/app/components/CharacterCard";
import { CharacterRequest } from "@/types/api.types";
import { Pagination } from "@/app/components/Pagination";
import ResultsPagination from "./ResultsPagination";

interface SearchResultScreenProps {
  data: CharacterRequest;
  currentPage: number;
}

const SearchResultScreen: FC<SearchResultScreenProps> = ({
  currentPage,
  data: {
    results,
    raw_results,
    itemsPerPage,
    info: { pages },
  },
}) => {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [characters, setCharacters] = useState(results);

  useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, []);


  const handlePageChange = async (page: number) => {
    console.log('clicked', page, currentLocation, itemsPerPage);
    try {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, raw_results.length); 
      const results = raw_results.slice(startIndex, endIndex);
      setCharacters(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((character) => {
          return (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CharacterCard type="small" character={character} characterNotes="" />
            </Link>
          );
        })}
      </div>
      <div className="flex py-20 justify-center ">
        <ResultsPagination
          currentPage={currentPage}
          totalPages={pages}
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
};

export default SearchResultScreen;
