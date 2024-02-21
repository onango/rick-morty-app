export const getCharacters = async (
  page: number = 1,
  gender?: string,
  name?: string,
  locationId?: number,
  characterIds?: number[],
  characterNames?: string[]
) => {
  const url = new URL("https://rickandmortyapi.com/api/character/");
  
  // Set query parameters for pagination, gender, and name
  url.searchParams.set("page", page.toString());
  gender && url.searchParams.set("gender", gender);
  name && url.searchParams.set("name", name);
  
  // Add query parameters for character IDs or names if provided
  if (characterIds && characterIds.length > 0) {
    url.pathname += `[${characterIds.join(',')}]`;
  } else if (characterNames && characterNames.length > 0) {
    url.searchParams.set("name", characterNames.join('&name='));
  }

  // Fetch initial data with pagination
  const res = await fetch(url.href, { cache: "no-store" });
  const data = await res.json();
  
  // return {
  //   ok: res.ok,
  //   data: data
  // };
  const count = data.length;
  const pages = Math.ceil(count / 20); // Assuming 20 characters per page

  return {
    ok: res.ok,
    data: {
      info: {
        count,
        pages,
        next: null, // No pagination for filtered data
        prev: null // No pagination for filtered data
      },
      results: data
    }
  };
};
