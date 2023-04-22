import React, { useState } from "react";
import { searchInput, searchStyle, searchButton } from "./styles";
import './style.css';

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
      <button type="submit" style={searchButton} className="gold">Search</button>
    </form>
  );
};

export default SearchBar;


