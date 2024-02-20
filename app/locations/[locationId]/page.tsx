import { NavBar } from "@/app/components/NavBar";
import { Spinner } from "@/app/components/Spinner";
import { CharacterSearchBar } from "@/app/components/CharacterSearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";
import { getCharacters } from "@/utils/getCharacters";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string> | URLSearchParams | undefined;
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const pageNumber = Number(urlSearchParams.get("page")) || 1;
  const gender = urlSearchParams.get("gender") || undefined;
  const characterName = urlSearchParams.get("name") || undefined;
  const { ok, data } = await getCharacters(pageNumber, gender, characterName);
  return (
    <main>
      <div>
        <NavBar />
        <div className="h-full bg-no-repeat">
          <div className="mt-10  px-10">
            <CharacterSearchBar characterName={characterName} />
            <Suspense fallback={<Spinner />}>
              {ok && data ? (
                <SearchResultScreen
                  data={data}
                  currentPage={pageNumber}
                  gender={gender}
                />
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
