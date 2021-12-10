import request from "./axios";

export default {
  getSimilarMusic({ song_id, size }) {
    return request({
      method: "get",
      url: `/recommend/song/detail?song_id=${song_id}&size=${size}`,
    });
  },
};
