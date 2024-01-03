import SearchList from "../../component/SearchList";
import { useState } from "react";
import Pagination from "../../component/Pagination";
import { Character } from "../../Validator/Character";
import CharactersList from "./CharactersList";
import BlankState from "../../component/BlankState";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleOnclik = async (numberPage: number) => {
    const response = await fetch(
      `https://anapioficeandfire.com/api/characters?page=${numberPage}&pageSize=50`
    );
    const json = await response.json();
    setCharacters(json);
  };
  return (
    <>
      <SearchList
        setCharacters={setCharacters}
        characters={characters}
        handleOnclik={handleOnclik}
      />
      <Pagination setCharacters={setCharacters} handleOnclik={handleOnclik} />
      {characters.length < 1 ? (
        <BlankState>This page seems to be empty, try an other one</BlankState>
      ) : (
        <CharactersList data={characters} />
      )}
    </>
  );
};

export default Characters;
