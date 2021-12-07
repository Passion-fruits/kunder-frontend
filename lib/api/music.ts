import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getMusicDetail(song_id) {
    return request({
      method: "get",
      url: `/song/${song_id}`,
    });
  },
  getUserMusic({ user_id, page }) {
    return request({
      method: "get",
      url: `/song/profile/${user_id}?page=${page}`,
    });
  },
  uploadMusic({ song, cover_img, title, description, genre, mood, duration }) {
    const fd = new FormData();
    fd.append("song", song);
    fd.append("song", cover_img);
    fd.append("title", title);
    fd.append("description", description);
    fd.append("genre", genre);
    fd.append("mood", mood);
    fd.append("duration", duration);
    return request({
      method: "post",
      url: "/song",
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: fd,
    });
  },
};
