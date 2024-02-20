import { Character } from "@/types/api.types";
import { FC } from "react";
import { TitleFormat } from "../TitleFormat";
import Image from "next/image";

interface CharacterCardProps {
  type: "small" | "full";
  character: Character;
  characterNotes: string;
}

const cardDynamicStyle = {
  name: {
    small: "sm:text-2xl md:text-base",
    full: "text-2xl sm:text-3xl md:text-4xl",
  },
  descriptionMargins: {
    small: "p-6  md:p-4 lg:p-4",
    full: " p-6 md:p-6 lg:p-8",
  },
  statusesMargins: {
    small: "sm:mt-5 md:mt-3 lg:mt-1 ",
    full: "mt-5 md:mt-10 lg:mt-10 ",
  },
};

const CharacterCard: FC<CharacterCardProps> = ({
  type = "small",
  character,
  characterNotes,
}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 mt-3 ">
      <div className="flex w-full justify-center  overflow-hidden rounded-xl border border-gray-600">
        <div className="flex flex-1">
          <div className=" flex w-2/5">
            <Image
              alt={character.name}
              src={character.image}
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div
            className={`${cardDynamicStyle.descriptionMargins[type]} flex w-3/5  flex-1 flex-col`}
          >
            <div>
              <p
                className={`${cardDynamicStyle.name[type]}  truncate font-mono`}
              >
                {character.name}
              </p>
            </div>

            <div
              className={`${cardDynamicStyle.statusesMargins[type]} flex  flex-1 flex-row`}
            >
              <div className="flex flex-1 flex-col">
                <TitleFormat
                  type={type}
                  title="Status:"
                  subtitle={character.status}
                />
                <TitleFormat
                  type={type}
                  title="Gender:"
                  subtitle={character.gender}
                />
                <TitleFormat
                  type={type}
                  title="Species:"
                  subtitle={character.species}
                />
              </div>
              {type === "full" ? (
                <div className="flex flex-1 flex-col">
                  <TitleFormat
                    type={type}
                    title="Location:"
                    subtitle={character.location.name}
                  />
                  <TitleFormat
                    type={type}
                    title="Origin:"
                    subtitle={character.origin.name}
                  />
                  <TitleFormat
                    type={type}
                    title="Notes:"
                    subtitle={characterNotes}
                  />
                  
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
