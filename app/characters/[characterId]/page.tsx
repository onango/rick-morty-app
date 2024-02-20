"use client";

import { useState, useEffect } from 'react';
import { CharacterCard } from "@/app/components/CharacterCard";
import { Suspense } from "react";

const CharacterPage = ({
  params: { characterId },
}: {
  params: { characterId: string };
}) => {
  const [characterData, setCharacterData] = useState(null);
  const [notes, setNotes] = useState('');
  const [showNotesForm, setShowNotesForm] = useState(false);

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

  useEffect(() => {
    // Access localStorage only in the client-side
    const storedNotes = localStorage.getItem(`character_${characterId}_notes`);
    setNotes(storedNotes || '');
  }, [characterId]);

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
    // Store notes in local storage
    localStorage.setItem(`character_${characterId}_notes`, event.target.value);
  };

  const handleBackButtonClick = () => {
    // Navigate back to the previous page
    window.history.back();
  };

  const handleAddNotesClick = () => {
    // Toggle the visibility of the notes form
  };

  return (
    <div className="flex flex-1 justify-center mt-20">
      <div className="w-11/12 md:w-2/3 max-w-screen-md">
      <div className="flex space-x-4 mt-4"> 
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center" onClick={handleBackButtonClick}>
          <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 20a.997.997 0 0 1-.707-.293L12 13.414l-6.293 6.293a.999.999 0 1 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7c.39.39.39 1.024 0 1.414A.999.999 0 0 1 19 20z"/></svg>
          <span>Back to Location</span>
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center" onClick={handleAddNotesClick}>
          <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          <span>Add Notes</span>
        </button>
      </div>
        <div className="flex flex-1 justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full">
              {characterData && (
                 <>
                 {showNotesForm && (
                 <form>
                   <label htmlFor="notes">Add Notes:</label>
                   <textarea
                     id="notes"
                     name="notes"
                     value={notes}
                     className="h-full w-full pl-5 text-sm  border border-gray-700 placeholder-gray-400 text-black focus:border-gray-500 outline-none"
                     onChange={handleNotesChange}
                   />
                 </form>
                 )}
                 <CharacterCard type="full" character={characterData} characterNotes={notes} />
               </>
              )}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
