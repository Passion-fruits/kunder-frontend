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
  getPopularPlaylist({ page, size }) {
    return request({
      method: "get",
      url: `/playlist/popular?page=${page}&size=${size}`,
    });
  },
  updatePlaylistCover({ image, playlist_id }) {
    const fd = new FormData();
    fd.append("image", image);
    return request({
      method: "patch",
      url: `/playlist/${playlist_id}`,
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: fd,
    });
  },
};
