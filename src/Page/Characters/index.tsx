import SearchList from "../../component/SearchList";
import { useState } from "react";
import Pagination from "../../component/Pagination";
import { Character } from "../../Validator/Character";
import CharactersList from "./CharactersList";
import BlankState from "../../component/BlankState";

const Characters = () => {
  const [data, setData] = useState<Character[]>([]);
  return (
  <>
    <SearchList />
    <Pagination setData={setData} />
    {/* for some reasons even on 200 api returns emtpr array */}
    {data.length < 1 ? <BlankState>This page seems to be empty, try an other one</BlankState> : <CharactersList data={data} />}
  </>
  )
}

export default Characters;