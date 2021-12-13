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
  signup({ name, email, userGenre, image_path }) {
    return request({
      url: `/auth`,
      method: "post",
      data: {
        name: name,
        email: email,
        user_genre: userGenre,
        image_path: image_path,
      },
    });
  },
};
