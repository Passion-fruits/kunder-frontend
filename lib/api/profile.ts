import request from "./axios";
import { ACCESS_TOKEN } from "./export";

export default {
  getProfileDetail(user_id) {
    return request({
      method: "get",
      url: `/profile/${user_id}`,
    });
  },
  updateProfile({ name, bio, insta, facebook, soundcloud, youtube }) {
    return request({
      method: "put",
      url: `/profile`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        name,
        bio,
        insta,
        facebook,
        soundcloud,
        youtube,
      },
    });
  },
  updateProfileCover(file) {
    const fd = new FormData();
    fd.append("image", file);
    return request({
      method: "put",
      url: `/profile/image`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: fd,
    });
  },
  getUserFollower({ user_id, page }) {
    return request({
      method: "get",
      url: `/follower/${user_id}?page=${page}`,
    });
  },
  getUserFollowing({ user_id, page }) {
    return request({
      method: "get",
      url: `/following/${user_id}?page=${page}`,
    });
  },
};
