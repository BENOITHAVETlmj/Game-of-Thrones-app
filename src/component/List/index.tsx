import React from "react";
import { Character } from "../../Validator/Character";
import { Book } from "../../Validator/Book";
import './style.css'
import BlankState from "../BlankState";

interface Props {
  items: Book[] | Character[];
}

const List: React.FC<Props> = ({ items }) => {
  function determineIfIsAnimalOrHuman(toBeDetermined: Book[] | Character[]): toBeDetermined is Book[] {
  if((toBeDetermined.length > 1 && toBeDetermined as Book[] && 'authors' in toBeDetermined[0] )){
    return true
  }
  return false
}
  if(items.length < 1) return <BlankState />

  return (
    <ul>
      {determineIfIsAnimalOrHuman(items) ? items.map((item) => {
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
       items.map((item) => {
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