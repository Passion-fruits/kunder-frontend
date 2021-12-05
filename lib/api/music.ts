import request from "./axios";

export default {
  getMusicDetail() {
    return request({
      method: "get",
      url: "/song/10",
    });
  },
};
