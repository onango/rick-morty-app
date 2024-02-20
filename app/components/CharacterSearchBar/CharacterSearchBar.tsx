"use client";

import { FC } from "react";

interface SearchBarProps {
  characterName: string | undefined;
}

const CharacterSearchBar: FC<SearchBarProps> = ({ characterName }) => {
  return (
    <div className="flex h-12 w-full">
    </div>
  );
};

export default CharacterSearchBar;
