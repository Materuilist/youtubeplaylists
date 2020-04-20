import {
  SET_PLAYLIST,
  TOGGLE_LOADING,
  SET_DATE,
  SET_SEARCH_RESULTS,
} from "./types";

export function setPlaylist(title, views) {
  return {
    type: SET_PLAYLIST,
    title,
    views,
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

export function fetchPlaylistItems(playlistId) {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDAhOBa7cZ-KrkW2hAWoBsOBVqVBZ52lHo&part=contentDetails&maxResults=30&playlistId=" +
        playlistId
    );
    const playlistItems = (await res.json()).items.map(
      (plItem) => plItem.contentDetails.videoId
    );

    const videos = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDAhOBa7cZ-KrkW2hAWoBsOBVqVBZ52lHo&part=statistics&maxResults=30&id=" +
        playlistItems.join(",")
    );
    const views = (await videos.json()).items.map(
      (video) => video.statistics.viewCount
    );

    const { data } = getState().searchResults;
    const plTitle = data.find(
      (playlist) => playlist.id.playlistId === playlistId
    ).snippet.title;

    dispatch(setPlaylist(plTitle, views));
  };
}

export function fetchPlaylists(playlistName, delay) {
  return async (dispatch, getState) => {
    const date = Date.now();
    dispatch(setDate(date));
    const { loading } = getState().searchResults;
    if (!loading) {
      dispatch(toggleLoading());
    }
    await new Promise((resolve) => setTimeout(() => resolve(), delay));
    const { timestamp } = getState().searchResults;
    //устаревший запрос
    if (date < timestamp) {
      return;
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
