import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getIsMusicLike(song_id) {
    return request({
      method: "get",
      url: `/like/song?song_id=${song_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  musicLike(song_id) {
    return request({
      method: "post",
      url: `/like/song/${song_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  musicUnLike(song_id) {
    return request({
      method: "delete",
      url: `/like/song/${song_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getIsPlaylistLike(playlist_id) {
    return request({
      method: "get",
      url: `/like/playlist?playlist_id=${playlist_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  playlistLike(playlist_id) {
    return request({
      method: "post",
      url: `/like/playlist/${playlist_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  playlistUnLike(playlist_id) {
    return request({
      method: "delete",
      url: `/like/playlist/${playlist_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
