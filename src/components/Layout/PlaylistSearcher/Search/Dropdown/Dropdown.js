import React from "react";
import { connect } from "react-redux";

import { setPlaylist } from "../../../../../redux/actions/creators";

import cssClasses from "./Dropdown.module.css";

function Dropdown({ playlists, setPlaylist }) {
  return (
    <ul className={cssClasses.Dropdown}>
      {playlists.length !== 0 ? (
        playlists.map(({title, key}) => <li key={key}>{title}</li>)
      ) : (
        <li>No matches found...</li>
      )}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  playlists: state.searchResults.data.map((playlist) => ({
    title: playlist.snippet.title,
    key: playlist.snippet.channelTitle+playlist.snippet.title,
  })),
});

const mapDispatchToProps = (dispatch) => ({
  setPlaylist: (playlistName) => dispatch(setPlaylist(playlistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
