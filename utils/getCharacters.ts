export const getCharacters = async (
  page: number = 1,
  gender?: string,
  name?: string
) => {
  var url = new URL("https://rickandmortyapi.com/api/character/");
  page && url.searchParams.set("page", page.toString());
  gender && url.searchParams.set("gender", gender);
  name && url.searchParams.set("name", name);

  const res = await fetch(url.href, { cache: "no-store" });
  const covertToJson = await res.json();
  return {
    ok: res.ok,
    data: covertToJson,
  };
};

