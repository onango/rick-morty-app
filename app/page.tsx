import { Suspense } from "react";
import { NavBar } from "@/app/components/NavBar";
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
    <>Home</>
  );
}
