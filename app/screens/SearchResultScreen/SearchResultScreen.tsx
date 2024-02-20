import { FC } from "react";

interface SearchResultScreenProps {
  data: CharacterRequest;
  currentPage: number;
  gender: string | undefined;
}

const SearchResultScreen: FC<SearchResultScreenProps> = ({
  data: {
    info: { pages },
  },
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      </div>
    </div>
  );
};

export default SearchResultScreen;
