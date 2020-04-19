import _ from 'lodash';

import { SET_PLAYLIST, SET_DATE, TOGGLE_LOADING, SET_SEARCH_RESULTS } from '../actions/types';

const initialState = {
    loading:false,
    timestamp:0,
    data:[],
    active:null
}

export default (prevState=initialState, action)=>{
    const newState = _.cloneDeep(prevState);
    switch(action.type){
        case SET_PLAYLIST:{
            newState.active = action.playlistName;
            return newState;
        }
        case SET_DATE:{
            newState.timestamp = action.date;
            return newState;
        }
        case TOGGLE_LOADING:{
            newState.loading = !prevState.loading;
            return newState;
        }
        case SET_SEARCH_RESULTS:{
            newState.data = action.searchResults;
            return newState;
        }
        default:{
            return prevState;
        }
    }
}