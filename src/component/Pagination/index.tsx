import React, { useState } from "react"
import Button from "../Button";
import "./style.css"
import CharactersList from "../../Page/Characters/CharactersList";
import { Character } from "../../Validator/Character";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Character[]>>
}

const Pagination: React.FC<Props> = ({setData}) => {
  const [currentPage, setCurrentPage] = useState(10);
  const handleOnclik = async(numberPage:number) => {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?page=${numberPage}&pageSize=50`);
      const json = await response.json();
      console.log(json);

      await setData(json);
  }
  const renderButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= 214; i++) {
      pageButtons.push(
       <Button
          key={i}
          onClick={() => {handleOnclik(i); setCurrentPage(i)
          }}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };

  return(
    <div className="container">
      {renderButtons()}
    </div>
 )
}

export default Pagination;