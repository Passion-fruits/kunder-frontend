import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getComment(song_id) {
    return request({
      method: "get",
      url: `/comment/${song_id}`,
    });
  },
  writeComment({ song_id, content }) {
    return request({
      method: "post",
      url: `/comment`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: parseInt(song_id),
        content: content,
      },
    });
  },
};
