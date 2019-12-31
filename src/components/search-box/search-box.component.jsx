import React from "react";
import { SearchInput } from "./search-box.styles";

export const SearchBox = ({ placeholder, handleChange }) => (
  <SearchInput
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
