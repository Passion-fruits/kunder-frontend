import request from "./axios";

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
};
