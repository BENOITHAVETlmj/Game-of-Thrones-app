import React, { useEffect, useState } from "react";
import Button from "../Button";
import "./style.css";
import { Character } from "../../Validator/Character";

interface Props {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  handleOnclik: (numberPage: number) => Promise<void>;
}

const totalPages = 43;

const Pagination: React.FC<Props> = ({ setCharacters, handleOnclik }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function asyncFunction() {
      const response = await fetch(
        `https://anapioficeandfire.com/api/characters?page=1&pageSize=50`
      );
      const json = await response.json();
      setCharacters(json);
    }
    asyncFunction();
  }, [setCharacters]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <Button
        key={number}
        className={number === currentPage ? "active" : ""}
        onClick={() => {
          handleOnclik(number);
          setCurrentPage(number);
        }}
      >
        {number}
      </Button>
    ));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handleOnclik(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handleOnclik(currentPage + 1);
    }
  };

  console.log({ totalPages, currentPage });

  return (
    <div className="container">
      <Button
        onClick={handlePrevClick}
        className="nextPrev"
        disabled={currentPage < 2}
      >
        Prev
      </Button>
      {renderPageNumbers()}
      <Button
        onClick={handleNextClick}
        className="nextPrev"
        disabled={currentPage > totalPages - 1}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
