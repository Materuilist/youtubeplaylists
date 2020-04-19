import {
  SET_PLAYLIST,
  TOGGLE_LOADING,
  SET_DATE,
  SET_SEARCH_RESULTS,
} from "./types";

export function setPlaylist(playlistName) {
  return {
    type: SET_PLAYLIST,
    playlistName,
  };
}
export function toggleLoading() {
  return {
    type: TOGGLE_LOADING,
  };
}
export function setDate(date) {
  return {
    type: SET_DATE,
    date: date,
  };
}

export function setSearchResults(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults,
  };
}

export function fetchPlaylists(playlistName, date) {
  return async (dispatch, getState) => {
    const { loading, timestamp } = getState().searchResults;
    //устаревший запрос
    if(date<timestamp){
        return;
    }
    if (!loading) {
      dispatch(toggleLoading());
    }
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAhOBa7cZ-KrkW2hAWoBsOBVqVBZ52lHo&part=snippet&type=playlist&order=viewCount&maxResults=7&q=" +
        playlistName
    );
    const searchResults = await res.json();
    dispatch(setSearchResults(searchResults.items));
    dispatch(toggleLoading());
  };
}
