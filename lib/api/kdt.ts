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
  getMySupport({ done, size, page }) {
    return request({
      method: "get",
      url: `/kdt/history/donate?done=${done}&size=${size}&page=${page}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getIsSupported({ done, size, page }) {
    return request({
      method: "get",
      url: `/kdt/history/answer?done=${done}&size=${size}&page=${page}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  answerForSupport({ answer, msg_id, donate_user_id }) {
    return request({
      method: "post",
      url: `/kdt/answer`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        answer: answer,
        message_id: msg_id,
        donate_user_id: donate_user_id,
      },
    });
  },
};
