// eslint-disable-next-line
import React from "react";
import { Character } from "../../Validator/Character";
import { Book } from "../../Validator/Book";
import './style.css'
import BlankState from "../BlankState";
import { Page } from "../../App";
import { useQuery } from "react-query";

interface Props {
  page: Page;
}

const List: React.FC<Props> = ({ page }) => {
  const { isLoading, error, data } = useQuery(`${page}`, () =>
  page === Page.Books ? fetch(`https://anapioficeandfire.com/api/${page}?pageSize=50`).then((res) => res.json())
  : fetch(`https://anapioficeandfire.com/api/${page}?page=1&pageSize=50`).then((res) => res.json())
  );

  function determineIfIsAnimalOrHuman(toBeDetermined: Book[] | Character[]): toBeDetermined is Book[] {
  if((toBeDetermined.length > 1 && toBeDetermined as Book[] && 'authors' in toBeDetermined[0] )){
    return true
  }
  return false
  }

  if (isLoading) return <p>Loading...</p>;
  if (error || data.lenngth < 1) return <p>Could not find any resource that matches the request, try again</p>;
  console.log(data)

  if(data.length < 1) return <BlankState />

  return (
    <ul>
      {determineIfIsAnimalOrHuman(data) ? data.map((item) => {
       if(item?.name.length < 1) {
        return;
       } else {
        return (
        <li key={item.url}>{item.name}</li>
        )
       }
      }
     )
       :
       data.map((item: Character) => {
       if(item?.aliases?.[0].length < 1 && item.name.length < 1) {
        return;
       } else {
         const characterDetails = {
           name: item?.aliases?.[0].length > 1 ? item?.aliases?.[0] : item.name,
           tvSeries: item.tvSeries,
           books: item.books,
           allegiances: item.allegiances,
           spouse: item.spouse
         }
        return (
         <li key={characterDetails.name}>{characterDetails.name}</li>
        )
      }})}
    </ul>
  );
};

export default List;