import React from "react";
import { connect } from "react-redux";

// import {  } from '../../../../redux/actions/creators';

import Graph from "./Graph/Graph";
import Spinner from "../../../UI/Spinner/Spinner";

import cssClasses from "./Chart.module.css";

function Chart({ playlist }) {
  return (
    <div className={cssClasses.Chart}>
      {playlist.title === null ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <p className={cssClasses.Title}>{playlist.title}</p>
          <div className={cssClasses.Graph}>
            <Graph
              data={playlist.views.map((view, index) => ({
                x: index + 1,
                y: +view,
              }))}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  playlist: state.searchResults.active,
});

export default connect(mapStateToProps)(Chart);
