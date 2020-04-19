import React  from 'react';

import Search from './Search/Search';
import Chart from './Chart/Chart';

import cssClasses from './PlaylistSearcher.module.css';

function PlaylistSearcher(){
    return(
        <div className={cssClasses.PlaylistSearcher}>
            <Search/>
            <Chart/>
        </div>
    )
}

export default PlaylistSearcher;