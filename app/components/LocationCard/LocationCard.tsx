import { Location } from "@/types/api.types";
import { FC } from "react";

interface LocationCardProps {
  location: Location;
}

const LocationCard: FC<LocationCardProps> = ({ location }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-600">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href={`/locations/${location.id}`} key={location.id}>
                {location.name}
                </a>
            </h1>
            
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="ml-2 text-sm text-black">
            Dimension: {location.dimension}
            </p>
            <p className="text-black text-sm">
            Type: {location.type}
            </p>
        </footer>

    </article>
  );
};

export default LocationCard;
