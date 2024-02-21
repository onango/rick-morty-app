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

  const itemsPerPage = 10;
  
  const count = data.length;
  const totalPages = Math.ceil(count / itemsPerPage); 

  let next = null;
  let prev = null;
  if (page < totalPages) {
    next = `/?page=${page + 1}`;
  }
  if (page > 1) {
    prev = `/?page=${page - 1}`;
  }

  // Calculate items to show on this page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, count); 
  const results = data.slice(startIndex, endIndex);

  return {
    ok: res.ok,
    data: {
      info: {
        count,
        pages: totalPages,
        next,
        prev
      },
      results,
      raw_results: data,
      itemsPerPage
    }
  };
};
