import request from "./axios";

export default {
  getProfileDetail(user_id) {
    return request({
      method: "get",
      url: `/profile/${user_id}`,
    });
  },
};
