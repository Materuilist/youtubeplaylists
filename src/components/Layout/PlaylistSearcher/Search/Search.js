import React, { useRef } from "react";
import { connect } from "react-redux";

import { fetchPlaylists, setDate } from "../../../../redux/actions/creators";

import cssClasses from "./Search.module.css";

const INPUT_DELAY = 1000;

function Search({ fetchPlaylists, setDate }) {
  const searchInput = useRef();

  const inputHandler = async (event) => {
    const date = Date.now();
    setDate(date);
    const playlistName = event.target.value;
    await new Promise((resolve) => setTimeout(() => resolve(), INPUT_DELAY));
    fetchPlaylists(playlistName, date);
  };

  return (
    <div
      onClick={() => searchInput.current.focus()}
      className={cssClasses.Search}
    >
      <span className={cssClasses.SearchIcon}>&#9906;</span>{" "}
      <input
        onInput={inputHandler}
        ref={searchInput}
        type="text"
        className={cssClasses.SearchInput}
        placeholder={`enter playlist's name...`}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: (playlistName, date) => dispatch(fetchPlaylists(playlistName, date)),
  setDate: (date) => dispatch(setDate(date)),
});

export default connect(null, mapDispatchToProps)(Search);
