import React from 'react';

import cssClasses from './App.module.css';
import PlaylistSearcher from './components/Layout/PlaylistSearcher/PlaylistSearcher';

function App() {
  return (
    //#65ebeb
    <div className={cssClasses.App}>
      <PlaylistSearcher/>
    </div>
  );
}

export default App;
