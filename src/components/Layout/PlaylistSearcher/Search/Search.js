import React, { useRef } from "react";
import { connect } from "react-redux";

import { fetchPlaylists } from "../../../../redux/actions/creators";

import cssClasses from "./Search.module.css";

const INPUT_DELAY = 1000;

function Search({ fetchPlaylists }) {
  const searchInput = useRef();

  const inputHandler = async (event) => {
    const playlistName = event.target.value;
    await new Promise((resolve)=>setTimeout(()=>resolve(), INPUT_DELAY));
    fetchPlaylists(playlistName);
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
  fetchPlaylists: (playlistName) => dispatch(fetchPlaylists(playlistName)),
});

export default connect(null, mapDispatchToProps)(Search);
