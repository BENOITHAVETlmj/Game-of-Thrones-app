import React from "react"
import Button from "../Button";
import "./style.css"

interface Props {
  pageNumber: number,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<Props> = ({ pageNumber , currentPage, setCurrentPage}) => {

  const renderButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= pageNumber; i++) {
      pageButtons.push(
       <Button
          key={i}
          onClick={() => setCurrentPage(i-1)}
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