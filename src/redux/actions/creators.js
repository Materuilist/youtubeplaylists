import {
  SET_PLAYLIST,
  TOGGLE_LOADING,
  SET_DATE,
  SET_SEARCH_RESULTS,
} from "./types";

const BACKEND_WITH_KEY =
  "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDAhOBa7cZ-KrkW2hAWoBsOBVqVBZ52lHo&part=snippet";

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
export function setDate() {
  return {
    type: SET_DATE,
    date: Date.now(),
  };
}

export function setSearchResults(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults,
  };
}

export function fetchPlaylists(playlistName) {
  return async (dispatch, getState) => {
    dispatch(setDate());
    const { loading } = getState().searchResults;
    if (!loading) {
      dispatch(toggleLoading());
    }
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAhOBa7cZ-KrkW2hAWoBsOBVqVBZ52lHo&part=snippet&type=playlist&order=viewCount&maxResults=7&q=" +
        playlistName
    );
    const searchResults = await res.json();
    dispatch(setSearchResults(searchResults.items));
  };
}
