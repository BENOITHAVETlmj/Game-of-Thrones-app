import { useQuery } from "react-query";
import BlankState from "../../component/BlankState";
import SearchList from "../../component/SearchList";
import { useState } from "react";
import Pagination from "../../component/Pagination";
import { Character } from "../../Validator/Character";
import CharactersList from "./CharactersList";

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(10);
  console.log('currentPage',currentPage);

  const { isLoading, error, data } = useQuery('characters', () => fetch(`https://anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=50`).then((res) => res.json()));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Could not find any resource that matches the request, try again</p>;
  console.log('data', data);


  return (
  <>
    <SearchList />
    <Pagination pageNumber={214} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <CharactersList data={data} />
  </>
  )
}

export default Characters;