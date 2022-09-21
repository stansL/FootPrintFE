import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";

const SearchPosts = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPosts());
    setQuery("");
  };

  return (
    <div className="new-post">
      <input
        type="text"
        id="new-todo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search term"
        className="searchbox"
      />

      <button className="searchbutton" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchPosts;
