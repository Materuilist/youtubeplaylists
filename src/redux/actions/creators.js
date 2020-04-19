import {
  SET_PLAYLIST,
  TOGGLE_LOADING,
  SET_DATE,
  SET_SEARCH_RESULTS,
} from "./types";

export function setPlaylist(playlistId) {
  return {
    type: SET_PLAYLIST,
    playlistId,
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
    date,
  };
}

export function setSearchResults(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults,
  };
}

export function fetchPlaylists(playlistName, delay) {
  return async (dispatch, getState) => {
    const date = Date.now();
    dispatch(setDate(date));
    await new Promise((resolve) => setTimeout(() => resolve(), delay));
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
