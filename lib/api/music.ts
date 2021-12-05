import request from "./axios";

export default {
  getMusicDetail() {
    return request({
      method: "get",
      url: "/song/10",
    });
  },
  getUserMusic({ user_id, page }) {
    return request({
      method: "get",
      url: `/song/profile/${user_id}?page=${page}`,
    });
  },
};
