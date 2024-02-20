import { Suspense } from "react";
import { NavBar } from "@/app/components/NavBar";
import {Spinner} from "@/app/components/Spinner";
import { LocationSearchBar } from "@/app/components/LocationSearchBar";
import { LocationResultScreen } from "@/app/screens/LocationResultScreen";
import { getLocations } from "@/utils/getLocations";


export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string> | URLSearchParams | undefined;
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const pageNumber = Number(urlSearchParams.get("page")) || 1;
  const locationName = urlSearchParams.get("name") || undefined;
  const { ok, data } = await getLocations(pageNumber, locationName);
  console.log(data);

  return (
    <main>
      <div>
        <NavBar />
        <div className="h-full">
          <div className="mt-10  px-10">
            <LocationSearchBar locationName={locationName} />
            <Suspense fallback={<Spinner />}>
              {ok && data ? (
                <LocationResultScreen
                  data={data}
                  currentPage={pageNumber}
                />
              ) : (
                <div className="mt-10 flex text-black flex-1 justify-center">
                  <p>Location not found</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
