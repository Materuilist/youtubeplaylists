import {SET_PLAYLIST, TOGGLE_LOADING, SET_DATE} from './types';

export function setPlaylist(playlistName){
    return({
        type:SET_PLAYLIST,
        playlistName
    })
}
export function toggleLoading(){
    return({
        type:TOGGLE_LOADING
    })
}
export function setDate(){
    return({
        type:SET_DATE,
        date:Date.now()
    })
}

export function fetchPlaylist(playlistName){
    return async (dispatch, getState)=>{
        
    }
}