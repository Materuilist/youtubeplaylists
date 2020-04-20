import React from 'react';
import { connect } from 'react-redux';

// import {  } from '../../../../redux/actions/creators';

import cssClasses from './Chart.module.css';

function Chart({}){
    return(<div className={cssClasses.Chart}>

    </div>)
}

const mapStateToProps=state=>({
    playlist:state.searchResults.active
})

export default connect(mapStateToProps)(Chart);