import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getPlaylistDetail(playlist_id) {
    return request({
      method: "get",
      url: `/playlist/${playlist_id}`,
    });
  },
  getUserPlaylist({ user_id }) {
    return request({
      method: "get",
      url: `/playlist/profile/${user_id}`,
    });
  },
  createPlaylist(name) {
    return request({
      method: "post",
      url: `/playlist`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        name: name,
      },
    });
  },
  addMusicToPlaylist({ song_id, playlist_id }) {
    return request({
      method: "post",
      url: `/playlist/${playlist_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: parseInt(song_id),
      },
    });
  },
};
