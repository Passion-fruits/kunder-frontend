import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_ID } from "../api/export";
import { toast } from "material-react-toastify";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  timeout: 100000,
});
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

const refreshError = () => {
  localStorage.setItem(ACCESS_TOKEN, "");
  localStorage.setItem(REFRESH_TOKEN, "");
  localStorage.setItem(USER_ID, "");
  toast.info("🖐 로그인 만료되었습니다.");
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    if (status === 401) {
      if (localStorage.getItem(REFRESH_TOKEN)) {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        // request refresh token
        axios({
          url: `${process.env.NEXT_PUBLIC_API_DOMAIN}refresh`,
          method: "get",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        })
          .then((res) => {
            const data = res.data;
            const accessToken = data.access_token;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            onTokenRefreshed(accessToken);
          })
          .catch(() => {
            refreshError();
          });
      } else {
        refreshError();
      }
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken) => {
          originalRequest.headers.Authorization = "Bearer " + accessToken;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
