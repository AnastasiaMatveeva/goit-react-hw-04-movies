import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      alert("Enter movie name");
      return;
    }

    onSubmit(searchQuery);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchQuery}
            onChange={handleInputChange}></input>
        </label>
        <button type="submit" className={s.searchbutton}>
          Search
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
