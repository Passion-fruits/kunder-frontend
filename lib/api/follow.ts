import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getIsFollow(user_id) {
    return request({
      method: "get",
      url: `/follow?user_id=${user_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  follow(user_id) {
    return request({
      method: "post",
      url: `/follow/${user_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  unFollow(user_id) {
    return request({
      method: "delete",
      url: `/follow/${user_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
