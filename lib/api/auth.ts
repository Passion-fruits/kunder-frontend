import request from "./axios";

export default {
  googleLogin(google_token) {
    return request({
      url: `/oauth2/code/google`,
      method: "post",
      data: {
        id_token: google_token,
      },
    });
  },
};
