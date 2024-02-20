"use client";

import { useState, useEffect } from 'react';
import { CharacterCard } from "@/app/components/CharacterCard";

const CharacterPage = ({
  params: { characterId },
}: {
  params: { characterId: string };
}) => {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`,
          { cache: "force-cache" }
        );
        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacterData();
  }, [characterId]);

  return (
    <div className="flex flex-1 justify-center mt-20">
      <div className="w-11/12 md:w-2/3 max-w-screen-md">
        <div className="flex flex-1 justify-center">
        <CharacterCard type="full" character={characterData} characterNotes="" />
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
