import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPost = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({ userId: 1, title: newTodo, completed: false });
    console.log("Perfom the search");
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

export default SearchPost;
