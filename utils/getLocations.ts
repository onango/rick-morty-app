export const getLocations = async (
  page: number = 1,
  name?: string
) => {
  var url = new URL("https://rickandmortyapi.com/api/location/");
  page && url.searchParams.set("page", page.toString());
  name && url.searchParams.set("name", name);

  const res = await fetch(url.href, { cache: "no-store" });
  const data = await res.json();

  return data;
};

