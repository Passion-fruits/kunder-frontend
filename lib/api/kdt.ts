import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getMyKdt() {
    return request({
      method: "get",
      url: `/kdt`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
