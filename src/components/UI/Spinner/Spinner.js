import React from "react";

import cssClasses from "./Spinner.module.css";

export default ({ color }) => (
  <div className={cssClasses[color + "Wrapper"]}>
    <div className={cssClasses.loader + " " + cssClasses[color]}>
      Loading...
    </div>
  </div>
);
