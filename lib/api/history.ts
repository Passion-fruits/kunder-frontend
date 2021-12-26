import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  setHistory(song_id) {
    return request({
      method: "post",
      url: `/history`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: song_id,
      },
    });
  },
};
