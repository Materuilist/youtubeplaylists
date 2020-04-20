import React from "react";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import cssClasses from "./Dropdown.module.css";
import Spinner from "../../../../UI/Spinner/Spinner";

function Dropdown({ playlists, choiceMadeHandler, show, isLoading }) {
  return (
    <CSSTransition in={show} timeout={0} mountOnEnter unmountOnExit>
      <ul className={cssClasses.Dropdown}>
        {isLoading ? (
          <li>
            <Spinner color='red' />
          </li>
        ) : playlists.length !== 0 ? (
          playlists.map(({ title, key }) => (
            <li onClick={choiceMadeHandler.bind(null, key)} key={key}>
              {title}
            </li>
          ))
        ) : (
          <li className={cssClasses.Unclickable}>No matches found...</li>
        )}
      </ul>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  playlists: state.searchResults.data.map((playlist) => ({
    title: playlist.snippet.title,
    key: playlist.id.playlistId,
  })),
});

export default connect(mapStateToProps)(Dropdown);
