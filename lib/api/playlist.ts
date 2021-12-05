import request from "./axios";

export default {
  getPlaylistDetail() {
    return request({
      method: "get",
      url: "/playlist/3",
    });
  },
  getUserPlaylist({ user_id }) {
    return request({
      method: "get",
      url: `/playlist/profile/${user_id}`,
    });
  },
};
