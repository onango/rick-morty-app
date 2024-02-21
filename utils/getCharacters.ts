export const getCharacters = async (
  page: number = 1,
  gender?: string,
  name?: string,
  locationId?: number,
  characterIds?: number[],
  characterNames?: string[]
) => {
  const url = new URL("https://rickandmortyapi.com/api/character/");

  url.searchParams.set("page", page.toString());
  gender && url.searchParams.set("gender", gender);
  name && url.searchParams.set("name", name);
  
  if (characterIds && characterIds.length > 0) {
    url.pathname += `[${characterIds.join(',')}]`;
  } else if (characterNames && characterNames.length > 0) {
    url.searchParams.set("name", characterNames.join('&name='));
  }

  const res = await fetch(url.href, { cache: "no-store" });
  const data = await res.json();
  
  // return {
  //   ok: res.ok,
  //   data: data
  // };
  const count = data.length;
  const pages = Math.ceil(count / 20); 

  return {
    ok: res.ok,
    data: {
      info: {
        count,
        pages,
        next: null,
        prev: null
      },
      results: data
    }
  };
};
