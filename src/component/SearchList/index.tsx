import { useState } from "react";
import { Character } from "../../Validator/Character";
import SearchBar from "../../component/Search";
import Button from "../Button";

interface Props {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>,
  characters: Character[],
  handleOnclik: (numberPage: number) => Promise<void>
}

const SearchList: React.FC<Props> = ({ setCharacters, characters, handleOnclik }) => {
  const handleOnSearchFilter = (search: string) => {
    setCharacters(characters.filter(character => character.name.toUpperCase().includes(search.toUpperCase()) || character?.aliases[0].toUpperCase().includes(search.toUpperCase())))
  }
  const [search, setSearch] = useState("");
  return (
   <>
     <SearchBar onSearch={(search)=> handleOnSearchFilter(search)} search={search} setSearch={setSearch} />
    {characters.length === 0 && <Button onClick={() =>{ handleOnclik(1); setSearch('') }} className="nextPrev">Reset</Button>}
   </>
  )
}

export default SearchList;