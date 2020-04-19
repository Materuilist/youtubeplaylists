import React from "react";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import cssClasses from "./Dropdown.module.css";

function Dropdown({ playlists, choiceMadeHandler, show }) {
  return (
    <CSSTransition in={show} timeout={0} mountOnEnter unmountOnExit>
      <ul className={cssClasses.Dropdown}>
        {playlists.length !== 0 ? (
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
