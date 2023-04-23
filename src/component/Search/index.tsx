import React, { useState } from "react";
import { searchInput, searchStyle, searchButton } from "./styles";
import './style.css';
import Button from "../Button";

interface Props {
  onSearch: (query: string) => void;
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ onSearch, search, setSearch }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleFormSubmit} style={searchStyle}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        style={searchInput}
      />
      <Button className="gold" style={searchButton}>Search</Button>
    </form>
  );
};

export default SearchBar;


