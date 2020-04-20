import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import {
  fetchPlaylists,
  fetchPlaylistItems,
} from "../../../../redux/actions/creators";

import cssClasses from "./Search.module.css";
import Dropdown from "./Dropdown/Dropdown";

const INPUT_DELAY = 1000;

function Search({ fetchPlaylists, fetchPlaylistItems }) {
  const searchInput = useRef();
  const [dropdownIsShown, toggleDropdownVisibility] = useState(false);

  const inputHandler = async (event) => {
    fetchPlaylists(event.target.value);
  };

  const inputClickedHandler = (event) => {
    searchInput.current.focus();
    toggleDropdownVisibility(!dropdownIsShown);
  };

  const choiceMadeHandler = (playlistId) => {
    toggleDropdownVisibility(false);
    fetchPlaylistItems(playlistId);
  };

  return (
    <div className={cssClasses.SearchContainer}>
      <div onClick={inputClickedHandler} className={cssClasses.Search}>
        <span className={cssClasses.SearchIcon}>&#9906;</span>{" "}
        <input
          onInput={inputHandler}
          ref={searchInput}
          type="text"
          className={cssClasses.SearchInput}
          placeholder="enter playlist's name..."
        />
      </div>
      <Dropdown
        show={dropdownIsShown}
        choiceMadeHandler={choiceMadeHandler}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: (playlistName) =>
    dispatch(fetchPlaylists(playlistName, INPUT_DELAY)),
  fetchPlaylistItems: (playlistId) => dispatch(fetchPlaylistItems(playlistId)),
});

export default connect(null, mapDispatchToProps)(Search);
