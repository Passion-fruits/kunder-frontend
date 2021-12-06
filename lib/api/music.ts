import request from "./axios";

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
};
