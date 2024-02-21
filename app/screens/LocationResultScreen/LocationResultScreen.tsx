"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { LocationRequest } from "@/types/api.types";
import { LocationCard } from "@/app/components/LocationCard"; 
import { Pagination } from "@/app/components/Pagination";

interface LocationResultScreenProps {
  data: LocationRequest;
  currentPage: number;
}

const LocationResultScreen: FC<LocationResultScreenProps> = ({
  currentPage,
  data: {
    results,
    info: { pages },
  },
}) => {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((location) => {
          // Extracting resident IDs from the location
          const residentIds = location.residents.map(residentUrl => {
            const parts = residentUrl.split('/');
            return parts[parts.length - 1];
          });
          // Joining resident IDs with a comma separator
          const residentIdsString = residentIds.join(',');

          return (
            <Link href={`/locations/${location.id}?residents=${residentIdsString}`} key={location.id}>
              <LocationCard location={location} />
            </Link>
          );
        })}
      </div>
      <div className="flex py-20 justify-center ">
        <Pagination
          currentPage={currentPage}
          totalPages={pages}
          currentLocation={currentLocation || ''} 
        />
      </div>
    </div>
  );
};

export default LocationResultScreen;
