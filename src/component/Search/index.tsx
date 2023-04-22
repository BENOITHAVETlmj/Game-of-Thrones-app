import React, { useState } from "react";
import { searchInput, searchStyle, searchButton } from "./styles";
import './style.css';
import Button from "../Button";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [state, setState] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(state);
  };

  return (
    <form onSubmit={handleFormSubmit} style={searchStyle}>
      <input
        type="text"
        placeholder="Search..."
        value={state}
        onChange={handleInputChange}
        style={searchInput}
      />
      <Button className="gold" style={searchButton}>Search</Button>
    </form>
  );
};

export default SearchBar;


