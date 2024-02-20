import { FC } from "react";
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
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((location) => {
          return (
            <Link href={`/locations/${location.id}`} key={location.id}>
              <LocationCard location={location} />
            </Link>
          );
        })}
      </div>
      <div className="flex py-20 justify-center ">
        <Pagination
          currentPage={currentPage}
          totalPages={pages}
        />
      </div>
    </div>
  );
};

export default LocationResultScreen;
