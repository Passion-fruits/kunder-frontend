import request from "./axios";

export default {
  getProfileDetail() {
    return request({
      method: "get",
      url: "/profile/3",
    });
  },
};
