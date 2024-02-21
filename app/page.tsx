"use client";

import { useEffect, useState } from 'react';
import { NavBar } from '@/app/components/NavBar';
import { Spinner } from '@/app/components/Spinner';
import { LocationSearchBar } from '@/app/components/LocationSearchBar';
import { LocationResultScreen } from '@/app/screens/LocationResultScreen';
import { getLocations } from '@/utils/getLocations';

export default function Home({ searchParams }: { searchParams?: Record<string, string> | URLSearchParams | undefined }) {
  const [locations, setLocations] = useState(null);
  const [loading, setLoading] = useState(true);

  const urlSearchParams = new URLSearchParams(searchParams);
  const pageNumber = Number(urlSearchParams.get("page")) || 1;
  const locationName = urlSearchParams.get("name") || undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { ok, data } = await getLocations(pageNumber, locationName);
        if (ok && data) {
          setLocations(data);
        } else {
          setLocations(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <main>
      <div>
        <NavBar />
        <div className="h-full">
          <div className="mt-10  px-10">
            <LocationSearchBar locationName={locationName} />
            {loading ? (
              <Spinner />
            ) : locations ? (
              <LocationResultScreen data={locations} currentPage={pageNumber} />
            ) : (
              <div className="mt-10 flex text-black flex-1 justify-center">
                <p>Location not found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
