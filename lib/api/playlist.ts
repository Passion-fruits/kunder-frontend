import request from "./axios";

export default {
  getPlaylistDetail() {
    return request({
      method: "get",
      url: "/playlist/3",
    });
  },
};