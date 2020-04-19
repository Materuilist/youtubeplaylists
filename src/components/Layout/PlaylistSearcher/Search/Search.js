import React, {useRef} from "react";

import cssClasses from "./Search.module.css";

export default function () {
    const searchInput = useRef();

  return (
    <div onClick={()=>searchInput.current.focus()} className={cssClasses.Search}>
      <span className={cssClasses.SearchIcon}>&#9906;</span>{" "}
      <input ref={searchInput} type="" className={cssClasses.SearchInput} placeholder={`enter playlist's name...`}/>
    </div>
  );
}
