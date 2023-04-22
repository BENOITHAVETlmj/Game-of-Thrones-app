import React from "react";
import { Character } from "../../Validator/Character";
import { Book } from "../../Validator/Book";
import { Page } from "../../App";

interface Props {
  items: Book[] | Character[];
  typeList: Page
}

const List: React.FC<Props> = ({ items, typeList }) => {
  function determineIfIsAnimalOrHuman(toBeDetermined: Book[] | Character[]): toBeDetermined is Book[] {
  if((toBeDetermined as Book[] && 'authors' in toBeDetermined[0] )){
    return true
  }
  return false
}
  return (
    <ul>
      {determineIfIsAnimalOrHuman(items) ? items.map((item) => (
        <li key={item.url}>{item.name}</li>
      ))
       :
       items.map((item) => (
        <li key={item?.aliases?.[0]}>{item?.aliases?.[0]}</li>
      ))}
    </ul>
  );
};

export default List;