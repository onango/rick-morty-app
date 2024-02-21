"use client";

import { useState, useEffect } from 'react';
import { NavBar } from '@/app/components/NavBar';
import { Spinner } from '@/app/components/Spinner';
import { CharacterSearchBar } from '@/app/components/CharacterSearchBar';
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

  return (
    <main>
      <div>
        <NavBar />
        <div className="h-full bg-no-repeat">
          <div className="mt-10 px-10">
            <CharacterSearchBar characterName={characterName} />
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
